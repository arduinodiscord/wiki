# Arduino Buyers Guide { .text-[#e67e22] }

## Introduction

This is a guide on all the different Arduinos available to help you choose the right board for your project.

## Popular Arduino Boards

### Arduino Uno
The Arduino Uno is the most common Arduino because it has a normal amount of I/O. Also, there is no need to solder.

### Arduino Leonardo
The Leonardo has the same form-factor as the Uno but can be used as an HID device, like a gamepad or "button box" and such.

### Arduino Mega 2560
The Mega 2560 is extremely common. It has over three times I/O than the Uno. If you need a lot of LEDs, or pins to use, the Mega is a good choice for this.

### Arduino Due
The Due also has a lot of I/O, has more memory than the Mega 2560 which also makes it a great starter board.

### Arduino Micro
The Micro is good to use on a breadboard. It's also compact and has the same chip as the Leonardo.

### Arduino Nano
The Nano has the same chip as the Uno so can be used in a final product. Many times it's easiest to prototype on an Uno, then when all the debugging is done, use the Nano for the final product.

### Arduino Zero
The Zero uses 3.3V instead of the normal 5V. Also it is a 32-bit board so it can process a lot faster.

## Arduino Board Comparison

Below is a chart of the more common Arduino boards with their key specifications and use cases.

<div style="overflow-x: auto;">

| Name                        | [Uno](https://store.arduino.cc/products/arduino-uno-rev3)        | [Leonardo](https://store.arduino.cc/products/arduino-leonardo-with-headers)   | [Mega 2560](https://store.arduino.cc/products/arduino-mega-2560-rev3)  | [Micro](https://store.arduino.cc/products/arduino-micro)      | [Due](https://store.arduino.cc/products/arduino-due)         | [Nano](https://store-usa.arduino.cc/products/arduino-nano?selectedStore=us)      | [Zero](https://store-usa.arduino.cc/products/arduino-zero?selectedStore=us)
| --------------------------- | ---------- | ---------- | ---------- | ---------- | ----------- | --------- | ----------- |
| MICROCONTROLLER             | ATmega328P | ATmega32u4 | ATmega2560 | ATmega32U4 | AT91SAM3X8E | ATmega328 | ATSAMD21G18 |
| OPERATING VOLTAGE           | 5V         | 5V         | 5V         | 5V         | 3.3V        | 5V        | 3.3V        |
| INPUT VOLTAGE (RECOMMENDED) | 7-12V      | 7-12V      | 7-12V      | 7-12V      | 7-12V       | 7-12V     | 6-12V       |
| INPUT VOLTAGE (LIMIT)       | 6-20V      | 6-20V      | 6-20V      | N/A        | 6-16V       | 8V        | 6-12V       |
| DIGITAL I/O PINS            | 14         | 20         | 54         | 20         | 54          | 22        | 20          |
| PWM DIGITAL I/O PINS        | 6          | 7          | 16         | 7          | 12          | 6         | 10          |
| ANALOG INPUT PINS           | 6          | 12         | 6          | 12         | 12          | 6         | 6 (12-bit)  |
| DC CURRENT PER I/O PIN      | 20 mA      | 40 mA      | 20 mA      | 20 mA      | 22 mA       | 40 mA     | 16 mA       |
| DC CURRENT FOR 3.3V PIN     | 50 mA      | 50 mA      | 50 mA      | 50 mA      | 800 mA      |           | 7 mA        |
| FLASH MEMORY                | 32 KB      | 32 KB      | 256 KB     | 32 KB      | 512 KB      | 32 KB     | 256 KB      |
| SRAM                        | 2 KB       | 2.5 KB     | 8 KB       | 2.5 KB     | 96 KB       | 2 KB      | 32 KB       |
| EEPROM                      | 1 KB       | 1 KB       | 4 KB       | 1 KB       | 512 KB      | 1 KB      |             |
| CLOCK SPEED                 | 16 MHz     | 16 MHz     | 16 MHz     | 16 MHz     | 84 MHz      | 16 MHz    | 48 MHz      |
| LED\_BUILTIN                | 13         | 13         | 13         | 13         | 13          | 13        | 13          |
| LENGTH                      | 68.6 mm    | 68.6 mm    | 101.52 mm  | 48 mm      | 101.52 mm   | 18 mm     | 68 mm       |
| WIDTH                       | 53.4 mm    | 53.3 mm    | 53.3 mm    | 18 mm      | 53.3 mm     | 45 mm     | 53 mm       |
| WEIGHT                      | 25 g       | 20 g       | 37 g       | 13 g       | 36 g        | 7 g       | 12 g        |
|                             |            |            |            |            |             |           |

</div>
