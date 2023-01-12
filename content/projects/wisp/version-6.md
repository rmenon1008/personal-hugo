---
title: "WISP Version Six"
date: 2022-10-26
draft: false

image: "/media/wisp-basic-node.png"
aside: "This hardware version focused on making the sensing platform more modular. RF functionality is handled by a common board and optional mount-on boards add additional sensors."
links: [
    {name: "Hardware files", url: "https://github.com/wisp/wisp6-hardware", icon: github},
    {name: "Firmware files", url: "https://github.com/wisp/wisp6-firmware", icon: github},
]
---

Previous versions of the Wireless Identification and Sensing Platform (WISP) focused on efficiency and miniaturization. Unfortunately, the tradeoff with these versions was poorer modularity, making it harder to develop new sensing and power modalities. In WISP 6.0, we sought to address these issues with [redesigned hardware](https://github.com/wisp/wisp6-hardware).

## Basic RF node

{{< fig alt="WISP 6.0 basic sensor node" src="/media/wisp-basic-node.png" >}}

The basic RF node contains all the power harvesting and wireless communication electronics along with the device's microcontroller, an [MSP430](https://www.ti.com/product/MSP430FR5969). In order for WISP 6.0 to accommodate most sensor types (which vary vastly in energy consumption), we settled on a harvester design that's more efficient for high energy sensors like a camera. That's why WISP 6.0 features an RF design that is most similar to that of WISPCam.

Various mount-on boards were designed to interface with the headers on the RF node, adding optional sensing and energy harvesting functionality.

## Mount-on boards

{{< fig src="/media/wisp-add-on-sensors.png" alt="Three WISP devices with mount-on sensor boards" caption="Microphone, accelerometer and camera mount-on sensors" >}}

There are two sets of headers that mount-on boards can use to interface with the main RF node. The first set is primarily designed to connect additional sensors to the microcontroller. The second set is designed to connect additional energy sources to the internal harvesting circuitry on the RF node.

### Sensor boards

{{< fig src="/media/wisp-header-sensor.png" alt="WISP header pins labeled with their function" caption="" width="60%" >}}

A variety of GPIO pins are exposed, allowing almost any off the shelf sensor to interface with WISP, provided it has a low enough energy consumption.

### Harvesting boards

{{< fig src="/media/wisp-header-harvesting.png" alt="WISP header pins labeled with their function" caption="" width="60%" >}}

Harvesting boards contribute additional energy through the exposed pins. We've developed a solar harvesting board that includes a larger capacitor bank that gets shared with the storage capacitor provided on WISP.

## Firmware changes

[WISP 6.0 firmware](https://github.com/wisp/wisp6-firmware) is almost identical to that of WISP 5.1. Minor changes were made to support the new pinout for certain interfaces. WISP 6.0 also includes firmware for the implementation of camera and microphone sensors.