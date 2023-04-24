---
title: Sliding Letter Animations
date: 2023-01-30
draft: true

aside: "Web animation can be a truly delightful experience. Often, however, it adds bloat and makes pages feel sluggish.


I don't claim to have found the perfect ballance between these two, but I like where my website stands on that spectrum."

---

On my site, title text appears with a brief sliding animation. I wanted to draw attention toward the custom type I worked on for the site while making the site more fun to navigate.

When I started looking at letter animations, I came across the wonderful [Moving Letters](https://tobiasahlin.com/moving-letters/) by Tobias Ahlin. It uses anime.js to animate the individual letters of text, creating some cool effects. I was particularly drawn to Effect 7, and I thought it would fit well with the horizontal line I use to separate the header and body sections of pages.

In the source, you can see how the effect is achieved. Using some JS, the word is split up into individual letters. From here, each is assigned an animation. The delay on each letter animation is greater than the last. This is how you get the effect of the letters coming in one after another.

This effect is great as-is and I implemented it on my website for a while. However, for a statically generated site, adding anime.js was bloat I wanted to remove. In fact, with Hugo, I could avoid using JS at all (try it! Turn off JS execution and the animation will still load)

## My Implementation

I should warn you that the implementation of this isn't pretty (HTML purists should look away). Take a look at the source of this page. Each letter is contained in a separate `<span>`.

```html
<h1>Sliding Letter Animations</h1>
<div class="letters" arial-hidden="true">
    <span class="word">
        <span class="letter" style="--index: 0;">S</span>
        <span class="letter" style="--index: 1;">l</span>
        <span class="letter" style="--index: 1.9333333;">i</span>
        <span class="letter" style="--index: 2.8044444;">d</span>
        <span class="letter" style="--index: 3.6174815;">i</span>
        <span class="letter" style="--index: 4.3763160;">n</span>
        <span class="letter" style="--index: 5.0845616;">g</span>
    </span>
    <span class="word">...</span>
    <span class="word">...</span>
</div>

```

Each of these spans has a keyframe animation applied to it. It looks like this:
```css
@keyframes slide-up-kf {
    0% {
        transform: translateY(0) translateX(0) rotate(0);
    }
    100% {
        transform: translateY(1.5em) translateX(-0.75em) rotate(70deg);
    }
}
```
