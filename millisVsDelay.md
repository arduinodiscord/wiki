# millis() versus delay() | [HOME](README.md) |

## `millis()` versus `delay()`

millis() is a foo  but delay() is a bar.

 &bull; delay shuts most things down, that were already running *[EDITOR: true? bs?]*
 &bull; delay 'blocks' progress

 &bull; millis runs in the background
 &bull; millis does not 'block' progress

So, by using millis() instead of delay() your program can do
much more, in the same amount of time.

*What's stopping you?*

*Whatever it is, it's not millis()*


What does millis() provide?

millis() provides a count of the number of milliseconds that have
passed, since 'time began'.

That count begins when power is applied to an Arduino board.

```
int what_time_is_it_now = millis();
```

The value stored in 'what_time_is_it_now' reflects how many milliseconds
of time have passed, since the Arduino board's `setup()` program first
started to run (which happens immediately after power is applied to the
board).



millis() resets to zero when power is removed from the Arduino board.

These 'serial numbers' are simply a count.  They're a count of the exact
number of *milliseconds* of (real clock time) (approximately) since the
Arduino was 'started' (powered on).

delay()

delay() was designed for very quick, demonstration program development,
for one-off proof-of-concept work that does not need to do very much
at all, to be considered a successful program.

The presenter has one hour to put something together, having been asked
to speak to a classroom about the Arduino, just moments ago.

Since the audience is expected to know little or nothing about programming
or microcontrollers or LEDs, making an LED blink from scratch might be a
useful impressive demonstration.  The 'from scratch' part is what's going
to get a 'wow' from the audience, if it's done right.

Anything but `delay()` will be lost on that audience, but a blinking light
is going to get them going.  They'll be .. okay, maybe not.  This is a first draft scenario. ;)


So what delay() provides is a pause in program execution. It just tells the
Arduino hardware (an MCU chip) to stop whatever it was doing, until some
time has passed, then just pick up, right where it left off.

That may sound identical to `millis()` so let's get down to brass tacks.

`delay()` accepts one parameter, which is an integer that says how many
millisecond to wait before continuing in the program.  No line of code
below it can execute until that time has passed.

`millis()` accepts no parameters.  It provides an 'answer' to this question:

How many milliseconds of time have passed, since I first applied power?

I know what you're thinking; no, it's not accumulative at all.  Just unplug
the USB cable for one second, and plug it back in, and see for yourself,
when the demonstration code is listed (here in this document; it's a work
in progress 24 October 2022 at 17:44 UTC).

bye.

