# Nine Volt Battery Basics { .text-[#e67e22] }

There are multiple reasons why using a 9 V battery is not a good idea. To start with, a 9 V has 6 individual cells that are a little smaller than an AAA. They produce 1.5 V each you get 1.5 V × 6 cells = 9 V. But this increases the resistance of the battery more so than others. This limits how fast the power can leave the battery, and causes the voltage to "sag" when being used by a high-current device, like a motor.

![inside a 9v](../../assets/images/nineVolts/insidea9v.jpg "inside a 9v")

These cells are configured in a series connection, not parallel. Series is where positive is connected to negative, positive to negative, and so on.  
That way, your voltage combines, but the capacity stays the same. A parallel circuit is where positive connects to positive, and negative connects to negative. This way, your capacity adds, and voltage stays the same.

![series-parallel](../../assets/images/nineVolts/series-and-parallel-circuits-battery.jpg "series-parallel")

This is one of the main reasons why you can't use a 9v battery, but not the only one.

A normal Alkaline 9v only has a theoretical 550 mAh worth of power. As you can see in the graph below, you only get to use about 425 mAh, if you only draw 50 mA.

An Arduino Uno itself, with nothing connected to it, draws 50 mA. This means you would only get a maximum of 7 hours out of it (a Uno needs a minimum of 7 V). If you add just 3 LEDs you are now drawing over 100 mA. So that would lower your time down to 2.5 hours.

![9vdiscargrate](../../assets/images/nineVolts/9vdiscargrate.png)

[Click for a video with more information.](https://odysee.com/@Maderdash:2/9vBattery:0 "video of 9v battery issues")
