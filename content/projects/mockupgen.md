---
title: "Mockupgen"
date: 2023-05-18T16:31:02-07:00
draft: false

project-tags: ["design", "software"]
description: "A Python-based CLI that generates a device mockup from a screenshot"
hideDate: true
image: "/media/mockupception.png"
aside: "Install with `pip install mockupgen`


Run with `mockupgen screenshot.png`
<br>
<br>
"
links: [
    { name: "CLI repository", url: "https://github.com/rmenon1008/mockupgen/", icon: "github" },
    { name: "Template index", url: "https://github.com/rmenon1008/mockupgen-templates/", icon: "github" },
]
---

{{< fig src="/media/mockupception.png" alt="Mockupception of a mockup within a mockup, within a mockup, etc." caption="Mockupception" >}}

Device mockups are great for showing off screenshots in a more professional way (and I like using them here on my site), but they can be a pain to make. Typically, they require expensive photo editing software and a lot of manual work.

I wanted to make a CLI that, while sacrificing some fidelity, could quickly generate a device mockup from a screenshot.

## Installation and usage

If you just want to try it out, you can install it with pip:

```bash
>  pip install mockupgen
```

Then, run it and follow the prompts:

```bash
>  mockupgen screenshot.png
```

## How it works

Mockupgen is built in Python and takes advantage of opencv-python to handle all the image manipulation. When it's asked to create a mockup, it grabs the latest template index from the [template repository](https://github.com/rmenon1008/mockupgen-templates/). This has an `index.json` file that contains all the template images and metadata.

Then, it grabs the assets it needs and can start generating the mockup.

### 1. Masking

Many phone, tablet, and (more recently) laptop screens aren't completely rectangular. A transparent PNG is used to mask the provided screenshot.
{{< fig src="/media/mockupgen_masking.png" alt="Diagram showing a mask being applied to a screenshot image" transparent="true" style="margin-top:0" >}}

### 2. Warping

Then, we line up the screenshot corners with the points on the screen in the template. These are provided in the template metadata. Thankfully, OpenCV has some functions that make this simple.
{{< fig src="/media/mockupgen_warping.png" alt="Diagram showing a screenshot being warped to fit 4 points on the template" transparent="true" style="margin-top:0" >}}


### 3. Compositing

Finally, we take the warped screenshot and place it on top of the template.
{{< fig src="/media/mockupgen_compositing.png" alt="Diagram showing a warped screenshot being composited on top of a template image" transparent="true" style="margin-top:0" >}}


### 4. Bonus improvements

With some small changes we can make the output image a lot better:

1. If we perform the masking, warping and compositing steps in a higher resolution, we can improve quality. I do this by up-scaling screenshot and template images before the operations, and then down-scaling them by the same amount before we save it.

2. Perfect black in the screenshot probably isn't perfect black in the template (and same for perfect white). By adding the black-point and white-point as hex values to the template metadata, we can adjust the screenshot colors to match these points.

{{< fig src="/media/mockupgen_corrections.png" alt="Diagram comparing output with and without corrections." transparent="true" style="margin-top:0" >}}

## More to come

My selection of templates is fairly limited at the moment, so I'm working on expanding this. If you'd like to contribute, check out the [template repository](https://github.com/rmenon1008/mockupgen-templates/) and submit a pull request!

I'd also like to support shadows, highlights and textures. I think these changes could get it's output much closer to the realism that Photoshop mockups achieve. I think this could also allow some better paper mockups to be generated. If you have any ideas on implementing these features, feel free to submit an issue or PR on the [main repository](https://github.com/rmenon1008/mockupgen/).