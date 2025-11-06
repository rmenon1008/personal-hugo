---
title: "Underwater Backscatter"
date: 2024-10-18
draft: false

tags: ["academic", "electronics", "software"]
description: "Underwater acoustic communication at near zero power"
images: ["/media/backscatter_hand.jpg"]
aside: "This is part of my work as a PhD student at Signal Kinetics, a group at the MIT Media Lab."
links: [
    {name: "Signal Kinetics", url: "https://www.media.mit.edu/groups/signal-kinetics/overview/", icon: link},
]
---

{{< fig src="/media/backscatter_hand.jpg" alt="Temperate extension screenshot">}}

Today, underwater communication is hard. Radio waves, powering almost all wireless communication in air, can't travel more than a few 10s of meters through water. Alternatively, communicating with sound works well (like dolphins and whales!), however, it takes a large amount energy to send these sound waves long distances. If you're trying to build a sensor to continuously monitor ocean temperatures, or river bacterial levels, this is a problem. A battery powered system would need recharging every few days.

Using a technique called backscatter, we're able to communicate using about 1 million times less energy on the sensor, enabling a whole new set of applications. Instead of transmitting all that acoustic energy directly, backscatter works by modulating the reflection or absorption of sound from another source.

{{< fig src="/media/bx_examples.png" alt="Underwater backscatter project examples" transparent="true">}}

This technique was developed at our lab in 2019, and we've been working on pushing what's possible with underwater backscatter since. We've extended the range with arrays of backscatter elements up to 150 meters. Using the communication method, we've developed a battery-free underwater camera and 3D underwater localization.

## How backscatter works

You probably use backscatter every day, in the form of RFID and NFC. When you tap your credit card on a contactless terminal, here's what's going on:
1. The terminal sends a continuous radio signal that wirelessly powers the chip inside your credit card.
1. After the chip powers, on it switches the antenna inside your card between two states, reflecting or absorbing the incoming signal.
1. The terminal can detect these reflected signal and decode your credit card details.

We do exactly the same thing underwater, and with sound instead of radio waves! The major difference is that instead of antennas, we use piezo-ceramic elements (the tubes in the diagram below). These devices turn electrical energy into mechanical energy (sound) and vise versa.

Just like with an RF antenna, we can change *electrical* absorption of an attached circuit to change its *acoustic* absorption. Basically, either by shorting the terminals or leaving them open, we can send a 0 or a 1!

{{< fig src="/media/piezo_backscatter.png" alt="Piezo backscatter diagram" transparent="true">}}

<!-- {{< fig src="/media/temperate_3.webp" alt="Temperate extension with solid color scheme">}} -->

