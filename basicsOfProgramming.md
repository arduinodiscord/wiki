# Basics of Programming | [HOME](README.md) |
# What is Programming?

[Table of Contents](#table-of-contents)

*Programming* is a means to tell a computer (or, in the case of
the Arduino, a *microcontroller*) what to do, when to do it and how
to do it, and if to keep on doing it 'forever' or for an amount of
time, or (yup, there's more options) &hellip; until some resource
it needs (to keep running) has been completely used up.

#### Scenario: potato-chip counting machine

*You want to build a machine that counts potato chips in your potato
chip factory.  It's a task well-suited to industrial microcontrollers,
which are smallish devices that often fit in the palm of your hand,
for just the microcontroller 'chip' itself.*

*A microcontroller is just another type of computer chip, but its
specialty is dealing with the real world, through 'mechatronics'
(electro-mechanical devices and other machinery that can accept
instructions via wires &hellip; or, in the modern day, via
wireless links).*


# What, then, is Programming?

[Table of Contents](#table-of-contents)

#### Introduction for Beginners: What is a Computer Language?

From Leo Brodie:

[Starting Forth: Introductions](
https://www.forth.com/starting-forth/0-starting-forth/)

> At first when beginners hear the term “computer language,” they
wonder, “What kind of language could a computer possibly speak? It
must be awfully hard for people to understand. It probably looks like:

> > `976#!@NX714&+`

> if it looks like anything at all.

> Actually a computer language should not be difficult to understand.
Its purpose is simply to serve as a convenient compromise for
communication between a person and a computer.

 - - -

So, looking at it from Leo's point of view, *programming* is a way to
talk to a computer.  Even the word, 'talk' is misused here&mdash;*they
had to start somewhere*.  There are many *borrow-words* used in
*programming*, taken from the learner's native (spoken and written;
human; pre-computer) language.

#### Nuts and Bolts of Programs

[Table of Contents](#table-of-contents)

The microcontroller (`MCU`) chip itself accepts a long series of
`1's and 0's` (ones and zeros) as its only means of communication
(excepting analog, but that's another talk show).

The *machine code* is just those `1's and 0's` and doesn't need further
support to function.

*Assembly Language* is simply using those very same `1's and 0's`,
but with a cheater lookup table, so that you could use made-up words
to represent frequently used patterns of `1's and 0's` in your
new 'program'.

*Machine code* can be programmed using just front panel switches.
Nothing else!

![Altair 8800 from the Computer History Museum - Wikipedia](
https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Altair_8800_at_the_Computer_History_Museum%2C_cropped.jpg/1024px-Altair_8800_at_the_Computer_History_Museum%2C_cropped.jpg)

*Assembler (assembly language)* would require you to use some
kind of a typewriter&mdash;or other keyboard-like device&mdash;so
that you could use some kind of *language*&mdash;made-up, or
borrowed from someone else&mdash;to 'talk' to the microcontroller,
and give it *instructions on what to do*.

And when to do it.  How to do it!  When not to do it.  And, maybe,
special instructions on what should be done if your *assumptions
were incorrect*. ;)


```cpp
// #include <Arduino.h> // optional

void haha() {
    Serial.println("When I die,");
    Serial.println("Bury me deep;");
    Serial.println("Put two speakers at my feet.");
    Serial.println("Put some headphones on my head,");
    Serial.println(".. and always play the Grateful Dead.");
}

void setup() {
    Serial.begin(9600);
    haha();
    delay(2200);
}

void loop() {
    Serial.println("   Always play the Grateful Dead.");
    delay(2200);
}
```


#### Quick wokwi demo

[Table of Contents](#table-of-contents)

[*Now Playing*](https://wokwi.com/projects/346503862192964178)
&nbsp;&nbsp;*on*&nbsp;&nbsp;
[*wokwi.com*](https://wokwi.com/)
&nbsp;&nbsp;&nbsp;&nbsp;*See it in action, now!*


# Massive skipping of details&hellip;

## Tools, not Rules

[Table of Contents](#table-of-contents)

### Top down, bottom up, middle out

So, the above program already *works*.  Here's a way to look at how
it got made (see just below).

```cpp
#include <Arduino.h>
void setup() { } void loop() {} // END.
```

This program compiles and 'runs' just fine, on wowki.  Doesn't do
much; isn't meant to.

In a sense, it has several *placeholders* for *future ideas* that
were not (yet) typed into the computer (using some kind of
*code editor* or just a *plaintext* editor).


> *If you leave a placeholder in, 'permanently', you have just
> created a* **hook**.  *Do not put in hooks.  Ever.  Create them
> as required.*

> *If you must, revision control has tools to help you remember
> how to add the hook, when it is truly wanted.*

**The above is opinion, and isn't to be followed; unless you agree
to it by your own philosophy.** &nbsp;&nbsp;&nbsp;;)


`/netreligion`


`Top-down, bottom-up, middle-out` is an approach to programming; it
surely has an accepted definition and description, but will be used
here, only informally, to describe what the theory books will talk
about in detail, using proper names for everything. ;)

It's a tool.  You can use it, or fall back on your other skills and
completely ignore it.  *Everyone develops a style of their own*.

```cpp
#include <Arduino.h>

void setup() {
}

void loop() {
}

// END.
```

*Slightly more formal - same exact program; just added some spacing
to make it a bit easier to take in, while reading it over.*


```cpp
#include <Arduino.h>

void setup() {
    Serial.begin(9600);
}

void loop() {
}

// END.
```

*Initialize the Serial stuph.*

```cpp
#include <Arduino.h>

void haha() { }

void setup() {
    Serial.begin(9600);
    haha();
}

void loop() {
}

// END.
```

*Add a placeholder function called `haha()` that will (later on)
contain something interesting to do, after starting the Serial going
(which lets you print stuph out).*


```cpp
#include <Arduino.h>

void haha() {
    Serial.println(" TEST abciq "); // weird message to recognize as ours
}

void setup() {
    Serial.begin(9600);
    haha();
}

void loop() {
}

// END.
```

*Make `haha()` do something slightly interesting.*

### Then test it.

[Table of Contents](#table-of-contents)

```cpp

#include <Arduino.h>

void haha() {
    Serial.println("When I die,");
    Serial.println("Bury me deep;");
    Serial.println("Put two speakers at my feet.");
    Serial.println("Put some headphones on my head,");
    Serial.println(".. and always play the Grateful Dead.");
}

void haha_old_delete_me() { // cruft
    Serial.println(" TEST abciq "); // weird message
}

void setup() {
    Serial.begin(9600);
    haha();
}

void loop() {
}

// END.
```

So the program's 'working'.  People say that a
lot:&nbsp;&nbsp;&nbsp;*"It's working."* &nbsp;&nbsp;;)

Better: It compiles.  It mostly does what was expected.  Does at
least something useful.  Doesn't quite do what was in mind when
it was first *edited as code*.


```cpp

#include <Arduino.h>

void haha() {
    Serial.println("When I die,");
    Serial.println("Bury me deep;");
    Serial.println("Put two speakers at my feet.");
    Serial.println("Put some headphones on my head,");
    Serial.println(".. and always play the Grateful Dead.");
}

#if 0
void haha_old_delete_me() { // cruft
    Serial.priantln(" TEST abciq "); // weird message
}
#endif

void setup() {
    Serial.begin(9600);
    haha();
}

void loop() {
}

// END.
```

*Show a method for commenting-out code that does not spoil syntax
highlighting inside the commented code.*

Note that `Serial.priantln("message"):` is deliberately misspelled,
but still 'compiles clean'.

*That was a test of the `#if 0` &hellip; `#endif`
construct.* &nbsp;&nbsp;;)


```cpp

#include <Arduino.h>

void haha() {
    Serial.println("When I die,");
    Serial.println("Bury me deep;");
    Serial.println("Put two speakers at my feet.");
    Serial.println("Put some headphones on my head,");
    Serial.println(".. and always play the Grateful Dead.");
}

void setup() {
    Serial.begin(9600);
    haha();
}

void loop() {
}

// END.
```

*Code clean-up - the commented code is no longer operative
and is removed.  Don't worry, with revision control, it is
easily recalled, as required.*

```cpp
// - - -  CODE SNIPPET - - - DOES NOT COMPILE - - -

void setup() {
    Serial.begin(9600);
    haha();
    delay(2200);
}

void loop() {
    Serial.println("   Always play the Grateful Dead.");
    delay(2200);
}
```

This is really what's left to be done; *taken from the working
program; scroll up to see it.*


```cpp

#include <Arduino.h>

void haha() {
    Serial.println("When I die,");
    Serial.println("Bury me deep;");
    Serial.println("Put two speakers at my feet.");
    Serial.println("Put some headphones on my head,");
    Serial.println(".. and always play the Grateful Dead.");
}

void setup() {
    Serial.begin(9600);
    haha();
}

void loop() {
    Serial.println("   Always play the Grateful Dead.");
    delay(2200);
}

// END.
```

*Now the loop is 'playing'.  It's got stuph inside of it.
And it does it, whatever is in there, repeatedly.*


```cpp

#include <Arduino.h>

void haha() {
    Serial.println("When I die,");
    Serial.println("Bury me deep;");
    Serial.println("Put two speakers at my feet.");
    Serial.println("Put some headphones on my head,");
    Serial.println(".. and always play the Grateful Dead.");
}

void setup() {
    Serial.begin(9600);
    haha();
    delay(2200);
}

void loop() {
    Serial.println("   Always play the Grateful Dead.");
    delay(2200);
}

// END.
```

*A slight refinement: there's a decently long delay after
the `haha()` message plays, marking distinctly where the
`setup()` and and where the `loop()` begins, without
crudding it up with a `Mr. Obvious` announcement such as
`You are entering the loop!`*



## Pseudocode

[Table of Contents](#table-of-contents)

#### What's pseudocode?

*Pseudocode is code you write without obeying real syntax rules;
it's there for you, and is meant to remind you of something pretty
close to what you wanted to 'program into the microcontoller' at
some point (hopefully later today!)*

That's pretty much it: fake code that is meant to *model* what you
think should be *going on* in your *program* when it's either
*finished* or at least *completed, up to a certain point* in
its *development*.


# DRAFT ONLY - INCOMPLETE
#### Tue 25 Oct 23:14:55 UTC 2022 - timestamp only occasionally maintained ;)

# Table of Contents
=================

* [Basics of Programming | <a href="README.md">HOME</a> |](#basics-of-programming--home-)
  * **What is Programming?**
  * **Scenario: potato-chip counting machine**
* [What, then, is Programming?](#what-then-is-programming)
  * **Introduction for Beginners: What is a Computer Language?**
  * [Nuts and Bolts of Programs](#nuts-and-bolts-of-programs)
  * [Quick wokwi demo](#quick-wokwi-demo)
* [Tools, not Rules](#tools-not-rules)
  * **Top down, bottom up, middle out**
  * [Test it!](#then-test-it)
* [Pseudocode](#pseudocode)

<!-- Created by https://github.com/ekalinin/github-markdown-toc -->

#### END.
