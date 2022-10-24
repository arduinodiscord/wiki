# millis() versus delay() | [HOME](README.md) |

`millis()` is a counter but is not a timer;  `delay()` is a
timer but is not a counter.

<em>More on this in a bit.</em>


`delay()` wants something from you (instructions on how to do
exactly what is requested).

`millis()` wants nothing from you - it is a provider of
information.  `delay()` provides no information.


<ul>
 <li> delay shuts most things down, that were already running [<em>EDITOR: true? bs?</em>]
 <li> delay 'blocks' progress
</ul>
<p>
<ul>
 <li> millis runs in the background
 <li> millis does not 'block' progress
</ul>

So, by using millis() instead of delay() your program can do
much more, in the same amount of time.



`Blink Without Delay`

  https://github.com/arduino/arduino-examples/blob/main/examples/02.Digital/BlinkWithoutDelay/BlinkWithoutDelay.ino



*What's stopping you?*

*Whatever it is, it's not millis()*


`What does millis() provide?`

millis() provides a count of the number of milliseconds that
have passed, since 'time began'.

That count begins when power is applied to an Arduino board.

```
int what_time_is_it_now = millis();
```

The value stored in 'what_time_is_it_now' reflects how many
milliseconds of time have passed, since the Arduino board's
`setup()` program first started to run (which happens immediately
after power is applied to the board).

`millis()` resets to zero when power is removed from the Arduino
board.

These 'serial numbers' are simply a count.  They're a count
of the exact number of *milliseconds* of (real clock time)
(approximately) since the Arduino was 'started' (powered on).


`delay()`

`delay()` was designed for very quick, demonstration program
development, for one-off proof-of-concept work that does not need
to do very much at all, to be considered a successful program.

<em>The presenter has one hour to put something together, having been
asked to speak to a classroom about the Arduino, just moments ago.</em>

<em>Since the audience is expected to know little or nothing about
programming or microcontrollers or LEDs, making an LED blink from
scratch might be a useful impressive demonstration.  The 'from
scratch' part is what's going to get a 'wow' from the audience,
if it's done right.</em>

Anything but `delay()` will be lost on that audience, but a
blinking light is going to get them going.  They'll be .. okay,
maybe not.  This is a first draft scenario. ;)

So what delay() provides is a pause in program execution. It
just tells the Arduino hardware (an MCU chip) to stop whatever
it was doing, until some time has passed, then just pick up,
right where it left off.


That may sound identical to `millis()` so let's get down to
brass tacks.

`delay()` accepts one parameter, which is an integer that says
how many millisecond to wait before continuing in the program.
No line of code below it can execute until that time has passed.

`millis()` accepts no parameters.  It provides an 'answer'
to this question:

How many milliseconds of time have passed, since I first applied
power?

I know what you're thinking; no, it's not accumulative at all.
Just unplug the USB cable for one second, and plug it back in,
and see for yourself, when the demonstration code is listed
(here in this document; it's a work in progress 24 October 2022
at 17:44 UTC).


Revisiting the 'counter' vs 'timer' comparison of the two
functions

From above:

`millis()` is a counter but is not a timer;  `delay()` is a
timer but is not a counter.

Yes, `millis()` is a counter, but we are also aware of what it's
counting and when it counts it.  `millis()` is a counter that
'evolves by a clock'.  It's like an odometer in your car.
You could pry it out, put it on a drill, and spin it to
artificially change that count in a very short while.

`millis()` is like a secure odometer that's tamper-proof; you
have to wait the required time before `millis()` will rack up
those 'miles' (count of milliseconds).

There's no cheating.

So `millis()` isn't a timer; it's a counter, but it counts
.. milliseconds, which happens to involve 'time'.  Worse, it only
upgrades the count when some time has passed (otherwise it'd be
like putting that drill on the odometer to race it forward 30
thousand miles in just a few minutes of 'bench' time).


How to use it `millis()` - abstract

You walk into the kitchen, glance at the clock on the wall,
write down the time it shows, and walk out of the kitchen.

You do not own a stopwatch.  Just that kitchen clock.

You're wondering if 25 minutes have passed or not - you don't
want to be late on this one; maybe you're drying some glue on
the bench and you want to wait at least 25 minutes.

So you're using your kitchen clock, in the other room, to time
the glue drying. ;)

You walk back into the kitchen, and it says the current time on
the clock, of course.

You write it down, and head back to the .. the makerspace you
got there. ;)

Now you have two times written down; one is from the first time
you went into the kitchen; the second is the time you wrote down
just a moment ago.

Now you gotta do some math and figure out how much time went by
since you first glanced at the kitchen clock, to just a moment
ago when you glanced at it again.

Maybe there's 15 minutes difference between those two events.

But you do the math; the clock on the kitchen wall won't do the
math for you.

Really it's just a counter that evolves over 'time'.  It's
providing you with the answer to one question: how many seconds
of time has passed since the clock
 .. get this .. was set.

That's really all it is telling you.  It's giving you an accurate
count of the number of seconds that have passed since you plugged
it in or installed the battery or turned on its power switch,
if it has one.

But you use the information it gives you, and some math, to come
up with a substitute for a timer, or a stopwatch.

But it's only a counter; it is not a timer!

It just happens to be a counter that runs on a timebase; the
old clocks had an 'escapement' that prevented them from running
faster than wanted (which they were prone to do, otherwise).


Timer vs Counter (yes more rant)

When people had stopwatches working pretty good, now they wanted
to set a very precise time to 'count down to'.  They wanted
a timer!

A timer accepts instructions on how long it should run before
it does something.

The old wind-up kitchen timer was a clock mechanism on a spring;
you dialed in (by turning a knob) how much time you wanted to let
pass by, before making the loud dinging sound saying TIME IS UP.

When wristwatches got LCD displays, one of the gadgets the
manufacturers built into the new 'watch' was a stopwatch.
It counted seconds of time, and usually ran at least 24 hours
before giving up (or reaching overflow).

Then they said this: hey let's run that backwards; it's almost
the same as a stopwatch, but has this new feature: you tell it
'how long' and it runs the time backwards.  It's exactly like
running a stopwatch in reverse, from the end of the run back to
the start of the run. ;)

The MCU chip does have a peripheral inside it called the
`counter-timer` which may be behind a lot of this.  That's not
the only way to do things, but is one available mechanism.


END.
