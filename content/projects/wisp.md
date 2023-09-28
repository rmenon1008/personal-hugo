---
title: "WISP"
date: 2023-01-12
draft: false

project-tags: ["electronics", "academic", "software"]
description: "A hardware platform and desktop app for RFID-based sensors"
hideDate: true
image: "/media/wisp.webp"
aside: "
WISP was first developed by Intel Labs Seattle in 2006. It is now developed and maintained by the [UW Sensor Systems Lab](https://sensor.cs.washington.edu/).


Version 6.0 of the platform focuses on making development easier with a new modular hardware design and a companion desktop application.


We published a [workshop paper on WISP 6.0](https://dl.acm.org/doi/pdf/10.1145/3560905.3568109), which I presented at ACM LP-IoT in October, 2022.
<br>
<br>
"
links: [
    {name: "Workshop paper", url: "/media/workshop_paper.pdf", icon: pdf},
    {name: "Sensor Systems Lab", url: "https://sensor.cs.washington.edu/", icon: uw},
    {name: "Hardware, firmware and software", url: "https://github.com/wisp", icon: github},
]
---

{{< fig src="/media/wisp.webp" alt="WISP 5.0 device">}}

The Wireless Identification and Sensing Platform (WISP) is an RFID-based platform for developing batteryless sensors. RFID systems typically have two devices, a tag and a reader. When a tag is brought close enough to a reader, the tag wirelessly collects energy from the reader and can send back information. However, typically, tags are pretty limited in what they send. It’s usually only a unique identifier.

WISP devices are tags that can do more than standard RFID, performing computation and taking sensor readings on-board. Tags have been made with temperature sensors, accelerometers and even cameras. The captured data is sent wirelessly back to a reader within range.

I’ve been working on developing the next generation of WISP (version 6.0) which brings a modular RF board and microcontroller with add-on boards for various sensor types. Additionally, I developed the new companion desktop application, which simplifies the process of collecting data from WISP devices.