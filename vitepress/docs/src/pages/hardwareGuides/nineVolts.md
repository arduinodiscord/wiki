---
title: Nine Volt Battery Basics
description: Why 9V batteries are a poor choice for powering Arduino projects and what alternatives to use instead.
---

# Nine Volt Battery Basics { .text-[#e67e22] }

Related pages: [Breadboard](./breadBoard.md), [LED Resistors](./ledResistors.md), [Multimeter](./multimeter.md).

[← Back to Home](../index.md)

Nine volt batteries are not a good choice for powering Arduino projects. Here's why:

![Inside a 9V battery showing six stacked cells](../../assets/images/nineVolts/insidea9v.jpg "Inside a 9V battery")

These cells are configured in a series connection, not parallel. A series connection is where positive is connected to negative, positive to negative, and so on. In this way, the voltage adds up, but the capacity stays the same. A parallel connection is where positive connects to positive, and negative connects to negative. In this way, the capacity adds up, and voltage stays the same.

![Series vs parallel battery configuration](../../assets/images/nineVolts/series-and-parallel-circuits-battery.jpg "Series vs parallel battery configuration")

This is one of the main reasons why you shouldn't use a 9V battery, but not the only one.

A normal alkaline 9V battery only has a theoretical capacity of 550 mAh. However, this is measured under very low current draw conditions. Under realistic Arduino usage, you only get to use about 425 mAh if you draw 50 mA due to voltage drop and internal resistance.

> ⚠️ **Important Note on the 7-Hour Estimate**: This 7-hour estimate is **theoretical** and assumes ideal conditions with only 50 mA draw. In real-world use with Arduino projects, the actual runtime is much shorter due to:
> - **Voltage drop**: As the battery discharges, voltage drops below the Arduino's minimum requirement (~7 V)
> - **Internal resistance**: 9V batteries have high internal resistance, limiting current delivery
> - **Non-linear discharge curve**: Capacity drops significantly as current draw increases

An Arduino Uno itself draws 50 mA with nothing connected to it. This means you would only get a maximum of 7 hours out of it (an Uno needs a minimum of 7 V). If you add just 3 LEDs, you are now drawing over 100 mA, which would lower your battery life down to about 2.5 hours.

![9V battery discharge rate chart showing capacity vs current draw](../../assets/images/nineVolts/9vdiscargrate.png "Chart showing how 9V battery capacity decreases with higher current draw")

[Click here for a video with more information.](https://odysee.com/@Maderdash:2/9vBattery:0 "Video about 9V battery issues")

## Why 9V Batteries Are Inefficient for Arduino

9V batteries are designed for **high-impedance, low-current devices** like:
- Smoke detectors
- Guitar pedals
- Wireless remote controls

They are **not** designed for circuits needing sustained current because:
- **High internal resistance** limits current delivery
- **Small cell area** causes rapid voltage drop under load
- **Series cells** don't share charge evenly, reducing usable capacity

---

## Better Power Alternatives for Arduino Projects

| Power Source | Voltage | Capacity | Best For |
|--------------|---------|----------|----------|
| **AA/AAA Batteries (2–4 in series)** | 3V–6V | 2000–3000 mAh | Most Arduino projects |
| **Lithium-Ion** | 3.7V or series | 2000–3500 mAh | Sustained high current |
| **USB Power Bank** | 5V | 5000–20000+ mAh | Always-on projects |

**Recommendation**: For projects needing more than 7 hours of runtime, use AA/AAA batteries in series or a lithium-ion pack with proper voltage regulation.

[← Back to Home](../index.md)
