# Nine Volt Battery Basics { .text-[#e67e22] }

[← Back to Home](../index.md)

Nine volt batteries are not a good choice for powering Arduino projects. Here's why:

![inside a 9v](../../assets/images/nineVolts/insidea9v.jpg "inside a 9v")

These cells are configured in a series connection, not parallel. A series connection is where positive is connected to negative, positive to negative, and so on. In this way, the voltage adds up, but the capacity stays the same. A parallel connection is where positive connects to positive, and negative connects to negative. In this way, the capacity adds up, and voltage stays the same.

![series-parallel](../../assets/images/nineVolts/series-and-parallel-circuits-battery.jpg "series-parallel")

This is one of the main reasons why you shouldn't use a 9V battery, but not the only one.

A normal alkaline 9V battery only has a theoretical 550 mAh worth of power. As you can see in the graph below, you only get to use about 425 mAh if you only draw 50 mA.

An Arduino Uno itself draws 50 mA with nothing connected to it. This means you would only get a maximum of 7 hours out of it (an Uno needs a minimum of 7 V). If you add just 3 LEDs, you are now drawing over 100 mA, which would lower your battery life down to about 2.5 hours.

![9V battery discharge rate chart showing capacity vs current draw](../../assets/images/nineVolts/9vdiscargrate.png "Chart showing how 9V battery capacity decreases with higher current draw")

[Click for a video with more information.](https://odysee.com/@Maderdash:2/9vBattery:0 "video of 9v battery issues")

[← Back to Home](../index.md)
