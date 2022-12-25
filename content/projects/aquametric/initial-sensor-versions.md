---
title: "Initial Sensor Versions"
date: 2020-04-11
draft: false

image: "/media/sensor_v2.webp"
---

## Version 1

For the first version of our sensor, we focused on developing a device that could take accurate measurements of the water’s stage height. We initially chose an ultrasonic range finder for this purpose. It was oriented towards the water’s surface. By subtracting the measured value from the height at which the sensor was mounted, we could calculate the height of water flowing through the stream. 

We decided to power this device with a solar panel and lithium polymer battery. This would theoretically allow the device to be deployed indefinitely. For communication, a WiFi-based Particle Photon microcontroller was used. WiFi limits the possible locations of the device’s deployment, but we were less focused with this issue with this iteration. We were more focused on developing a device that could stay powered while providing accurate measurements.

{{< fig src="/media/sensor_v1.webp" alt="Sensor version 1">}}

While this iteration showed promise, it had issues revolving around waterproofing, battery life and connectivity. 

While ultrasonic seemed like the clear choice for the sensor, it made the device almost impossible to waterproof. Unfortunately, the ultrasonic sounds from the HC-SR04 can not permeate almost any waterproof materials. This means that the receiving and transmitting elements were directly exposed to weather. They developed rust and failed within a week.

Both the battery and microcontroller operated on 3.3 volts. The ultrasonic sensor required 5 volts to function properly, so a voltage boost circuit had to be added. This added complexity and reduced battery life.

The WiFi based microcontroller that was used prevented the device from being deployed anywhere without an access point and permission to use it. This was the main barrier that we sought to overcome in our next iteration.

## Version 2

The second design iteration was driven by some of the issues we discovered in preliminary testing of the first version.

This version began with a choice in communication method. LoRa (Long Range) is a communication protocol for low bandwidth and low power communication. There is a large community of developers using LoRa for sensors similar to ours. Some were achieving distances of upwards of 20 miles from transmitter to base station. We determined that most streams of interest would be within 20 miles of a WiFi and power source where a base station could be installed.

After beginning to test the possible range of the sensor, we quickly started realizing that it was going to pose an issue. Simply getting one mile to the nearest stream was impossible. We knew that tree cover was going to reduce the signal strength, but we were not expecting the loss of signal that we observed. Our signal strength was also significantly decreased by the fact that rivers tend to be located in valleys, which meant that our sensor would not have a direct line of sight to the base station. To attempt to fix these issues we first switched from standard linear antennas to two directional antennas.

{{< fig src="/media/sensor_v2a.webp" alt="Yagi antenna mounted in a residential attic" caption="A directional Yagi antenna mounted in the highest place we could get it: the attic.">}}

This improvement in range allowed us to develop a sensor for a neighborhood stream about .2 miles from the base station.

{{< fig src="/media/sensor_v2.webp" alt="Sensor version 2">}}

Although the use of directional antennas did result in an increase in usable range, this increase was not significant enough to make this a practical solution. We briefly considered creating a system of several repeater stations to re-broadcast signals until the data arrived at our base station, but we decided that a simpler solution would be to move to a communication protocol for which a significant infrastructure of “repeater nodes” already exists – cellular.

## Version 3

For the third version of the sensor, we again desired to improve on some of the issues that we discovered with our second design iteration.

Firstly, we switched from LoRa to cellular as the method we would use to transmit data from the sensor. Cellular was initially dismissed as a possible communication method due to its relatively high power consumption. We knew that there would be new challenges to using cellular connectivity, but its benefits would outweigh the costs. By using cellular, we were longer limited by our distance to the sensor – as long as we were within the range of a cell tower, we would (theoretically) be able to transmit stream data.

Another change that was made in the third design iteration was to switch to AA batteries instead of LiPo (Lithium Polymer) battery cells for our power source. Although alkaline batteries are less energy dense than lithium based batteries, switching came with a variety of advantages. AA batteries are less dangerous, as they don’t have a tendency to ignite when over-discharged. They also have a much longer shelf life, and are less susceptible to extreme temperature and water damage. We found that they performed at temperatures near freezing, which was an important consideration for us.

To reduce power consumption in this version, we added a secondary microcontroller to control power to the main cellular microcontroller. While on the surface, this may seem like simply doubling the required power, it proved highly effective to extend the battery life of the device. The power switching microcontroller is outfitted with a real time clock (RTC). It allows it to enter a very deep sleep state in between sensor readings. Each hour, the RTC wakes up the power switching microcontroller which subsequently uses a MOSFET to provide power to the cellular Particle Boron. This reduced the on-time of the device from 60/60 minutes to about 7/60 minutes.

For the first installation of our final sensor version, we used a 1.5 m aluminum extrusion that was driven about 50 cm into the ground. Finding a location in the riverbed that was soft enough to drive in the extrusion but firm enough to support the sensor was difficult, but we settled on a location under a bridge. Unfortunately, when we came to check on this sensor after a few days, we found the pole had been bent significantly from what we imagine were large ice sheets being carried down by the water. Additionally, a large amount of debris collected on the sensor pole which obstructed our ToF distance sensor.

{{< fig src="/media/sensor_v3.webp" alt="Sensor version 3">}}

The next deployment of our third iteration drove the development of new mounting systems. We located an alternative spot to mount the sensor, somewhat downstream from our first location, in shallower and faster-moving water. The streambed here was much rockier than our original location, making it nearly impossible to get the metal pole deep enough to provide the necessary stability. To solve this issue, a system was developed in which the aluminum extrusion was fastened to a steel plate through the use of L-brackets. This was placed onto the streambed, and covered with rocks for stability. This new system gave us much greater versatility in the selection of deployment locations. The faster-moving and shallower water made it much more difficult for debris to build up after the sensor, and after a few days there was essentially no debris built up on the sensor at all. Additionally, by moving to a location in the stream somewhat away from the bridge, the strength of the sensor’s cellular connection was also improved.

{{< fig src="/media/sensor_v3a.webp" alt="Sensor version 3's new mounting system" >}}