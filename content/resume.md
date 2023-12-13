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
        date: Graduating December 2023
        description: |
          B.S. Electrical and Computer Engineering · GPA: 3.5/4

          Relevant coursework: *The Hardware/Software Interface* · *Computer
          Networks* · *Computer Architecture* · *Network Security and Cryptography*
          · *Digital Imaging Systems*
  - section: Experience
    items:
      - title: Research Assistant · UW Sensor Systems Lab
        date: 2022 - Present
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
        date: 2020 - 2021
        link: /projects/resonant
        description: |
          A system to localize and identify ambient noises and present them to a
          user through a wearable display.

          - Developed a 3D sound localization algorithm using a microphone array
          with phase shift estimation and created a heads-up display to
          communicate this information to a user.
      - title: Aquametric
        date: 2018 - 2020
        link: /projects/aquametric
        description: |
          Low power, cellular-based, stream and river monitoring devices. Won a
          Hackaday Bootstrap Award and was a finalist for the Hackaday Prize
          2020, an international competition for open-source electronics.

          - Developed firmware enabling features like OTA updates and a variable
          sensor uplink cadence.

          - Created a backend and web interface for consuming data from the
          sensors in real time.
  - section: Skills
    items:
      - title: Embedded
        description: |
          - Firmware development, FreeRTOS
          - Cellular, LoRa, RFID communication
          - Digital and analog circuits, PCB design
      - title: Software development
        description: |
          - Python, Rust, C/C++
          - Frontend (JS/TS, React, web design)
          - Flask, Django

{{< /resume >}}