---
title: "Wearable Development"
date: 2021-03-26
draft: false

image: "/media/resonant_2.webp"
---

{{< fig src="/media/resonant_2.webp" alt="Resonant wearable heads up display" >}}

With progress being made on the algorithms side of Resonant, I started looking at how we were going to present our information to a user that is potentially deaf or hard of hearing. The first step was deciding on a form factor. The requirements were pretty simple.

1. Display the source and classification of sound
2. Does not impede normal vision significantly
3. Fairly discrete and comfortable

We settled on a baseball cap, with a small OLED display mounted in the brim of the hat. This option was easy to implement, but it had its drawbacks. For one, the information is displayed on an opaque screen, so a portion of the user’s vision is lost. Secondly, without a lens, it can be straining to focus on the screen, which is mounted relatively close to the user’s eyes.

{{< fig src="/media/resonant_3.webp" alt="Diagram of Resonant wearable" >}}

With the display selected, I could plan out the rest of the hardware. It’s just 5 main components

1. Respeaker 4 Microphone array
2. OLED display
3. Raspberry Pi 3A
4. MPU6050 IMU
5. Battery and control circuity

Components were sewn into the hat and headers were replaced with flexible silicone wire to make the finished device as comfortable as possible. Surprisingly, the finished device was comfortable and takes special attention to notice that it’s modified (apart from the brim-mounted display).