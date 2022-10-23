# Proper way to use an LED | [HOME](README.md) |

## Contents:

---

[What is an LED?](#led-is-short-for-light-emitting-diode)

[Correct Single-LED Wiring](#correct-wiring)

[Seven Segment Displays](#seven-segment-displays)

[LED Color Matters](#led-color-matters)

[Math for a Resistor](#resistor-math-time)

---

## 'LED' is short for 'Light Emitting Diode'

### Diodes are devices that let electricity flow only in one direction. LEDs work the same way, as they are also diodes.

#### When you connect an LED to a circuit, you have a direct link from one leg of the diode to the other.  LEDs can not process large amounts of current; they are limited to 20ma or less. Although they may try and pass the full current, doing so will cause damage to the LED, or shorten its performance efficiency *(or damage/shorten the life of the pin of the Arduino).*

#### To stop this from happening, we use a resistor. This limits the amount of current flowing through the LED, so it lights and doesn't burn out.


---

## Correct Wiring

#### It does not matter, for a single LED, whether you apply the resistor to the GND or the power side.  So this is how you would wire a standard LED *(both are correct)*:

![correct LED wiring](images/forwardVoltage/ledFinal.png "Correct LED wiring")

---

## Seven Segment Displays

#### Seven segment displays are a specific case. You **should** have your resistors on every segment of the display. You will require 7-8 resistors depending upon if your display uses decimal or not.

![seven Segment Display](images/forwardVoltage/sevenSegment.png "correct wiring for a display")

---

#### You do not want to use a resistor on the common pin of the display. The reason for this is found in the math. If you look at the example above, you can see that each segment only has 8ma passing through it. No matter if one segment is lit, or if all seven are, each one is limited and controlled to 8ma.

#### If you place a resistor on the common pin, then the current will change each time a segment is lit. With one segment lit, there will be 8ma passing through it; when you light two, then the segments will get dimmer, because there is only 4ma passing through each one.  If you light all eight segments, then you will only have 1ma passing through each one. This is why we do not use a resistor on the single common pin.

# LED Color Matters

#### Each LED has its forward voltage. Forward voltage is the required voltage level that the LED needs before it starts conducting current through it. Below is a chart of the common colors, with their forward voltage requirements. If you can find a data sheet for your LED, it is best to go by that. If not, the chart will assist you in your resistor math.

![led Chart](images/forwardVoltage/forwardVoltage.png "led color chart")

# Resistor Math Time

## _We will use the chart in our examples._

#### If you have a supply voltage of 5v, and you have a red LED, we will say the forward voltage is 1.8v. So first we subtract the FV \(forward voltage\) from the total voltage. So it would look like this:


![voltage](images/forwardVoltage/workingVoltage.png)


#### Then we will take that newfound voltage and find out the resistor we require. We will be calculating for 10ma or less, so the LED will not burn out faster than expected&hellip; so this is the math for that:

![resistanceReal](images/forwardVoltage/restanceReal.png)

#### As you can see, the perfect resistor value would be 320 Ohms. If you don't have a resistor for that value, you can use the next size larger than it, OR you can put two smaller resistors end to end and use them that way.

**EXAMPLE:** _A 220-ohm resistor and a 220-ohm resistor can make a 440-ohm resistor._

### There is also a [resistor calculator](https://ohmslawcalculator.com/led-resistor-calculator "resistor online calculator") you can use, if you have the data for your LED.
