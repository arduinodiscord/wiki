# Basics of Programming | [HOME](README.md) |
# What is Programming?

[Table of Contents](#table-of-contents "Table Of Contents")


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

[Table of Contents](#table-of-contents "Table Of Contents")


#### Introduction for Beginners: What is a Computer Language?

[Table of Contents](#table-of-contents "Table Of Contents")

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

## Nuts and Bolts of Programs

[Table of Contents](#table-of-contents "Table Of Contents")

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
https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Altair_8800_at_the_Computer_History_Museum%2C_cropped.jpg/1024px-Altair_8800_at_the_Computer_History_Museum%2C_cropped.jpg "8800 from the Computer History Museum - Wikipedia")

*Assembler (assembly language)* would require you to use some
kind of a typewriter&mdash;or other keyboard-like device&mdash;so
that you could use some kind of *language*&mdash;made-up, or
borrowed from someone else&mdash;to 'talk' to the microcontroller,
and give it *instructions on what to do*.

And when to do it.  How to do it!  When not to do it.  And, maybe,
special instructions on what should be done if your *assumptions
were incorrect*. ;)

### Grateful program

[Table of Contents](#table-of-contents "Table Of Contents")

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

[Table of Contents](#table-of-contents "Table Of Contents" "Table Of Contents")

[*Now Playing*](https://wokwi.com/projects/346503862192964178 "Now Playing")
&nbsp;&nbsp;*on*&nbsp;&nbsp;
[*wokwi.com*](https://wokwi.com/ "wokwi.com")
&nbsp;&nbsp;&nbsp;&nbsp;*See it in action, now!*

### Ok but this got complicated, fast

[Table of Contents](#table-of-contents "Table Of Contents")

Yeah, it did. ;)

Here's a wokwi 'answer' to some of that:

[*Misuse of C Preprocessor to simplify code*](https://wokwi.com/projects/346588077549945428)
**morse_beacon.ino** *on wokwi*

That lets you cheat, quite a bit. ;)


> *Disclaimer: the above cheat comes directly from experience in 'Forth' programming (it's another programming language).  Forth programmers often resort to the C Preprocessor to coerce C++ program syntax&hellip; really, quite a bit. ;)*

> *You're not 'supposed to' do this&mdash;there's a strong feeling about this, about.  Just be aware of it; it's a large detour from C++ itself, which is the 'Language of Arduino' so to speak.*


### Hide those details in a library

[Table of Contents](#table-of-contents "Table Of Contents")

[*Misuse Morse with Hidden Details*](https://wokwi.com/projects/346589390531723859)
**morse_beacon_cheaty.ino** *on wokwi*


[*Misuse Morse with Beeps*](https://wokwi.com/projects/346608451675226708)
**morse_beacon_beeps.ino** *on wokwi*


```


zork:  "You see a jelly nailed to a tree, here.  Exits: East, Up, West"


```


## Tools, not Rules

[Table of Contents](#table-of-contents "Table Of Contents")

### Top down, bottom up, middle out

[Table of Contents](#table-of-contents "Table Of Contents")

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

[Table of Contents](#table-of-contents "Table Of Contents")

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

### Initialize the Serial stuph

[Table of Contents](#table-of-contents "Table Of Contents")

```cpp
#include <Arduino.h>

void setup() {
    Serial.begin(9600);
}

void loop() {
}

// END.
```

### Add a placeholder function called `haha()`

&hellip; that will (later on) contain something interesting to do, after starting the Serial going (which lets you print stuph out).

[Table of Contents](#table-of-contents "Table Of Contents")

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

### Make `haha()` do something slightly interesting. Then test it

[Table of Contents](#table-of-contents "Table Of Contents")


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

### It's working

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

**Better:** It compiles.  It mostly does what was expected.  Does at
least something useful.  Doesn't quite do what was in mind when
it was first *edited as code*.


### Comment out unused code

[Table of Contents](#table-of-contents "Table Of Contents")

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

*Shows a method for commenting-out code that does not spoil syntax
highlighting inside the commented code.*

Note that `Serial.priantln("message");` is deliberately misspelled,
but still 'compiles clean'.

*That was a test of the `#if 0` &hellip; `#endif`
construct.* &nbsp;&nbsp;;)


### Strip out commented code entirely

[Table of Contents](#table-of-contents "Table Of Contents")

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

### What still remains to be done - snippet

[Table of Contents](#table-of-contents "Table Of Contents")

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


### Add the repeating code to the loop

[Table of Contents](#table-of-contents "Table Of Contents")

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


### Fixup the `setup()` to separate events

[Table of Contents](#table-of-contents "Table Of Contents")

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



## Blink with Weight

[Table of Contents](#table-of-contents "Table Of Contents")

[*Blink With Weight*](https://wokwi.com/projects/346778138320044627)
**blink_with_weight.ino** *on wokwi*

(Scroll for discussion)

`The code:`

```cpp
// https://wokwi.com/projects/346778138320044627

// Fri 28 Oct 16:03:11 UTC 2022

// Blink an LED, over and over ('endless loop')

void LED_ON() {
  digitalWrite(LED_BUILTIN, 1);
}

void LED_OFF() {
  digitalWrite(LED_BUILTIN, 0);
}

// ON_TIME  200     OFF_TIME  1000

//  WEIGHT    5     UNIT_TIME    4
//   SCALE   50

#define WEIGHT 5 // OFF to ON ratio (time intervals)
                 // larger WEIGHT gives more OFF time
#define UNIT_TIME 4 // basis of all other timings
#define SCALE 50 // scales all times evenly

#define ON_TIME (UNIT_TIME * SCALE)
#define OFF_TIME (ON_TIME * WEIGHT)

void report() {
  Serial.println("\n The red LED is marked 'L' on the Uno.");
  Serial.println(" This program makes it blink.");

  Serial.print("\n Your ON_TIME: ");
  Serial.print(ON_TIME);
  Serial.print("    Your OFF_TIME: ");
  Serial.println(OFF_TIME);
  Serial.println("");
}


void LED_BLINK () {
  LED_ON();
  delay(ON_TIME);
  LED_OFF();
  delay(OFF_TIME);
}

void setup_GPIO() {
  pinMode(LED_BUILTIN, OUTPUT);
  LED_OFF();
}

void setup_serial() {
  Serial.begin(9600);
}

void setup() {
  setup_GPIO();
  setup_serial();
  report();
}

void loop() {
  LED_BLINK();
}

// END.
```
### Blink with Weight - first simplification

[Table of Contents](#table-of-contents "Table Of Contents")

*Can you simplify that, slightly?*

Sure:


```
 $ cpp ./code.cpp > preprocessed-code.cpp
 $ cat ./preprocessed-code.cpp
```

```cpp
void LED_ON() {
  digitalWrite(LED_BUILTIN, 1);
}

void LED_OFF() {
  digitalWrite(LED_BUILTIN, 0);
}

void report() {
  Serial.println("\n The red LED is marked 'L' on the Uno.");
  Serial.println(" This program makes it blink.");

  Serial.print("\n Your ON_TIME: ");
  Serial.print((4 * 50));
  Serial.print("    Your OFF_TIME: ");
  Serial.println(((4 * 50) * 5));
  Serial.println("");
}

void LED_BLINK () {
  LED_ON();
  delay((4 * 50));
  LED_OFF();
  delay(((4 * 50) * 5));
}

void setup_GPIO() {
  pinMode(LED_BUILTIN, OUTPUT);
  LED_OFF();
}

void setup_serial() {
  Serial.begin(9600);
}

void setup() {
  setup_GPIO();
  setup_serial();
  report();
}

void loop() {
  LED_BLINK();
}
// END.
```

### Blink with Weight - first simplification - discussion

[Table of Contents](#table-of-contents "Table Of Contents")

*You said it was simpler, but there's new stuff now!*

Yeah.

The **C Preprocessor** was used to 'process' all the `#define` stuff.

What it does is **substitute** what you would have typed by hand if
you had never used a `#define` at all (for this use; there are other
interesting uses for a `#define` that are different from this use!)

In this case, the original `#define` statements, some of them, were
not simple substitutions of number.  Instead, they substituted
multiplications, with the parentheses, and 'typed them into' the
main program text, exactly as you could have done yourself, by hand.

The C Preprocessor did not simplify further, so all the parentheses
are intact.

You can simplify further on your own, if you want simpler, hard-
coded numbers where the multiplications went.

That'll be next:


### Factor - remove determinant math

[Table of Contents](#table-of-contents "Table Of Contents")

```cpp
void LED_ON() {
  digitalWrite(LED_BUILTIN, 1);
}

void LED_OFF() {
  digitalWrite(LED_BUILTIN, 0);
}

void report() {
  Serial.println("\n The red LED is marked 'L' on the Uno.");
  Serial.println(" This program makes it blink.");

  Serial.print("\n Your ON_TIME: ");
  Serial.print(200);    // 4 * 50 = 200
  Serial.print("    Your OFF_TIME: ");
  Serial.println(1000); // 4 * 50 * 5 = 1000
  Serial.println("");
}

void LED_BLINK () {
  LED_ON();
  delay(200);  // 4 * 50 = 200
  LED_OFF();
  delay(1000); // 4 * 50 * 5 = 1000
}

void setup_GPIO() {
  pinMode(LED_BUILTIN, OUTPUT);
  LED_OFF();
}

void setup_serial() {
  Serial.begin(9600);
}

void setup() {
  setup_GPIO();
  setup_serial();
  report();
}

void loop() {
  LED_BLINK();
}
// END.
```

*It's a bit simpler, now.*

#### What changed: second simplification of Blink with Weight

[Table of Contents](#table-of-contents "Table Of Contents")

 * The C Preprocessor directives are gone (no more `#define`)
 * The math inside the parentheses was done by hand, and the results were substituted

#### What was lost in the process of simplification

[Table of Contents](#table-of-contents "Table Of Contents")

 * The individual numbers that make up the math had real value, to change timing of the LED `blink/dark` cycle.
 * Those timings were distinct and could be easiy changed when they were still part of the `#define` statements; that ease of use/change/experimentation is no longer as evident.


### Third simplification - Blink with Weight

[Table of Contents](#table-of-contents "Table Of Contents")

**Compress the code - LED_BLINK() - i**

```cpp
void xxxLED_ON() {
  digitalWrite(LED_BUILTIN, 1);
}

void xxxLED_OFF() {
  digitalWrite(LED_BUILTIN, 0);
}

void report() {
  Serial.println("\n The red LED is marked 'L' on the Uno.");
  Serial.println(" This program makes it blink.");

  Serial.print("\n Your ON_TIME: ");
  Serial.print(200);    // 4 * 50 = 200
  Serial.print("    Your OFF_TIME: ");
  Serial.println(1000); // 4 * 50 * 5 = 1000
  Serial.println("");
}

void LED_BLINK () {
  // LED_ON();
  digitalWrite(LED_BUILTIN, 1);
  delay(200);  // 4 * 50 = 200
  // LED_OFF();
  digitalWrite(LED_BUILTIN, 0);
  delay(1000); // 4 * 50 * 5 = 1000
}

void setup_GPIO() {
  pinMode(LED_BUILTIN, OUTPUT);
  // LED_OFF();
}

void setup_serial() {
  Serial.begin(9600);
}

void setup() {
  setup_GPIO();
  setup_serial();
  report();
}

void loop() {
  LED_BLINK();
}
// END.
```

### Remove the commented code and comment out the unused functions

[Table of Contents](#table-of-contents "Table Of Contents")

**Compress the code - LED_BLINK() - ii**

```cpp
// void xxxLED_ON() {
  // digitalWrite(LED_BUILTIN, 1);
// }

// void xxxLED_OFF() {
  // digitalWrite(LED_BUILTIN, 0);
// }

void report() {
  Serial.println("\n The red LED is marked 'L' on the Uno.");
  Serial.println(" This program makes it blink.");

  Serial.print("\n Your ON_TIME: ");
  Serial.print(200);
  Serial.print("    Your OFF_TIME: ");
  Serial.println(1000);
  Serial.println("");
}

void LED_BLINK () {
  digitalWrite(LED_BUILTIN, 1);
  delay(200);
  digitalWrite(LED_BUILTIN, 0);
  delay(1000);
}

void setup_GPIO() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void setup_serial() {
  Serial.begin(9600);
}

void setup() {
  setup_GPIO();
  setup_serial();
  report();
}

void loop() {
  LED_BLINK();
}
// END.
```

*Good.  Still runs exactly the same; code is a bit 'simpler' now.*

*Not necessarily 'better' but it is simpler!*


### Cram it all into setup() where it was split out into functions

[Table of Contents](#table-of-contents "Table Of Contents")

**Compress the code - setup() - i**

```cpp
void LED_BLINK () {
  digitalWrite(LED_BUILTIN, 1);
  delay(200);
  digitalWrite(LED_BUILTIN, 0);
  delay(1000);
}

void setup() {
  // setup_GPIO();
  pinMode(LED_BUILTIN, OUTPUT);

  // setup_serial();
  Serial.begin(9600);

  // report();
  Serial.println("\n The red LED is marked 'L' on the Uno.");
  Serial.println(" This program makes it blink.");

  Serial.print("\n Your ON_TIME: ");
  Serial.print(200);
  Serial.print("    Your OFF_TIME: ");
  Serial.println(1000);
  Serial.println("");
}

void loop() {
  LED_BLINK();
}
// END.
```


### Druids, man.

[Table of Contents](#table-of-contents "Table Of Contents")

*Nope. ;)*

**Compress the code - setup() - ii**

```cpp
void LED_BLINK () {
  digitalWrite(LED_BUILTIN, 1); delay(200);
  digitalWrite(LED_BUILTIN, 0); delay(1000);
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
  Serial.print("\n ON: "); Serial.print(200);
  Serial.print("    OFF: "); Serial.println(1000);
  Serial.println("");
}

void loop() {
  LED_BLINK();
}
// END.
```

*Made things a bit more compact; the essential LED blink rate and duty cycle are unchanged.*

`report()` remnants greatly reduced or compressed to simpler information printed.

*Note that the `delay()` statements were brought up to the
 same lines as the digitalWrite() statements, saving on
 some vertical space.  There was a lot of unused empty
 space, there, and the clarity of the code doesn't suffer
 much (if at all) to do it that way.*


### Last simplification: no printing at all.

[Table of Contents](#table-of-contents "Table Of Contents")

*Maybe you don't have printing working, anyway, and already
know enough without the printing statements.*

**Compress the code - no printing at all**

```cpp
void LED_blink () {
  digitalWrite(LED_BUILTIN, 1); delay(200);
  digitalWrite(LED_BUILTIN, 0); delay(1000);
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  LED_blink();
}
```

*Also renamed the LED_BLINK() function to get rid of the excess upper-case lettering.*


### Wait wait can't you just shove it in the loop?

[Table of Contents](#table-of-contents "Table Of Contents")

*You're right!  Missed that simplification. ;*

**Compress the code - everything inside the loop()**

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, 1); delay(200);
  digitalWrite(LED_BUILTIN, 0); delay(1000);
}
```


### Okay that was a bit too stingy, what about making it look nice, again?

[Table of Contents](#table-of-contents "Table Of Contents")

*Good idea.*

&nbsp;&nbsp;&nbsp;&nbsp;**Compress the code - reformat for clarity and simplicity**

```cpp
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_BUILTIN, 1);
    delay(200);

    digitalWrite(LED_BUILTIN, 0);
    delay(1000);
}
```

**That's kinda nice now!**

Indeed.


## Discussion - Blink with Weight - LED blinker program

[Table of Contents](#table-of-contents "Table Of Contents")

*led blinker*

*The discussion itself goes here.*

## Pseudocode

[Table of Contents](#table-of-contents "Table Of Contents")

#### What's pseudocode?

*Pseudocode is code you write without obeying real syntax rules;
it's there for you, and is meant to remind you of something pretty
close to what you wanted to 'program into the microcontroller' at
some point (hopefully later today!)*

That's pretty much it: fake code that is meant to *model* what you
think should be *going on* in your *program* when it's either
*finished* or at least *completed, up to a certain point* in
its *development*.


# DRAFT ONLY - INCOMPLETE
#### Sat 29 Oct 01:36:56 UTC 2022 - timestamp only occasionally maintained ;)

# Table of Contents
=================

- [Basics of Programming | HOME |](#basics-of-programming--home-)
- [What is Programming?](#what-is-programming)
      - [Scenario: potato-chip counting machine](#scenario-potato-chip-counting-machine)
- [What, then, is Programming?](#what-then-is-programming)
      - [Introduction for Beginners: What is a Computer Language?](#introduction-for-beginners-what-is-a-computer-language)
  - [Nuts and Bolts of Programs](#nuts-and-bolts-of-programs)
    - [Grateful program](#grateful-program)
      - [Quick wokwi demo](#quick-wokwi-demo)
    - [Ok but this got complicated, fast](#ok-but-this-got-complicated-fast)
    - [Hide those details in a library](#hide-those-details-in-a-library)
  - [Tools, not Rules](#tools-not-rules)
    - [Top down, bottom up, middle out](#top-down-bottom-up-middle-out)
    - [Initialize the Serial stuph](#initialize-the-serial-stuph)
    - [Add a placeholder function called `haha()`](#add-a-placeholder-function-called-haha)
    - [Make `haha()` do something slightly interesting. Then test it](#make-haha-do-something-slightly-interesting-then-test-it)
    - [It's working](#its-working)
    - [Comment out unused code](#comment-out-unused-code)
    - [Strip out commented code entirely](#strip-out-commented-code-entirely)
    - [What still remains to be done - snippet](#what-still-remains-to-be-done---snippet)
    - [Add the repeating code to the loop](#add-the-repeating-code-to-the-loop)
    - [Fixup the `setup()` to separate events](#fixup-the-setup-to-separate-events)
  - [Blink with Weight](#blink-with-weight)
    - [Blink with Weight - first simplification](#blink-with-weight---first-simplification)
    - [Blink with Weight - first simplification - discussion](#blink-with-weight---first-simplification---discussion)
    - [Factor - remove determinant math](#factor---remove-determinant-math)
      - [What changed: second simplification of Blink with Weight](#what-changed-second-simplification-of-blink-with-weight)
      - [What was lost in the process of simplification](#what-was-lost-in-the-process-of-simplification)
    - [Third simplification - Blink with Weight](#third-simplification---blink-with-weight)
    - [Remove the commented code and comment out the unused functions](#remove-the-commented-code-and-comment-out-the-unused-functions)
    - [Cram it all into setup() where it was split out into functions](#cram-it-all-into-setup-where-it-was-split-out-into-functions)
    - [Druids, man.](#druids-man)
    - [Last simplification: no printing at all.](#last-simplification-no-printing-at-all)
    - [Wait wait can't you just shove it in the loop?](#wait-wait-cant-you-just-shove-it-in-the-loop)
    - [Okay that was a bit too stingy, what about making it look nice, again?](#okay-that-was-a-bit-too-stingy-what-about-making-it-look-nice-again)
  - [Discussion - Blink with Weight - LED blinker program](#discussion---blink-with-weight---led-blinker-program)
  - [Pseudocode](#pseudocode)
      - [What's pseudocode?](#whats-pseudocode)
- [DRAFT ONLY - INCOMPLETE](#draft-only---incomplete)
      - [Sat 29 Oct 01:36:56 UTC 2022 - timestamp only occasionally maintained ;)](#sat-29-oct-013656-utc-2022---timestamp-only-occasionally-maintained-)
- [# Table of Contents](#-table-of-contents)
      - [END.](#end)

<!-- Created by https://github.com/ekalinin/github-markdown-toc -->

#### END.
