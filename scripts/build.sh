#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
hugo_version=$(cat .hugo-version)

# Install the pinned extended release on Vercel, independent of its build image.
if [[ "${VERCEL:-}" == "1" ]]; then
  case "$(uname -m)" in
    x86_64) hugo_arch=amd64 ;;
    aarch64|arm64) hugo_arch=arm64 ;;
    *) echo "Unsupported build architecture" >&2; exit 1 ;;
  esac
  hugo_tmp=$(mktemp -d)
  trap 'rm -rf "$hugo_tmp"' EXIT
  hugo_archive="hugo_extended_${hugo_version}_linux-${hugo_arch}.tar.gz"
  hugo_release="https://github.com/gohugoio/hugo/releases/download/v${hugo_version}"
  curl --fail --silent --show-error --location "${hugo_release}/${hugo_archive}" -o "${hugo_tmp}/${hugo_archive}"
  curl --fail --silent --show-error --location "${hugo_release}/hugo_${hugo_version}_checksums.txt" -o "${hugo_tmp}/checksums.txt"
  (cd "$hugo_tmp" && grep " ${hugo_archive}$" checksums.txt | sha256sum --check --strict)
  tar -xzf "${hugo_tmp}/${hugo_archive}" -C "$hugo_tmp" hugo
  export PATH="${hugo_tmp}:${PATH}"
fi

hugo_info=$(hugo version)
if [[ "$hugo_info" != "hugo v${hugo_version}+extended"* ]]; then
  echo "Expected Hugo ${hugo_version} extended; found: ${hugo_info}" >&2
  exit 1
fi
echo "$hugo_info"
hugo build --environment production "$@"
