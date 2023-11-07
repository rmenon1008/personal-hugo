---
title: "Lunar Rover Networking"
date: 2023-03-31
draft: false
aliases: ['/s/dcgr']

project-tags: ["electronics", "software"]
description: "Connectivity-aware routing and mission planning for the moon"
hideDate: true
images: ["/media/dcgr_thumb.png"]
aside: "This project is a collaboration between the [UW Sensor Systems Lab](https://sensor.cs.washington.edu/) and [Astrobotic](https://www.astrobotic.com/), funded by a NASA ESI grant.


I became involved in the winter of 2022, building a simulated environnement for developing routing algorithms that consider the physical movement of network agents and their radios.


We [presented our work](https://ieeexplore.ieee.org/abstract/document/10219232) at IEEE CCAAW 2023 in June, 2023.
"
links: [
    {name: "DTN Simulator", url: "https://github.com/rmenon1008/dcgr_simulation", icon: "github" },
]
---
{{< fig src="/media/dcgr_thumb.png" alt="Lunar Surface RF Simulator" caption="A prototype ray tracing based simulator for lunar RF propagation" >}}

Planned lunar missions promise to bring a host of new robotic and human explorers to the moon. Today, the wireless connectivity needs of these assets would be largely unmet. And given the cost of deploying infrastructure on the moon, a centralized approach (such as a cellular-style network) may not be feasible for some time.

Instead, we imagine a distributed graph of network agents, running on a variety of lunar assets. Since this network won't be supported by permanent infrastructure, the range of each agent will be relatively small and their time in contact with one another will be largely unpredictable.

Importantly, these agents will intelligently work to optimize the network. We're exploring how agents can make physical movement and data routing decisions to better facilitate the transfer of data within the network.

We published a [workshop paper](https://ieeexplore.ieee.org/abstract/document/10219232) about a novel routing algorithm that considers the physical movement of network agents and their radios. To this end, we build an agent-based model that simulates many agents on the lunar surface.

{{< fig src="/media/dcgr.png" alt="DCGR Simulator" caption="Simulator for the development of RDTN" >}}

Now we're working on a simulator that correctly models RF propagation, consider factors like reflection and diffraction. We hope to be able to train learning-based algorithms that make movement and routing decisions based on the RF environment.