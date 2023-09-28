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

[[resume]]
section = "Connect"

[[resume.items]]
description = """
{{< connect-card >}}
"""

[[resume]]
section = "Education"

[[resume.items]]
title = "University of Washington · Graduating December 2023"
date = "2021 - Present"
description = "Electrical and Computer Engineering"

[[resume]]
section = "Experience"

[[resume.items]]
title = "Research Assistant · UW Sensor Systems Lab, Prof. Joshua Smith"
date = "2022 - Present"
description = """
Works on [WISP](https://www.rohanmenon.com/projects/wisp/), a family of batteryless sensors that are powered by and communicate entirely through UHF RFID power harvesting and backscatter.
- Developed hardware and embeddded firmware for a new generation of WISP sensors and a companion desktop application
- [<b>R. Menon</b>, R. Gujarathi, A. Saffari, J. Smith, “Wireless Identification and Sensing Platform Version 6.0”, EnsSys 2022](https://dl.acm.org/doi/pdf/10.1145/3560905.3568109)
<br><br>

Also works on [Deep Contact Graph Routing](/projects/lunar-rover-networking), a collaboration with Astrobotic, developing new networking strategies for future lunar assets.
- Created ray-tracing based RF propagation models for lunar surface environments
- [D. Ta, <b>R. Menon</b>, J. Taggart, A. Tettamanti, S. Feaser, P. Torrado, J. Smith, "Roaming DTN: Integrating Unscheduled Nodes into Contact Plan Based DTN Networks", to be presented at CCAA (June 2023)](https://ieeexplore.ieee.org/abstract/document/10219232)
"""

[[resume]]
section = "Projects"

[[resume.items]]
title = "Resonant"
date = "2020 - 2021"
link = "/projects/resonant"
description = """
A system to localize and identify ambient noises and present them to a user through a wearable device.
- Developed a 3D sound localization algorithm using a microphone array with phase shift estimation and created a heads-up display to communicate this information to a user
"""

[[resume.items]]
title = "Aquametric"
date = "2018 - 2020"
link = "/projects/aquametric"
description = """
Low power, real-time, stream and river monitoring devices with a battery life of up to one year in the field.
- Won the [Hackaday Bootstrap Award](https://hackaday.io/contest/171491-supplyframe-designlab-2020-hackaday-prize/log/181207-community-vote-bootstrap-winners) and was a [finalist for the Hackaday Prize 2020](https://hackaday.com/2020/09/14/finalists-announced-for-the-2020-hackaday-prize/), an international competition for open-source hardware and software
- Worked with low-power hardware and firmware, LoRa and cellular communication, and ultrasonic/LiDAR ranging technologies
"""

[[resume]]
section = "Skills"

[[resume.items]]
title = "Hardware"
description = """
- Digital circuit design, PCB design
- Cellular, LoRa, RFID communication
- Low power sensing systems
"""

[[resume.items]]
title = "Software"
description = """
- Python, Node
- Frontend dev (React, Next, web design)
- Firmware (Embedded C/C++, Rust)
"""

{{< /resume >}}