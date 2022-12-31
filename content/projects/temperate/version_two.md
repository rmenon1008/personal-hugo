---
title: "Version Two"
date: 2022-10-02
draft: false

image: "/media/temperate_v2.webp"
---

{{< fig src = "/media/temperate_v2.webp" alt = "Temperate extension screenshot with frosted glass overlays" >}}

Temperate was recently upgraded. While there aren't a ton of cosmetic changes, it’s been largely rewritten behind the scenes. The previous version of Temperate was held together with hope. Just as an example, user settings were shuffled around the app through a convoluted set of exchanges where they were read from local storage, turned into CSS variables, and sometimes re-parsed back into JS variables.

The new app is React-based. While it may be overkill for this application, writing new features and maintaining the app is a lot more fun now. Performance-wise, the application is almost exactly the same speed, albeit with a much larger package size (looking at reducing this by using preact for the next version).

## Frosted glass

The UI changes mostly center around making text readable on image backgrounds. Now, Temperate’s backend generates a primary and secondary color for each image. The primary color is still used for the temperature and text. The secondary color is chosen to have sufficient contrast with the primary color, while still being found somewhere in the image. It’s used as a frosted glass background for smaller text elements.

{{< fig src = "/media/temperate_v2_2.webp" alt = "Temperate extension screenshot with frosted glass overlays" >}}

## Preferences

The app’s preferences page is also revamped, with a greater focus on daily images and links (now supporting nesting)

{{< fig src = "/media/temperate_v2_3.webp" alt = "Temperate extension screenshot with preferences page" >}}

{{< fig src = "/media/temperate_v2_4.webp" alt = "Temperate extension screenshot with preferences page" >}}

## Location

Finally, Temperate can now optionally use your browser-provided precise location instead of approximating it with your IP address. Most of the time it’s fine, but occasionally IP-based geolocation can be wildly wrong. Of course, the option remains to override the location with one that you provide.

{{< fig src = "/media/temperate_v2_5.webp" alt = "Temperate extension screenshot with preferences page" >}}

{{< fig src = "/media/temperate_v2_6.webp" alt = "Temperate extension screenshot with preferences page" >}}