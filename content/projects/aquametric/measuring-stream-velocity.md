---
title: "Measuring Stream Velocity"
date: 2020-09-11
draft: false

image: "/media/stream_vel.webp"
---

{{< fig src="/media/stream_vel.webp" alt="Diagram depicting the cross section of a stream">}}

While stage height can provide useful data to help predict flood events or other localized events, it is sometimes not enough to be able to quantitatively measure how one water body will interact with another.

The flow rate can provide this data, but in order to measure it, you need to know a) the cross section of the stream, b) the height of the water flowing through that cross section, and c) the velocity of the water. Our device directly measures the height of the water and we did a project log on getting the cross section of a stream. We thinking about two different approaches.

## 1. Infer It
This is where the installer of the device would measure the average velocity manually when the stream is at a variety of different water levels to correlate the two. In theory, there’s only one water velocity for a given water level. The installer could come to the stream a number of times (e.g. when the stage is 5 cm, 20 cm, 50 cm and 1 meter) and measure the velocity with a propeller based current meter. At that point, a unique expression that correlates velocity and stage could be created for the stream.

## 2. Measure it on device
Measuring the velocity in real time reduces the number of times an installer has to visit the device location, and it may provide new insight that we wouldn’t gather from the first option. The most obvious way to do it is with a propeller based current meter. However, if we’ve learned anything from this project, it’s that debris will find its way into anything open to it. Shrouding it in some sort of case is an option, but in general we would like to keep the device free of moving parts.

We’re also thinking about finding the velocity indirectly. By measuring the drag force that an object feels in the water, we should be able to calculate the velocity. We imagine a small load cell mounted near the base of the sensor with a plate mounted to its other end. This study appears to be doing a very similar thing in a lake.

There is actually a phenomenon that isn’t fully addressed by any of these methods. The velocity of water in a stream varies from near 0 at the stream bed to its maximum on the surface. The cross section looks something like this.

Measuring velocity like this in real time is probably out of the question for our sensor’s budget. Maybe if this kind of measurement was taken once, we could use the height to infer the velocity. However, even one manual analysis like this is costly and labor intensive.

Neither of us are environmental science experts (or engineering experts for that matter), so we would love any feedback that you might have.