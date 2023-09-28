---
title: Gracefully loading a grid of images
subtitle: Just some CSS and vanilla JS.
date: 2021-05-30
draft: false
alias: loading-images-in-a-grid

project: "Web Portfolio"
image: "/media/grid_thumb.png"
tags: ["software", "design"]
---

High quality images can take a few seconds to load, even on fast internet connections, but users expect websites to be interactive in much faster. Browsers typically handle this by loading in the text and layout information first, loading the images in the background. When an image is ready for display, it appears on the page.

While this works great for most scenarios, this random popping into view can be jarring when there are many images in view at once, such as in a grid layout. When load times are slower, the problem is made worse.

{{< vid src="/media/lig-1.webm" autoplay=true loop=true bar=true >}}

## My Implementation
The solution is to load in placeholder boxes immediately to signify the presence of content. Then, once all the images have finished loading, fade them in over the placeholders with a quick animation. This ends up being much more pleasing, even on slower connections.

{{< vid src="/media/lig-2.webm" autoplay=true loop=true bar=true >}}

The images we want to load in this “batch” are each contained in a div with a light gray background. Since the images themselves start completely transparent, these containers are what we see when the page first loads.

```html
<div class="image-container">
    <img class="batch-load" src="">
</div>
```

```css
.image-container {
    /* Image containers are given a light gray background */
    background-color: #ebebeb;
}

img.batch-load {
    /* Images start completely transparent */
    opacity: 0;

    /* When they load in, they are animated slightly */
    transition: opacity 0.4s;
}
```

A script waits until all the images are loaded before showing them to the user. If they all haven’t finished loading in a set amount of time (2.5 seconds in this case), we should just show what we have so far.


```js
// Taken from https://stackoverflow.com/questions/11071314/
// Triggers when all the batch-loaded images have finished loading
Promise.all(Array.from(document.querySelectorAll('.batch-load'))
.filter(img => !img.complete).map(img => new Promise(resolve => {
    img.onload = img.onerror = resolve;
}))).then(() => {
    setImageOpacity(1)   // Makes the images visible
});

// If it's taken 2.5s and the images haven't finished loading, 
// just show whatever we have
setTimeout(function() {
    setImageOpacity(1)   // Makes the images visible
}, 2500);

function setImageOpacity(opacity) {
    document.querySelectorAll('.batch-load').forEach(function(image) {
        image.style.opacity = opacity;
    });
}
```

Finally, if JS execution is disabled, we want to make sure that the images are still visible, so this bit gets added to the site footer just in case.

```html
<noscript>
    <style>
        img {
            opacity: 1 !important;
        }
    </style>
</noscript>
```

This method won’t play well if you are trying to lazy load the images as well, so it shouldn’t be used on huge lists of images. Modifying the effect to only apply to images that are first visible to the user (maybe the first 5 images or so) may help with longer pages.