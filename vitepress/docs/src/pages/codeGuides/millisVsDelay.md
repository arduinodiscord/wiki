---
layout: page
title: Millis vs Delay
---

# Millis vs Delay { .text-[#e67e22] }

[← Back to Code Guides](./combiningSketches.md)

## `millis()` vs. `delay()`

`millis()` is a counter but is not a timer; `delay()` is a
timer but is not a counter.

`delay()` requires you to specify how long to pause execution.

`millis()` provides timing information without stopping your program. `delay()` provides no information.

- `delay()` blocks program execution
- `millis()` runs in the background
- `millis()` does not block program execution

By using `millis()` instead of `delay()`, your program can do
much more in the same amount of time.

## Blink Without Delay demonstrates `millis()`

The [BlinkWithoutDelay.ino](https://github.com/arduino/arduino-examples/blob/main/examples/02.Digital/BlinkWithoutDelay/BlinkWithoutDelay.ino)
example on the Arduino GitHub shows how to use `millis()` for non-blocking timing.

Here's a simplified version of that example:

```cpp
const int ledPin = LED_BUILTIN;
int ledState = LOW;
unsigned long previousMillis = 0;
const long interval = 1000;  // 1 second

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  unsigned long currentMillis = millis();
  
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    
    digitalWrite(ledPin, ledState);
  }
}
```

*What's stopping you?*

*Whatever it is, it's not millis()*

## What does millis() provide?

`millis()` provides a count of the number of milliseconds that
have passed since the Arduino board was powered on.

That count begins when power is applied to an Arduino board.

### Basic Usage Example

```cpp
unsigned long currentTime = millis();
Serial.println(currentTime);
```

The value stored reflects how many
milliseconds of time have passed since the Arduino board's
`setup()` function first started to run (which happens
almost immediately after power is applied to the board).

`millis()` starts counting from zero when power is first applied to the
Arduino board.

*The output of `millis()` is a snapshot of its current value,
'now', expressed as an integer.*

*`millis()` returns a series of numbers, always increasing; one
for each time it is called.*

These 'serial numbers' are simply a count. They're a count
of the exact number of *milliseconds* of (real clock) time
(approximately) since the Arduino was 'started' (powered on).

### Why delay() Blocks Interrupts

`delay()` blocks program execution because it uses a **busy-wait loop**
that prevents the microcontroller from processing other tasks, including
interrupts. While `delay()` is running, the Arduino cannot:

- Process timers
- Handle serial communication
- Respond to pin changes (interrupts)
- Run background tasks

`millis()`, in contrast, does not block. It simply returns the current
counter value, allowing your code to continue executing and respond to
events as they occur.

This makes `millis()` essential for real-time applications where you need
to:
- Monitor multiple inputs simultaneously
- Handle time-critical events
- Keep communication channels open
- Respond to user input without latency

## `delay()`

`delay()` was designed for simple demonstration programs and
quick prototyping where you don't need to perform other tasks
simultaneously.

`delay()` provides a simple pause in program execution. It
tells the Arduino microcontroller to stop executing code until
the specified time has passed, then continue from where it left off.

`delay()` accepts one parameter: an integer specifying
how many milliseconds to wait before continuing program execution.
No code below the `delay()` call can execute until that time has passed.

`millis()` accepts no parameters. It returns the number of
milliseconds that have passed since the Arduino board was powered on.

## Revisiting the 'counter' vs 'timer' comparison of the two functions

*From the above:*

`millis()` is a counter but is not a timer; `delay()` is a
timer but is not a counter.

`millis()` is a counter that increments with time. It is driven by
the system clock, incrementing the count once per millisecond (approximately).

This situation is a bit like the odometer in your car.
You could pry it out, put it on a drill, and spin it to
artificially change that count in a very short while.

That'd be cheating. It would no longer give an accurate reading
about the miles put on the car.

`millis()` is the Arduino 'odometer of time'.

## Overflow Behavior: 50-Day Cycle

`millis()` uses an unsigned 32-bit integer to store its value.
After approximately **50 days** (4,294,967,295 milliseconds), the counter
reaches **overflow** and resets to zero.

This is normal behavior and happens to all Arduino boards. To handle this
correctly in your code:

```cpp
unsigned long previousTime = millis();
unsigned long interval = 1000; // 1 second

void loop() {
  unsigned long currentTime = millis();
  
  // This works correctly even across overflow!
  if (currentTime - previousTime >= interval) {
    // Do something every second
    previousTime = currentTime;
  }
}
```

The key is to use subtraction (`currentTime - previousTime`) rather than
direct comparison. This approach works correctly even when overflow occurs. 😉

It is a bit like an (imaginary) secure odometer that's tamper-proof;
you have to wait the required time before `millis()` will rack up
those 'miles' (count of milliseconds).

There's no cheating.

So `millis()` isn't a timer—it's a counter; but it counts
…milliseconds, which happens to involve 'time'. Worse,
it only upgrades the count when some time has passed (otherwise it'd
be like putting that drill on the odometer, to race it forward 30
thousand miles in just a few minutes of 'bench' time).

## How to use it: `millis()` - *in the abstract*

***An analogy***

### Timing without a Timer - Kitchen Clock

You walk into the kitchen, glance at the clock on the wall,
write down the time it shows, and walk out of the kitchen.

You do not own a stopwatch. Just that kitchen clock.

You're wondering if 25 minutes have passed or not - you don't
want to be early on this one; maybe you're drying some glued
parts on the bench, and you want to wait at least 25 minutes.

So you're using your kitchen clock, in the other room, to
keep track of how long the glue has been drying. 😉

You walk back into the kitchen, to read the current time on
the clock.

You write it down, and head back to the makerspace... your bench. 😉

Now you have two times written down; one is from the first time
you went into the kitchen; the second is the time you wrote down
just a moment ago.

Now you gotta do some math, and figure out how much time went by
since you first glanced at the kitchen clock, to just a moment
ago, when you glanced at it again.

Maybe there's 15 minutes difference between those two events.

But you do the math; the clock on the kitchen wall won't do the
math for you.

Really, ***the kitchen clock is just a counter that evolves over 'time'.***
It's providing you with the answer to one question: how many seconds
of time have passed since the clock... get this... was set.

That's really all it is telling you. It's *giving you an accurate
count of the number of seconds that have passed since you plugged
it in* or installed the battery or turned on its power switch,
if it has one.

You use the information it gives you, and some math, to come
up with a substitute for a timer, or a stopwatch.

But it's only a counter; it is not a timer!

It just happens to be a counter that runs on a *timebase*; the
old clocks had an 'escapement' that prevented them from running
faster than wanted (which they were prone to do, otherwise).

## Timer vs Counter (yes more rant)

When people had stopwatches working pretty good, then they wanted
to set a very precise time to *'count down to'*. They
wanted a timer!

A timer accepts instructions that say how long the timer should
run, before it does something interesting.

*Like telling you that time's up.*

The old wind-up kitchen timer was a clock mechanism on a spring;
you dialed in (by turning a knob) how much time you wanted to let
pass by, before it makes that loud dinging sound, saying TIME IS UP.

When wristwatches got LCD displays, one of the gadgets the
manufacturers built into the new 'watch' was a stopwatch.
It counted seconds of time, and usually ran at least 24 hours
before giving up (or reaching overflow).

### Countdown timer on the wristwatch

Then they said this: hey let's run that backwards; the countdown
timer could be made almost the same way as a stopwatch, but it
could have this new feature:

> you tell it 'how long' ... and it runs the timer backwards. It's exactly like running a stopwatch in reverse, from the end of the run, back to the start of the run. 😉

The MCU chip does have a peripheral inside it called the
`counter-timer` which may be behind a lot of this. That's not
the only way to do things, but is one available mechanism.

