---
title: "OTA Updates"
date: 2020-04-24
draft: false

image: "/media/sensor_inside.webp"
---

{{< fig src="/media/sensor_inside.webp" alt="Inside of an Aquametric V2 device">}}

The frequent trips to the stream for software updates were starting to get tiring, so we sought to implement OTA updates. We also wanted to be able to change the frequency at which our sensor wakes up and takes a measurement (e.g. hourly, every 15 minutes).

The Particle Electron microcontroller we are using supports OTA updates out of the box, but it does not save flash requests in any kind of queue. This means that we can’t update the device firmware for the time that the sensor is in a deep sleep. Additionally, even if we could time the update exactly for when it wakes, the runtime has been minimized to about 15 seconds and so it would not have enough time to complete the update before going back into a deep sleep.

We created a server that handles both the OTA and variable frequency features of the sensor. When the device wakes, it accesses a json file on our server. This contains two pieces of information, the amount time that the device should deep sleep for and whether or not there is an OTA update available.

If there is a piece of firmware ready to upload, the device publishes “ready_for_update” to Particle and waits for 2 minutes. Using webhooks, our OTA server sees this message from the device. It uses Particle JS API to flash the device with the firmware in its queue.

While this seems pretty convoluted, this solution allows the device to skip the 2 minute waiting time if there is no update available which saves battery life. We hope to use the variable measurement frequency to take readings more often when we detect some anomaly with stream conditions.