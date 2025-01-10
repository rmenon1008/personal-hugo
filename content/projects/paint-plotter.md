---
title: Paint Plotter
date: 2024-06-23
draft: false

project-tags: [design, electronics, software]
description: "Plotting art with acrylics and watercolors"

hideDate: true
images: ["/media/paint-plotter.png"]
aside: "This is a work in progress. I have much of the hardware and control software done and am now getting my feet wet with generative art."
---

{{< fig src="/media/paint-plotter.png" alt="My plotting robot making a geometric painting" caption="One of the first paintings I made with the plotter">}}

{{< fig src="/media/paint-plotter-finished-art.jpg" alt="Geometric art produced from the paint plotter" caption="The finished piece" width="50%">}}


This project was inspired by some beautiful plotted art I came across from [Arnaud Pfeffer](https://x.com/arnaudpfef/). All their work is amazing, but I really loved their work that used brushes and played with transparency.

## Mechanical Design

I had been wanting to do more mechanical design recently. From my experience with 3D printer kits, I knew that Aliexpress and 3D printed parts could get me most of the way.

My x-axis is based on a 20x60 mm v-slot extrusion. A stepper motor mounted to the end of the extrusion drives the OpenBuilds-style gantry with a belt. The y-axis, instead, uses two steel rods and a 3D printed bearing block. Again, a stepper at the end of the axis drives the gentry with a belt.

The z-axis took some more careful design and is still changing as I experiment with different tools (it seems like pens and brushes could use slighly different designs). Currently, it uses another stepper motor to rotate a spool of string. The string lifts a linear rail that holds the tool. A rubber band pulls the tool down to keep it in constant pressure with the paper.

An Arduino Uno with a GRBL shield accepts GCODE and controls the steppers.

## Brush ramping

Unlike a pen, a brush can't be pressed completely vertically on to the page, the bristles will splay outwards. Instead, I wrote a tool to add a ramp to the brush path as it touches or releases from the page. My implementation isn't particularly advanced (for example it doesn't consider the curve of the shape it's entering, only the 2D tangent), but it's able to avoid the brush splaying problem and creates less-noticable seams on closed shapes.

{{< fig src="/media/brush-toolpaths.gif" alt="Toolpath animation of plotting with, and without ramping" caption="Toolpaths of painting a square with and without ramping" width="70%">}}
