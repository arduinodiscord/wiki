#How to Use a Breadboard |[HOME](README.md) |

## Introduction

#### Breadboards are one of the most fundamental pieces when learning how to build circuits. In this tutorial, you will learn a little bit about what breadboards are, why they are called breadboards, and how to use one. Once you are done you should have a basic understanding of how breadboards work and be able to build a basic circuit on a breadboard.

## Why Use Breadboards?
#### An electronics breadboard (as opposed to the type on which sandwiches are made) is actually referring to a solderless breadboard. These are great units for making temporary circuits and prototyping, and they require absolutely no soldering.

#### Prototyping is the process of testing out an idea by creating a preliminary model from which other forms are developed or copied, and it is one of the most common uses for breadboards. If you aren’t sure how a circuit will react under a given set of parameters, it’s best to build a prototype and test it out.

#### For those new to electronics and circuits, breadboards are often the best place to start. That is the real beauty of breadboards--they can house both the simplest circuit as well as very complex circuits. As you'll see later in this tutorial, if your circuit outgrows its current breadboard, others can be be attached to accommodate circuits of all sizes and complexities.

#### Another common use of breadboards is testing out new parts, such as Integrated circuits (ICs). When you are trying to figure out how a part works and constantly rewiring things, you don’t want to have to solder your connections each time.

#### As mentioned, you don’t always want the circuit you build to be permanent. When trying to duplicate a customer’s problem, SparkFun’s Technical Support team will often use breadboards to build, test, and analyze the circuit. They can connect the parts the customer has, and once they’ve gotten the circuit setup and figured out the problem, they can take everything apart and put it aside for the next time they need to do some troubleshooting.

## Power Rails
#### Now that we’ve seen how the connections in a breadboard are made, let’s look at a larger, more typical breadboard. Aside from horizontal rows, breadboards usually have what are called power rails that run vertically along the sides. These power rails are metal strips that are identical to the ones that run horizontally, except they are, typically*, all connected. When building a circuit, you tend to need power in lots of different places. The power rails give you lots of easy access to power wherever you need it in your circuit. Usually they will be labeled with a ‘+’ and a ‘-’ and have a red and blue or black stripe, to indicate the positive and negative side.  It is important to be aware that the power rails on either side are not connected, so if you want the same power source on both sides, you will need to connect the two sides with some jumper wires. Keep in mind that the markings are there just as a reference. There is no rule that says you have to plug power into the '+' rail and ground into the '-'rail, though it's good practice to keep everything in order.

## Providing Power to a Breadboard
#### Borrowing from Other Power Sources
If you are working with a development board such as an Arduino, then you can simply pull power from the Arduino’s female headers. The Arduino has multiple power and ground pins that you can connect to the power rails or other rows on a breadboard.