---
title: "Resume"
date: 2022-10-26
draft: false
menu: "main"
weight: 4
wide: true
hideDate: true
# aliases:
#     - /resume
---

{{< resume >}}

resume:
  - section: Connect
    items:
      - description: |
          {{< connect-card >}}
  - section: Education
    items:
      - title: Massachusetts Institute of Technology
        date: Sep 2024 - Present
        description: |
          Ph.D. in Electrical Engineering and Computer Science

      - title: University of Washington
        date: Sep 2021 - Dec 2023
        description: |
          B.S. Electrical and Computer Engineering

  - section: Experience
    items:
      - title: Graduate Researcher · [Signal Kinetics](https://www.media.mit.edu/groups/signal-kinetics/overview/) @ [MIT Media Lab](https://www.media.mit.edu/)
        date: Sep 2024 - Present
        description: |
          - Working on batteryless underwater sensing using acoustic backscatter

      - title: Embedded Hardware and Software Engineer · [WaveWorks](https://waveworks.tech/)
        date: Mar 2024 - Aug 2024
        description: |
          - Developed a wireless protocol for custom ultra-low power modems to support a range of use cases
          - Built software tools to automate aspects of FPGA testing
          - Established a simulated RTL CI pipeline for FPGA and ASIC design

      - title: Undergraduate Researcher · [UW Sensor Systems Lab](https://sensor.cs.washington.edu/)
        date: Feb 2022 - Mar 2024
        description: |
          *[WISP](https://www.rohanmenon.com/projects/wisp/)* - a family of
          batteryless sensors that are powered by and communicate entirely
          through UHF RFID power harvesting and backscatter.
          - Developed embedded firmware for version 6 of WISP
          devices, and built a cross-platform desktop app to collect
          and visualize its data.
          - [**R. Menon**, R. Gujarathi, A. Saffari, J. Smith, “Wireless
          Identification and Sensing Platform Version 6.0”, EnsSys
          2022](https://dl.acm.org/doi/pdf/10.1145/3560905.3568109)

          <br>

          *[Deep Contact Graph Routing](/projects/lunar-rover-networking)* - a
          collaboration with Astrobotic, developing new networking strategies
          for future lunar assets.
          - Built a ray-tracing based, GPU-accelerated, simulator for modeling RF
          propagation and networking between mobile agents.
          - [D. Ta, **R. Menon**, J. Taggart, A. Tettamanti, S. Feaser, P.
          Torrado, J. Smith, "Roaming DTN: Integrating Unscheduled Nodes into
          Contact Plan Based DTN Networks", to be presented at CCAA (June
          2023)](https://ieeexplore.ieee.org/abstract/document/10219232)
  - section: Skills
    items:
      - title: Hardware
        description: |
          - Digital and analog circuit design
          - PCB design, rapid prototyping
          - Wirelss communication (RFID, LoRa, Bluetooth)
      - title: Software
        description: |
          - Python, Rust, C/C++
          - Embedded firmware
          - Frontend dev (JS/TS, React, web design)

{{< /resume >}}
