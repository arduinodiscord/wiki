---
title: Voltage Dividers
description: A beginner's guide to voltage divider circuits — how they work, the formula, and how to use them to scale voltages for your Arduino projects.
---

# Voltage Dividers { .text-[#e67e22] }

Related pages: [LED Resistors](./ledResistors.md), [Breadboard](./breadBoard.md), [Multimeter](./multimeter.md).

[← Back to Home](../index.md)

*This page covers voltage dividers — how they work, the math, and when to use them.*

---

## What Is a Voltage Divider?

A voltage divider is a simple circuit that takes an input voltage and outputs a fraction of it. It uses two resistors in series to "divide" the voltage down to whatever level you need.

Voltage dividers are used for:
- Scaling sensor readings down for Arduino analog inputs
- Creating reference voltages
- Biasing transistors and amplifiers
- Measuring voltages safely

They are one of the most fundamental circuits in electronics.

---

## The Circuit

A basic voltage divider looks like this:

```
        +---[R1]---+
        |          |
       [V1]       Vout ──► to load or meter
        |          |
        +---[R2]---+
        |
       GND
```

- **V1** is your input voltage (e.g., battery or power supply)
- **R1** and **R2** are two resistors in series
- **Vout** is taken from the junction between R1 and R2
- The circuit shown is under **no load** — no current is drawn from Vout

Under no-load conditions, the formula is exact. If you connect something to Vout that draws current (like a motor or LED), the calculation changes because that load acts like another resistor in parallel with R2.

---

## The Formula

The output voltage is calculated using Ohm's Law. Since R1 and R2 are in series, the same current flows through both:

> **Vout = V1 × R2 / (R1 + R2)**

Where:
- **V1** = Input voltage (in volts)
- **R1** = Upper resistor (in ohms)
- **R2** = Lower resistor (in ohms)
- **Vout** = Output voltage across R2

### Example

Say you have a 9V battery and want 5V out:

| Variable | Value |
|----------|-------|
| V1 | 9V |
| Desired Vout | 5V |
| R1 | 400 Ω |
| R2 | 500 Ω |

Vout = 9 × 500 / (400 + 500) = 9 × 500 / 900 = **5V**

A 400 Ω and 500 Ω resistor give you exactly 5V from a 9V source.

---

## Common Resistor Values

You won't always find the exact resistor values you need. Here are common combinations using standard resistor values:

| Desired Vout | V1 | R1 | R2 | Actual Vout |
|:---|:---|:---|:---|:---|
| 3.3V | 5V | 1 kΩ | 2.2 kΩ | 3.44V |
| 5V | 9V | 10 kΩ | 12 kΩ | 4.91V |
| 2.5V | 5V | 10 kΩ | 10 kΩ | 2.5V |
| 1.8V | 3.3V | 10 kΩ | 12 kΩ | 1.8V |

> **Tip**: Higher resistor values (10 kΩ–100 kΩ) draw less current and are better for low-power applications. Lower values (100 Ω–1 kΩ) are more stable but waste more power as heat.

---

## Practical Uses with Arduino

### Reading a Higher Voltage

Arduino analog inputs expect 0–5V. To read a 12V battery:

1. Choose R1 = 10 kΩ and R2 = 5.6 kΩ
2. Vout = 12 × 5600 / (10000 + 5600) = **4.31V** (safe for Arduino)
3. In your code, multiply the reading back up: `batteryVoltage = analogRead(A0) * (12.0 / 4.31) / 1023.0 * 5.0`

### Scaling a Sensor Output

Many sensors output 0–10V but your Arduino only reads 0–5V. A voltage divider with two equal resistors (e.g., 10 kΩ each) cuts the voltage in half perfectly.

---

## Rules of Thumb

- **Keep R1 + R2 high enough** to avoid wasting current (10 kΩ–100 kΩ is a good range for most projects)
- **Keep R1 + R2 low enough** that your meter or ADC doesn't affect the reading (the Arduino's ADC works best with source impedance under 10 kΩ)
- **Use 1% or better resistors** for accurate dividers
- **If Vout needs to power something** (not just measure), a voltage divider probably isn't the right tool — use a voltage regulator instead

---

## Online Calculator

Need to find the right resistors fast? Try the [Digikey Voltage Divider Calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-voltage-divider). Plug in your values and it gives you standard resistor combinations instantly.

---

[← Back to Home](../index.md)
