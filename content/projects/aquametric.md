---
title: "Aquametric"
date: 2021-11-26
draft: false

project-tags: [academic, electronics, software]
description: "Low cost and distributed stream and river monitoring"

aliases: [
    "/projects/aquametric/",
    "/research/aquametric/",
    "/s/aquametric",
]
hideDate: true
image: "/media/aquametric.webp"
aside: "This project was developed in collaboration with Lillian Vernooy. It received a Hackaday Bootstrap Award and was a Finalist for the 2020 Hackaday Prize."
links: [
    {name: "Github repository", url: "https://github.com/ver09934/aquametric", icon: github},
    {name: "Hackaday project updates", url: "https://hackaday.io/project/170881", icon: hackaday},
]
---

{{< fig src="/media/aquametric.webp" alt="Aquametric device installed in a stream" caption="Aquametric version 1.0 mounted in Alplause Kill">}}

Metrics such as stage height, conductivity, and temperature can provide valuable insight into ecological health and can also serve as predictors for events such as flooding. Traditionally, these metrics are measured either manually by a scientist or by large and expensive permanently installed stations. Unfortunately, human measurement reduces the possible frequency of data collection and traditional sensor stations require lots of infrastructure.

We aimed to address both of these problems by creating a low-cost, distributed IOT sensor network. The stream monitoring system consists of one or more sensing units that communicate over cellular data to a central server. A cellular enabled microcontroller coordinates input from the various sensors. A laser time of flight (ToF) sensor is mounted towards the surface of the water to measure changes in gauge. These components are mounted in a 3D printed, weather-proof case about 30 cm above the highest expected height of the stream. Conductivity and temperature sensors are mounted below the water’s surface.

The sensing unit is designed to use as little power as possible in order to maximize their lifetime. They enter a sleep state for the time between sensor readings and wake once an hour. Then, they connect to a central server via an LTE data connection. The server stores the sensor data in a database and hosts a website to access and analyze historical data.