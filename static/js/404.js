function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (
      (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
    );
  }

  function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  const search = window.location.pathname;
  const slug = search.split("/").pop();
  const results = sitelist
    .filter((item) => {
      return (
        similarity(item.link, search) + similarity(item.title, slug) > 0.5
      );
    })
    .sort((a, b) => {
      console.log(similarity(b.link, search) + similarity(b.title, slug))
      return (
        similarity(b.link, search) +
        similarity(b.title, slug) -
        similarity(a.link, search) -
        similarity(a.title, slug)
      );
    })
    .slice(0, 3);

  const resultsDiv = document.getElementById("results");
  if (results.length == 0) {
    resultsDiv.innerHTML = `
    <h2>It may have been moved or deleted</h2>
    <p>Try heading <a href="/">home</a>.</p>
  `;
  } else {
  resultsDiv.innerHTML = `
  <h2>This may be what you're looking for</h2>
    <div class="list-stack">
      ${results
        .map(
          (item) => `
        <div class="lsi" data-tags="" data-year="2023">
          <a href="${item.link}" class="lsi-link unstyled" data-title="${item.title}" style="--bg-color: ">
            <div class="lsi-text">
              <h2 class="lsi-title">${item.title}</h2>
              <time class="lsi-date">${item.date}</time>
            </div>
            ${item.image && `
            <div class="lsi-img">
              <img class="batch-load" src="${item.image}" alt="${item.title}" style="opacity: 1;">
            </div>
            `}
          </a>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  }