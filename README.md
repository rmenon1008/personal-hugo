# Rohan's Personal Website
The source for my personal website, [rohanmenon.com](https://www.rohanmenon.com/).

Use the Hugo extended version pinned in `.hugo-version` (currently 0.166.0).
Run `hugo server` for a local preview and `bash scripts/build.sh` for a
production build. The build script checks that the local version matches.

Pushing to `main` triggers the existing Vercel production deployment.
Vercel runs the same build script, which downloads and verifies the pinned
Hugo extended release before building into `public/`. This follows
[Hugo's Vercel build-script approach](https://gohugo.io/host-and-deploy/host-on-vercel/).
