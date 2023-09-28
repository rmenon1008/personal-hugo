---
title: "Resonant"
date: 2021-08-21
draft: false

project-tags: ["academic", "electronics", "software"]
description: "A hybrid approach to sound positioning and recognition"
hideDate: true
aliases: [
    "/projects/resonant/",
    "/research/resonant/",
]

image: "/media/resonant.webp"
aside: "This project was developed in collaboration with Kalin Kochnev and Jacob Yanoff for the 2021 Senior Division GCRSEF. It received Highest Honors in the NY State STANYS science and engineering fair"
links: [
    {name: "Github repository", url: "https://github.com/kalinkochnev/resonant", icon: github},
]
---

{{< fig src="/media/resonant.webp" alt="Resonant wearable heads up display" caption="Resonant installed into a baseball cap with a heads up display" >}}

Recent advancements in machine learning and image processing mean that the ability of computers to see has improved drastically in the last 10 years. While sound is a crucial part of how most people experience their environments, computer hearing has not seen the same advancements. We aimed to develop algorithms to locate audio signals within 3D space as well as classify them into several relevant categories. Additionally, we wanted to convey this information to a user via a wearable device.

The final device uses cross-power spectrum phase analysis to determine the arrival angle of arrival based on two pairs of microphones and displays this information via a heavily modified baseball cap. It uses a small, brim-mounted OLED display to convey positional information to the user. We imagine that potentially, it could be used by a person who is deaf or hard of hearing to better understand their soundscape. The classification algorithm relies on an artificial neural network generated through supervised deep learning. The localization algorithm proved to be highly accurate, with an average error of 2.53% when determining the relative angle of a sound source.

The machine learning algorithm is quite successful at identifying test data, exhibiting 84.6% accuracy, however, overfitting is still present and further optimization is required to make the algorithm applicable to less contrived data. While these algorithms perform well independently, combining their functionality poses a new set of challenges that we hope to address in future research.

## Demo video

{{< youtube GWMT6hhnRto >}}

## Paper

{{< pdf "/media/resonant.pdf" >}}