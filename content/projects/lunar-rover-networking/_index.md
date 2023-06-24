---
title: "Lunar Rover Networking"
date: 2023-03-31
draft: false

tags: ["electronics", "software"]
description: "Connectivity-aware routing and mission planning for the moon"

image: "/media/dcgr.png"
aside: "This project is a collaboration between the [UW Sensor Systems Lab](https://sensor.cs.washington.edu/) and [Astrobotic](https://www.astrobotic.com/), funded by a NASA ESI grant.


I became involved in the winter of 2022, building a simulated environnement for developing routing algorithms that consider the physical movement of network agents and their radios.


We [presented our work](https://ieee-ccaa.com/wp-content/uploads/2023/06/26.pdf) at IEEE CCAAW 2023 in June, 2023.
"
links: [
    {name: "DTN Simulator", url: "https://github.com/rmenon1008/dcgr_simulation", icon: "github" },
]
---
{{< fig src="/media/dcgr.png" alt="DCGR Simulator" >}}

Planned lunar missions promise to bring a host of new robotic and human explorers to the moon. Today, the wireless connectivity needs of these assets would be largely unmet. And given the cost of deploying infrastructure on the moon, a centralized approach (such as a cellular-style network) may not be feasible for some time.

Instead, we imagine a distributed graph of network agents, running on a variety of lunar assets. Since this network won't be supported by permanent infrastructure, the range of each agent will be relatively small and their time in contact with one another will be largely unpredictable.

Importantly, these agents will intelligently work to optimize the network. We're exploring how agents can make physical movement and data routing decisions to better facilitate the transfer of data within the network.

Right now, we're working on the problem from two ends:
1. Using physical-layer evidence to help find other network agents.
2. Developing a CGR-based algorithm that copes with unpredictable agents.