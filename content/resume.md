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
      - title: University of Washington
        date: Sep 2021 - Dec 2023
        description: |
          B.S. Electrical and Computer Engineering

          Relevant coursework: *The Hardware/Software Interface* · *Computer
          Networks* · *Computer Architecture* · *Network Security and Cryptography*
          · *Digital Imaging Systems*
  - section: Experience
    items:
      - title: Research Assistant · UW Sensor Systems Lab
        date: Feb 2022 - Mar 2024
        description: |
          *[WISP](https://www.rohanmenon.com/projects/wisp/)* - a family of
          batteryless sensors that are powered by and communicate entirely
          through UHF RFID power harvesting and backscatter.
          - Developed hardware and embedded firmware for a new, modular,
          generation of WISP devices.
          - Designed and built a cross-platform desktop application to collect
          and visualize data from WISP.
          - [**R. Menon**, R. Gujarathi, A. Saffari, J. Smith, “Wireless
          Identification and Sensing Platform Version 6.0”, EnsSys
          2022](https://dl.acm.org/doi/pdf/10.1145/3560905.3568109)

          <br>

          *[Deep Contact Graph Routing](/projects/lunar-rover-networking)* - a
          collaboration with Astrobotic, developing new networking strategies
          for future lunar assets.
          - Built ray-tracing based, GPU-accelerated, simulator for modeling RF
          propagation between agents.
          - Created open-source framework for simulating networking between
          mobile agents.
          - [D. Ta, **R. Menon**, J. Taggart, A. Tettamanti, S. Feaser, P.
          Torrado, J. Smith, "Roaming DTN: Integrating Unscheduled Nodes into
          Contact Plan Based DTN Networks", to be presented at CCAA (June
          2023)](https://ieeexplore.ieee.org/abstract/document/10219232)
  - section: Projects
    items:
      - title: Resonant
        date: Nov 2020 - Jun 2021
        link: /projects/resonant
        description: |
          A system to localize and identify ambient noises and present them to a
          user through a wearable display.

          - Developed a 3D sound localization algorithm using a microphone array
          with phase shift estimation and created a heads-up display to
          communicate this information to a user.
      - title: Aquametric
        date: Oct 2018 - Dec 2020
        link: /projects/aquametric
        description: |
          Low power, cellular-based, stream and river monitoring devices. Won a
          Hackaday Bootstrap Award and was a finalist for the Hackaday Prize
          2020, an international competition for open-source electronics.

          - Used power gating and aggressive sleep states to extend its battery life to one year in the field.
          - Developed firmware enabling features like OTA updates and a variable sensor uplink cadence.
  - section: Skills
    items:
      - title: Hardware
        description: |
          - Digital (incl. Verilog) and analog circuit design
          - PCB design, rapid prototyping
          - Cellular, LoRa, RFID communication
      - title: Software
        description: |
          - Python, Rust, C/C++
          - Frontend dev (JS/TS, React, web design)
          - Embedded firmware

{{< /resume >}}