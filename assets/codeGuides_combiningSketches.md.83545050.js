import{_ as s,o as e,c as a,h as n}from"./app.63be2f21.js";const l="/assets/LiquidCrytstalLibrary.42113990.png",p="/assets/AdafruitDHTSensorLibrary.39e7070c.png",t="/assets/DHTSensorLibraryExample.d28bf7a6.png",o="/assets/LiquidCrytstalExample.4a46d31d.png",i="/assets/sidebyside.323a62fb.png",c="/assets/sidebyside2.a5e425ae.png",r="/assets/sidebyside3.e084252d.png",d="/assets/sidebyside4.883300f5.png",h="/assets/sidebyside5.36e0a4ec.png",m="/assets/sidebyside6.be34443c.png",y="/assets/sidebyside7.495aa7cd.png",u="/assets/sidebyside8.57441e45.png",A="/assets/sidebyside9.8f6248a5.png",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAWCAMAAAACTQXBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOUExURd3d3f/////uzjmWvbb//7a6mwCWvdqOOTmO2v+2ZgA5jtr//46ovf/kjtqRtv//2mYAZo45Zv//746omwCXnACozmaomwCovY7u/9rdvTmWmzm63v/ktuFzANNUANJzZuFzZvD///etOfDk///KZtKRtvCRANJTZtJzjulzAPCROdJTOeHK2gBmtrZmAP//3maozjmoztrLveFTZuGt2umRjvf//+lzZv//tuFzjuFTAOGttvCRZunk///dvTnL79rLrGbd/2aWvdpTAOHK/9qt2o45AGa2/2Y5Zmaovdr/7/fKjtpzjrZmOTlmtma6velzOf/k2uFzOWaWmwCWrNqRjuGtjmaO2v/MAAAAAByaaWQAAABadFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ANHWim8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGaSURBVEhL7ZRrT8IwFIY9yEUYEB1DUaHZGDFsQ6fywRmNosX78I76/3+Jp+0Yw8giW4h82JPRHehCnr2n7dISLC6JXFQSuagkclH5TS61nBZFJusVfyW3ApDHT5BcQfKqmQlPrjhFrlT2iknsVXyeDwHWZnzBACgnV5QqZJRsOrWubNQwLyxxZnNL2R7L1Q2iqho0KVF1aFFCSRl2ulqLtsFwTWp12EP5XTbuTUYXTw5kdJCLkr0v8VIEljqQ4HDcVrMD9a5WusJkhn5yaOu44NATgFMdvwstoegTUw7Ozr0LoHeBA5NjhXzp/zGGZfVZcIRY+kjuSMi5bB614fqG/ZovsHGEfRt5yQk5+e4efULlkIe2UEACcsd4aSFyg0eviIDYEL0nFAtrq9PFuFzNwQXHwLLe6MOz/mK0wXnFtprT2mrHbasXkdgQ9puiKO81viEqVTaLOGqDtRVKeBtiUCaxMKoWtT5o2XGbZGJD8Px8YsvFgq85zhyOkrgYlGCmnNwnxvfjEB7M6xD+ZxZe7mvxSOSiwtQAvgEiRM+dCXR1mwAAAABJRU5ErkJggg==",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAVCAMAAADvsTk6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhUExURd3d3f//////tmYAADmO2mY5jtr//7ZmAABmtvDw8AAAAC/bK4YAAAALdFJOU/////////////8ASk8B8gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAEZJREFUOE9jYGCkPhg1lPqAdoYyMbNAeFQCEJcysYI51AJDz1A2MI9KAGIoIzsHmKISoKFLh0xE0SbxUxmMdEOhNBUBIyMAsRsHFxeanDQAAAAASUVORK5CYII=",g="/assets/sidebyside10.abd2b3a4.png",D="/assets/sidebyside11.2dfb99f3.png",C="/assets/sidebyside12.3939c77f.png",f="/assets/verifycompile.b1533f41.png",v="/assets/verifycompile2.c991d482.png",k="/assets/filecombodemo.851ca7ef.gif",B=JSON.parse('{"title":"Combining Sketches","description":"","frontmatter":{},"headers":[{"level":2,"title":"Block comments","slug":"block-comments","link":"#block-comments","children":[]},{"level":2,"title":"Single line comments","slug":"single-line-comments","link":"#single-line-comments","children":[]},{"level":2,"title":"Libraries Include Section","slug":"libraries-include-section","link":"#libraries-include-section","children":[]},{"level":2,"title":"Definition Section","slug":"definition-section","link":"#definition-section","children":[]},{"level":2,"title":"Global Variables","slug":"global-variables","link":"#global-variables","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]},{"level":2,"title":"Loop","slug":"loop","link":"#loop","children":[]}],"relativePath":"codeGuides/combiningSketches.md","lastUpdated":1675952674000}'),w={name:"codeGuides/combiningSketches.md"},_=n(`<h1 class="text-[#e67e22]" id="combining-sketches" tabindex="-1">Combining Sketches <a class="header-anchor" href="#combining-sketches" aria-hidden="true">#</a></h1><p>When combining two or more sketches, it is <strong>VERY</strong> important that you understand the various sections of the sketch, the next part of this guide is describing these sections.</p><p>You can skip over this, then come back later and read it when your combined sketches don’t work.</p><div class="tip custom-block"><p class="custom-block-title">Sketch Sections</p><p>Arduino basic sketches have sections</p><ul><li>Block comments</li><li>Single line comments</li><li>Libraries Include Section</li><li>Definition Section</li><li>Global Variables</li><li>Functions</li><li>Setup</li><li>Loop</li></ul><p>Let&#39;s look at each of these sections in more detail</p></div><h2 id="block-comments" tabindex="-1">Block comments <a class="header-anchor" href="#block-comments" aria-hidden="true">#</a></h2><p>These can appear anywhere in the code. You will see them appear the most at the top with the author, description, etc.</p><p>Comments are ignored by the Arduino compiler. They are there to help you understand the code.</p><p>They can be used to temporarily disable code. This is useful when you are testing a section of code and you want to disable the rest of the code.</p><p><strong>Example</strong></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * This is a block comment</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The block comments start with <code>/*</code> and end with <code>*/</code></p><h2 id="single-line-comments" tabindex="-1">Single line comments <a class="header-anchor" href="#single-line-comments" aria-hidden="true">#</a></h2><p>A single line comment starts with <code>//</code> and ends at the end of the line.</p><p><strong>Example</strong></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// This is a single line comment</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>When combining sketches, you can ignore the comment lines and comment blocks, if you want, as Arduino code ignores these.</p><h2 id="libraries-include-section" tabindex="-1">Libraries Include Section <a class="header-anchor" href="#libraries-include-section" aria-hidden="true">#</a></h2><p>This section appears at the very top of the sketch.</p><div class="info custom-block"><p class="custom-block-title">Special Cases</p><p>There are some VERY special cases where a library may have a directive required before the library is loaded. This is very unusual but can happen. It will appear as a line of code that looks like this:</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SOME_PIN</span><span style="color:#A6ACCD;"> 20</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SOME_VALUE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>before the include library statement</p></div><p>The library load/include command is in the form of:</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">library file name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This will load and include the library if it is in the standard library path. If you load a library using the library manager, then the library will be in the correct place to be loaded with this statement.</p><p>In some cases, the library file name may be in quotes, but this is a special case.</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">library file name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>In the case the library file is not in the normal location, then if it is in the same directory as the sketch it will use the quote format.</p><div class="info custom-block"><p class="custom-block-title">Special Case</p><p>It may also have the full path to the file as well, but this is a special case.</p></div><h2 id="definition-section" tabindex="-1">Definition Section <a class="header-anchor" href="#definition-section" aria-hidden="true">#</a></h2><p>Usually, a sketch will have constants here. These are variables that do not change.</p><p><strong>Example</strong></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">led_pin</span><span style="color:#A6ACCD;"> 13</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">num_leds</span><span style="color:#A6ACCD;"> 20</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">Pay Attention</p><p>There are no semi colons after a define.</p></div><h2 id="global-variables" tabindex="-1">Global Variables <a class="header-anchor" href="#global-variables" aria-hidden="true">#</a></h2><p>A variable that is declared above the <code>setup()</code>, may or may not change value over time, and is used throughout the sketch - has a global scope. This means the variable can be accessed anywhere in the sketch.</p><p><strong>Example</strong></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> led_counter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">     // this is a global variable</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> led_counter</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">          // with no initial value</span></span>
<span class="line"><span style="color:#FFCB6B;">Servo</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myservo</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">servo_pin</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;"> // this is a global object</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><p>This is a section that may or not be in the sketch. Usual coding practice is to have any functions that are used in the sketch located here.</p><p>These functions may be simple or complex.</p><p><strong>Example</strong></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">blickLED</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">digitalWrite</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">led_pin</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> HIGH</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">delay</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">digitalWrite</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">led_pin</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> LOW</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">delay</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>In the program, you would call this function with</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">blinkLED</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Serial</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">9600</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This is a special function that runs once when the Arduino starts.</p><p>Here, we place commands to start devices and or libraries.</p><p>Setup serial ports basically anything that needs to be done ONCE when the Arduino starts</p><p><strong>Example</strong></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    Serial</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">9600</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">       // start serial port</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">pinMode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">led_pin</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> OUTPUT</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;"> // set led pin to output</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">pinMode</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> INPUT</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">        // set switch pin to input</span></span>
<span class="line"><span style="color:#A6ACCD;">    servo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">attach</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">servo_pin</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  // attach servo to servo pin</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="loop" tabindex="-1">Loop <a class="header-anchor" href="#loop" aria-hidden="true">#</a></h2><p>This is the section that runs all the time after setup.</p><p>Once setup has run, loop runs continuously. This is where your main code will be.</p><p><strong>Example</strong></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">loop</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> switchstate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">digitalRead</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;"> // read switch state</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">switchstate </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> HIGH</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">digitalWrite</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> HIGH</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">         // turn on LED</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">digitalWrite</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> LOW</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">          // turn off LED</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">digitalWrite</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> LOW</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">          // turn off LED</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>In this lesson on combining sketches, we will be using two sketches from the examples for two libraries.</p><p>One from LiquidCrytstal Library</p><p><img src="`+l+'" alt="image"></p><p>The other from Adafruit DHT Sensor Library</p><p><img src="'+p+'" alt="image"></p><p>This is the first file DHT_Unified_Sensor</p><p><img src="'+t+'" alt="image"></p><p>This is the second file Hello World</p><p><img src="'+o+'" alt="image"></p><p>These files are accessible via the file, examples menu as shown – <strong>AFTER you load the libraries using the library manager</strong></p><p>Here are the two files side by side. With the IDE you can open two files and set them up, side by side. Basically open the IDE twice.</p><p><img src="'+i+'" alt="image"></p><p>in each file there is a large comments block. To tidy up, we will remove them. This is optional.</p><p>This gives us the two files – in a form that is a little easier to work on</p><p><img src="'+c+'" alt="image"></p><p>First up, we copy the library load section</p><p><img src="'+r+'" alt="image"></p><p>This is the section copied from right file to left file</p><p><img src="'+d+'" alt="image"></p><p>The next section is the Definition Section</p><p>In these particular files, there are definitions in one file. We copy from the right side to the left side sketch. Checking that there are no definitions with the same names and or different values.</p><p><img src="'+h+'" alt="image"></p><p>This is the section copied from right file to left file</p><p><img src="'+m+'" alt="image"></p><p>Next is the Global Variables Section</p><p><img src="'+y+'" alt="image"></p><p>Copy the variables and library initializer values Again checking that there are no variables with the same names and or different values.</p><p>This is the section copied from right file to left file</p><p><img src="'+u+'" alt="image"></p><p>Next section is the Setup</p><p><img src="'+A+'" alt="image"></p><p>NOTE: The contents of the Setup as copied but NOT the</p><p><img src="'+b+'" alt="image"></p><p>Or the</p><p><img src="'+F+'" alt="image"></p><p>at the end.</p><p>This is the section copied from right file to left file</p><p><img src="'+g+'" alt="image"></p><p>Next is the loop</p><p><img src="'+D+`" alt="image"></p><div class="warning custom-block"><p class="custom-block-title">Pay Attention</p><p>The contents of the loop are copied but <strong>NOT</strong> the <code>void loop()</code></p></div><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">loop</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Or the ending bracket</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+C+'" alt="image"></p><p>The two sketches are combined.</p><p>If you now run verify, the sketch on the left should be able to verify</p><p><img src="'+f+'" alt="image"></p><p><img src="'+v+'" alt="image"></p><p>This combined sketch is complete except for changing the code to use both sketches features</p><p><img src="'+k+'" alt="image"></p><p>In this case, using the LCD to display the temperature and humidity readings</p>',106),T=[_];function E(S,x,O,L,I,R){return e(),a("div",null,T)}const N=s(w,[["render",E]]);export{B as __pageData,N as default};