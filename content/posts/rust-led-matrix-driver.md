---
title: A HUB75 LED Matrix Driver, in Rust
date: 2023-10-12
draft: false

images: ["/media/led_matrix.png"]
tags: ["software", "electronics"]
---

{{< fig src="/media/led_matrix.png" alt="A low resolution LED matrix with a horse displayed" >}}

I was surprised to find that the [LED matrix I had just purchased from Waveshare](https://www.waveshare.com/rgb-matrix-p2.5-96x48-f.htm) didn't use a digital interface like I2C or SPI. Instead, the HUB75 panel requires constant pixel data to be clocked in by its controller. Any delay in this stream causes headache-inducing flickering.

I tried the pre-built driver libraries for the Raspberry Pi (both the C++ and Rust variants), but they were unacceptably slow, with visible flickering. I decided to dedicate a separate microcontroller to the task and have it abstract the panel as a simple SPI device. I chose the Pi Pico, which has a fast processor, along with its special "Programable IO" blocks, which will come in handy for later versions.

While I have some Rust experience, this was my first project on an embedded device. While some things weren't intuitive to me (like GPIO being directly typed to the hardware pin number), I felt like I was learning about how the hardware worked while I was writing the driver, which was really cool. Ultimately, Rust's compiler and type system helped me write code that worked a lot faster, with bugs that were easier to find.

Each pixel on the display is drawn individually, and only two are lit at any time, so the driver needs to be able to draw pixels as fast as possible. I overclocked the Pico, setting the divider as low as possible to get rid of any remaining flickering. I also used the Pico's two cores to multithread the SPI communication and pixel drawing, which helped a lot.

You can find the [driver](https://github.com/rmenon1008/led_matrix_rp2040_rust) here. It's still a work in progress, but it works for me as-is. I'm working on a version that uses the PIO and DMA to improve drawing speed even more. With these involved, I should be able to get the display to go brighter, without causing flicker.
