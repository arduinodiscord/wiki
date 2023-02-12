import{_ as e,o as t,c as o,h as i}from"./app.63be2f21.js";const w=JSON.parse(`{"title":"Timers and Counters","description":"","frontmatter":{},"headers":[{"level":2,"title":"millis() versus delay()","slug":"millis-versus-delay","link":"#millis-versus-delay","children":[]},{"level":2,"title":"Blink Without Delay demonstrates millis()","slug":"blink-without-delay-demonstrates-millis","link":"#blink-without-delay-demonstrates-millis","children":[]},{"level":2,"title":"What does millis() provide?","slug":"what-does-millis-provide","link":"#what-does-millis-provide","children":[]},{"level":2,"title":"delay()","slug":"delay","link":"#delay","children":[{"level":3,"title":"Scenario - using delay() for fast prototyping","slug":"scenario-using-delay-for-fast-prototyping","link":"#scenario-using-delay-for-fast-prototyping","children":[]}]},{"level":2,"title":"Revisiting the 'counter' vs 'timer' comparison of the two functions","slug":"revisiting-the-counter-vs-timer-comparison-of-the-two-functions","link":"#revisiting-the-counter-vs-timer-comparison-of-the-two-functions","children":[]},{"level":2,"title":"How to use it: millis() - in the abstract","slug":"how-to-use-it-millis-in-the-abstract","link":"#how-to-use-it-millis-in-the-abstract","children":[{"level":3,"title":"Timing without a Timer - Kitchen Clock","slug":"timing-without-a-timer-kitchen-clock","link":"#timing-without-a-timer-kitchen-clock","children":[]}]},{"level":2,"title":"Timer vs Counter (yes more rant)","slug":"timer-vs-counter-yes-more-rant","link":"#timer-vs-counter-yes-more-rant","children":[{"level":3,"title":"Countdown timer on the wristwatch","slug":"countdown-timer-on-the-wristwatch","link":"#countdown-timer-on-the-wristwatch","children":[]}]}],"relativePath":"codeGuides/millisVsDelay.md","lastUpdated":1675951483000}`),a={name:"codeGuides/millisVsDelay.md"},n=i(`<h1 class="text-[#e67e22]" id="timers-and-counters" tabindex="-1">Timers and Counters <a class="header-anchor" href="#timers-and-counters" aria-hidden="true">#</a></h1><h2 id="millis-versus-delay" tabindex="-1"><code>millis()</code> versus <code>delay()</code> <a class="header-anchor" href="#millis-versus-delay" aria-hidden="true">#</a></h2><p><code>millis()</code> is a counter but is not a timer; <code>delay()</code> is a timer but is not a counter.</p><p><em>More on this in a bit.</em></p><p><code>delay()</code> wants something from you (instructions on how to do exactly what is requested).</p><p><code>millis()</code> wants nothing from you - it is a provider of information. <code>delay()</code> provides no information.</p><ul><li><code>delay()</code> &#39;blocks&#39; progress</li><li><code>millis()</code> runs in the background</li><li><code>millis()</code> does not &#39;block&#39; progress</li></ul><p>So, by using <code>millis()</code> instead of <code>delay()</code> your program can do much more, in the same amount of time.</p><h2 id="blink-without-delay-demonstrates-millis" tabindex="-1">Blink Without Delay demonstrates <code>millis()</code> <a class="header-anchor" href="#blink-without-delay-demonstrates-millis" aria-hidden="true">#</a></h2><p><a href="https://github.com/arduino/arduino-examples/blob/main/examples/02.Digital/BlinkWithoutDelay/BlinkWithoutDelay.ino" target="_blank" rel="noreferrer">BlinkWithoutDelay.ino</a> <em>on the Arduino github</em></p><p><em>What&#39;s stopping you?</em></p><p><em>Whatever it is, it&#39;s not millis()</em></p><h2 id="what-does-millis-provide" tabindex="-1">What does millis() provide? <a class="header-anchor" href="#what-does-millis-provide" aria-hidden="true">#</a></h2><p><code>millis()</code> provides a count of the number of milliseconds that have passed, since &#39;time began&#39;.</p><p>That count begins when power is applied to an Arduino board.</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> what_time_is_it_now </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">millis</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The value stored in &#39;what_time_is_it_now&#39; reflects how many milliseconds of time have passed, since the Arduino board&#39;s <code>setup()</code> function first started to run (which happens almost immediately after power is applied to the board).</p><p><code>millis()</code> resets to zero when power is first applied to the Arduino board.</p><p><em>The output of <code>millis()</code> is a snapshot of its current value, &#39;now&#39;, expressed as an integer.</em></p><p><em><code>millis()</code> returns a series of numbers, always increasing; one for each time it is called.</em></p><p>These &#39;serial numbers&#39; are simply a count. They&#39;re a count of the exact number of <em>milliseconds</em> of (real clock) time (approximately) since the Arduino was &#39;started&#39; (powered on).</p><h2 id="delay" tabindex="-1"><code>delay()</code> <a class="header-anchor" href="#delay" aria-hidden="true">#</a></h2><p><code>delay()</code> was designed for very quick, demonstration program development, for one-off proof-of-concept work that does not need to do very much at all, to be considered a successful program.</p><h3 id="scenario-using-delay-for-fast-prototyping" tabindex="-1">Scenario - using <code>delay()</code> for fast prototyping <a class="header-anchor" href="#scenario-using-delay-for-fast-prototyping" aria-hidden="true">#</a></h3><p><em>The presenter has one hour to put something together, having been asked to speak to a classroom about the Arduino, just moments ago.</em></p><p><em>Since the audience is expected to know little or nothing about programming or microcontrollers or LEDs, making an LED blink from scratch might be a useful impressive demonstration. The &#39;from scratch&#39; part is what&#39;s going to get a &#39;wow&#39; from the audience, if it&#39;s done right.</em></p><p>Anything but <code>delay()</code> will be lost on that audience, but a blinking light is going to get them going. They&#39;ll be .. okay, maybe not. This is a first draft scenario. 😉</p><p>So what <code>delay()</code> provides is a pause in program execution. It just tells the Arduino hardware (an MCU chip) to stop whatever it was doing, until some time has passed, then just pick up, right where it left off.</p><h4 id="that-may-sound-identical-to-millis-so-let-s-get-down-to-brass-tacks" tabindex="-1">That may sound identical to <code>millis()</code> so let&#39;s get down to brass tacks <a class="header-anchor" href="#that-may-sound-identical-to-millis-so-let-s-get-down-to-brass-tacks" aria-hidden="true">#</a></h4><p><code>delay()</code> accepts one parameter, which is an integer that says how many milliseconds to wait before continuing in the program. No line of code below it can execute until that time has passed.</p><p><code>millis()</code> accepts no parameters. It provides an &#39;answer&#39; to this question:</p><p>How many milliseconds of time have passed, since I first applied power?</p><p><em>I know what you&#39;re thinking; no, it&#39;s not accumulative at all. Just unplug the USB cable for one second, and plug it back in, and see for yourself, when the demonstration code is listed (here in this document; it&#39;s a work in progress 24 October 2022 at 20:27 UTC).</em></p><h2 id="revisiting-the-counter-vs-timer-comparison-of-the-two-functions" tabindex="-1">Revisiting the &#39;counter&#39; vs &#39;timer&#39; comparison of the two functions <a class="header-anchor" href="#revisiting-the-counter-vs-timer-comparison-of-the-two-functions" aria-hidden="true">#</a></h2><p><em>From the above:</em></p><p><code>millis()</code> is a counter but is not a timer; <code>delay()</code> is a timer but is not a counter.</p><p>Yes, <code>millis()</code> is a counter, but we are also aware of what it&#39;s counting and when it counts it. <code>millis()</code> is a counter that &#39;evolves by a clock&#39;.</p><p>This situation is a bit like the odometer in your car. You could pry it out, put it on a drill, and spin it to artificially change that count in a very short while.</p><p>That&#39;d be cheating. It would no longer give an accurate reading about the miles put on the car.</p><p><code>millis()</code> is the Arduino &#39;odometer of time&#39;. 😉</p><p>It is a bit like an (imaginary) secure odometer that&#39;s tamper-proof; you have to wait the required time before <code>millis()</code> will rack up those &#39;miles&#39; (count of milliseconds).</p><p>There&#39;s no cheating.</p><p>So <code>millis()</code> isn&#39;t a timer - it&#39;s a counter; but it counts ... milliseconds, which happens to involve &#39;time&#39;. Worse, only upgrades the count when some time has passed (otherwise it&#39;d be like putting that drill on the odometer, to race it forward 30 thousand miles in just a few minutes of &#39;bench&#39; time).</p><h2 id="how-to-use-it-millis-in-the-abstract" tabindex="-1">How to use it: <code>millis()</code> - <em>in the abstract</em> <a class="header-anchor" href="#how-to-use-it-millis-in-the-abstract" aria-hidden="true">#</a></h2><p><em><strong>An analogy</strong></em></p><h3 id="timing-without-a-timer-kitchen-clock" tabindex="-1">Timing without a Timer - Kitchen Clock <a class="header-anchor" href="#timing-without-a-timer-kitchen-clock" aria-hidden="true">#</a></h3><p>You walk into the kitchen, glance at the clock on the wall, write down the time it shows, and walk out of the kitchen.</p><p>You do not own a stopwatch. Just that kitchen clock.</p><p>You&#39;re wondering if 25 minutes have passed or not - you don&#39;t want to be early on this one; maybe you&#39;re drying some glued parts on the bench, and you want to wait at least 25 minutes.</p><p>So you&#39;re using your kitchen clock, in the other room, to keep track of how long the glue has been drying. 😉</p><p>You walk back into the kitchen, to read the current time on the clock.</p><p>You write it down, and head back to the ... the makerspace you got there. 😉 <em>Your bench.</em></p><p>Now you have two times written down; one is from the first time you went into the kitchen; the second is the time you wrote down just a moment ago.</p><p>Now you gotta do some math, and figure out how much time went by since you first glanced at the kitchen clock, to just a moment ago, when you glanced at it again.</p><p>Maybe there&#39;s 15 minutes difference between those two events.</p><p>But you do the math; the clock on the kitchen wall won&#39;t do the math for you.</p><p>Really, <em><strong>the kitchen clock is just a counter that evolves over &#39;time&#39;.</strong></em> It&#39;s providing you with the answer to one question: how many seconds of time have passed since the clock... get this... was set.</p><p>That&#39;s really all it is telling you. It&#39;s <em>giving you an accurate count of the number of seconds that have passed since you plugged it in</em> or installed the battery or turned on its power switch, if it has one.</p><p>You use the information it gives you, and some math, to come up with a substitute for a timer, or a stopwatch.</p><p>But it&#39;s only a counter; it is not a timer!</p><p>It just happens to be a counter that runs on a <em>timebase</em>; the old clocks had an &#39;escapement&#39; that prevented them from running faster than wanted (which they were prone to do, otherwise).</p><h2 id="timer-vs-counter-yes-more-rant" tabindex="-1">Timer vs Counter (yes more rant) <a class="header-anchor" href="#timer-vs-counter-yes-more-rant" aria-hidden="true">#</a></h2><p>When people had stopwatches working pretty good, then they wanted to set a very precise time to <em>&#39;count down to&#39;</em>. They wanted a timer!</p><p>A timer accepts instructions that say how long the timer should run, before it does something interesting.</p><p><em>Like telling you that time&#39;s up.</em></p><p>The old wind-up kitchen timer was a clock mechanism on a spring; you dialed in (by turning a knob) how much time you wanted to let pass by, before it makes that loud dinging sound, saying TIME IS UP.</p><p>When wristwatches got LCD displays, one of the gadgets the manufacturers built into the new &#39;watch&#39; was a stopwatch. It counted seconds of time, and usually ran at least 24 hours before giving up (or reaching overflow).</p><h3 id="countdown-timer-on-the-wristwatch" tabindex="-1">Countdown timer on the wristwatch <a class="header-anchor" href="#countdown-timer-on-the-wristwatch" aria-hidden="true">#</a></h3><p>Then they said this: hey let&#39;s run that backwards; the countdown timer could be made almost the same way as a stopwatch, but it could have this new feature:</p><blockquote><p>you tell it &#39;how long&#39; ... and it runs the timer backwards. It&#39;s exactly like running a stopwatch in reverse, from the end of the run, back to the start of the run. 😉</p></blockquote><p>The MCU chip does have a peripheral inside it called the <code>counter-timer</code> which may be behind a lot of this. That&#39;s not the only way to do things, but is one available mechanism.</p>`,71),s=[n];function r(l,h,c,d,u,m){return t(),o("div",null,s)}const g=e(a,[["render",r]]);export{w as __pageData,g as default};