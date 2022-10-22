# Why using a 9v battery is a bad idea

There are multiple reasons why using a 9v battery is not a good idea. to start with a 9v has 6 individual cells that are a little smaller than an AAA. that individually produces 1.5v so you get 1.5v X 6 cells = 9v. 

![inside a 9v](images\9vwhybadidea\insidea9v.jpg "inside a 9v")

These cells are configured in a series connection not parallel. Series is where positive is connected to negative positive to negative and so on and so on that way, your voltage combines but the capacity stays the same. A parallel circuit is where positive connects positive and negative connects negative that way your capacity adds and voltage stays the same.

![series-parallel](images\9vwhybadidea\series-and-parallel-circuits-battery.jpg "series-parallel")
 
This is one of the main reasons why you can't use a 9v but not the only one. A normal Alkaline 9v only has a theoretical 550 mAh worth of power. As you can see in the graph below you only get to use about 425 mAh if you only draw 50 mA an Arduino uno itself with nothing connected to it is 50 mA. An Uno needs a minimum of 7v. so that means you would only get a maximum of 7 hours out of it. and if you add just 3 led you are now drawing over 100 mA. so that would lower your time down to 2.5 hours.

![](images\9vwhybadidea\9vdiscargrate.png)