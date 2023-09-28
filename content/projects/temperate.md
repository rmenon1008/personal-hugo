---
title: "Temperate"
date: 2022-10-07
draft: false

tags: ["design", "just for fun", "software"]
description: "A minimal Chrome Extension with the temperature and daily images"
hideDate: true
image: "/media/temperate.webp"
aside: "The extension is available from the Chrome Web Store."
links: [
    {name: "Chrome Web Store", url: "https://chrome.google.com/webstore/detail/temperate/bmjmchepldjmchgjkeedkgffpjglnfjc", icon: chrome},
    {name: "Extension source code", url: "https://github.com/rmenon1008/temperate", icon: github},
]
---

{{< fig src="/media/temperate.webp" alt="Temperate extension screenshot">}}

There are countless Chrome Extensions that will replace your new tab page with something new. The problem is that these extensions often try to do too much, sacrificing speed and simplicity.

Temperate revolves around a large number that displays the current temperature and condition. When you hover over this number, it shows you the forecasted temperature and precipitation for the 24 hours. The weather is one of the most important things I want to see regularly, which is why it’s front and center.

{{< fig src="/media/temperate_2.webp" alt="Temperate extension screenshot with temperature graph overlay">}}

Temperate’s background is configured to change daily, showing you high-quality photos from an Unsplash collection you choose. Temperate automatically chooses the UI color scheme based on the image, so it’ll always match.

Of course, if you’d prefer, you can switch to using a solid color background and customize the colors manually, a look that I’m partial to.

{{< fig src="/media/temperate_3.webp" alt="Temperate extension with solid color scheme">}}

The Chrome Extension replaces the new tab page with my custom page. It operates just like any other web page except that it has access to Chrome’s storage API. This is synced across devices with your Google account and is where user preferences are kept.