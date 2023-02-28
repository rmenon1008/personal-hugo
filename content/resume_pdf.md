---
title: "Resume PDF"
date: 2022-10-26
draft: false
weight: 4
wide: true
hidden: true
---

{{< resume_pdf >}}

[[resume]]
section = "Connect"

[[resume.items]]
description = """
{{< connect-card >}}
"""

[[resume]]
section = "Education"

[[resume.items]]
title = "University of Washington · Class of Fall 2023"
date = "2021 - Present"
description = "Electrical and Computer Engineering"

[[resume]]
section = "Research"

[[resume.items]]
title = "UW Sensor Systems Laboratory with Prof. Joshua Smith"
date = "2022 - Present"
link = "/projects/wisp"
description = """
Worked on [WISP](https://www.rohanmenon.com/projects/wisp/), a family of batteryless sensors that are powered by and communicate entirely through UHF RFID power harvesting and backscatter.
- Developed hardware and embeddded firmware for a new generation of WISP sensors and a companion desktop application.
- Presented our work at [EnsSys 2022](https://www.enssys.org/2022/), a workshop at ACM SenSys
- [R. Menon, R. Gujarathi, A. Saffari, J. Smith, “Wireless Identification and Sensing Platform Version 6.0”, EnsSys 2022](https://dl.acm.org/doi/pdf/10.1145/3560905.3568109)
"""

[[resume.items]]
title = "Lake Submersible with Prof. William Keat"
date = "Summer 2019"
description = """
Worked with Professor Keat of Union College in his mechanical engineering lab on a ballast-controlled submersible designed to explore and photograph a local lake.
- Explored magnetometer-based sensing to locate a sunken car
- Coordinated with Union’s Geosciences Department for our in-field test
"""


[[resume]]
section = "Projects"

[[resume.items]]
title = "Technical Design Lead · NY STEAM Bus"
date = "2016 - 2021"
description = """
A student-founded and led school bus retrofitted with STEAM education technology that produces and teaches lessons to middle and elementary school students.
- Designed initial school bus retrofit and took part in its physical renovation
- Responsible for technology used in student lessons and for operating the program
"""

[[resume.items]]
title = "Resonant"
date = "2020 - 2021"
link = "/projects/resonant"
description = """
A system to localize and identify ambient noises and present them to a user through a wearable device.
- Developed a 3D sound localization algorithm using a microphone array with phase shift estimation and created a heads-up display to communicate this information to a user
- Received Highest Honors at the STANYS science and engineering fair
"""

[[resume.items]]
title = "Aquametric"
date = "2018 - 2020"
link = "/projects/aquametric"
description = """
Ultra low power, real-time, stream and river monitoring devices with a battery life of up to one year in the field.
- Worked with low-power hardware and firmware, LoRa communication, cellular IoT devices, and ultrasonic/LiDAR ranging technologies
- Won the [Hackaday Bootstrap Award](https://hackaday.io/contest/171491-supplyframe-designlab-2020-hackaday-prize/log/181207-community-vote-bootstrap-winners) and was a [finalist for the Hackaday Prize 2020](https://hackaday.com/2020/09/14/finalists-announced-for-the-2020-hackaday-prize/), an international competition for open-source hardware and software
"""

[[resume]]
section = "Skills"

[[resume.items]]
description = """
<div class="two-col-skills" style="display: flex; gap: 60px;">
<style>
    .two-col-skills ul {
        margin-top: 5px !important;
    }
    .two-col-skills ul li {
        margin: 2px 0 !important;
    }
</style>
<div>

### Hardware
- Digital circuit design, PCB design
- Cellular/LoRa/RFID devices
- Low power sensing systems
- CAD and rapid prototyping

</div>
<div>

### Software
- Python, Java, R
- Embedded C/C++, Assembly language
- Desktop app development
- Web development - JS (React, Node)

</div>
</div>
"""

{{< /resume_pdf >}}