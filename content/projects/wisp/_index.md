---
title: "WISP"
date: 2023-01-12
draft: false

tags: ["electronics", "academic", "_featured", "software"]
description: "RFID tags capable of batteryless computation and sensing"

image: "/media/wisp.webp"
aside: "We recently published a paper on WISP:


R. Menon*, R. Gujarathi*, A. Saffari, J. Smith, “[Wireless Identification and Sensing Platform Version 6.0](https://dl.acm.org/doi/pdf/10.1145/3560905.3568109)”


I presented our work at ACM LP-IoT, 2022 in October.
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

The Wireless Identification and Sensing Platform (WISP) is an extension of standard RFID. RFID systems typically have two devices, a tag and a reader. When a tag is brought close enough to a reader, the tag wirelessly collects energy from the reader and can send back information. However, typically, tags are pretty limited in what they send. It’s usually only a unique identifier.

WISP devices are tags that can do more than standard RFID, performing computation and taking sensor readings on-board. Tags have been made with temperature sensors, accelerometers and even cameras. The data they capture is sent wirelessly to the reader within close range (up to 5 meters with ideal conditions).

I’ve been working on developing the next generation of WISP (version 6.0) which brings a modular RF board and microcontroller with add-on boards for various sensor types. Additionally, this next generation comes with greater support for usable readers and a new desktop application.
