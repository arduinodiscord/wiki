import{_ as t,o as a,c as l,h as e,g as s,b as n}from"./app.3a69f471.js";const o="/assets/button-1B.3390da0a.png",r="/assets/button-1C.42692966.png",i="/assets/button-1D.1ae54282.png",p="/assets/button-1E.fd3691b9.png",c="/assets/buttonSchmatic.06ba8f7e.png",u="/assets/button-A.b8a13430.png",E=JSON.parse('{"title":"Basic Guide To Buttons","description":"","frontmatter":{},"headers":[{"level":2,"title":"Button Basics 🔲","slug":"button-basics-🔲","link":"#button-basics-🔲","children":[]},{"level":2,"title":"When we use a button with a micro-controller, there are a few challenges to deal with. First is wiring","slug":"when-we-use-a-button-with-a-micro-controller-there-are-a-few-challenges-to-deal-with-first-is-wiring","link":"#when-we-use-a-button-with-a-micro-controller-there-are-a-few-challenges-to-deal-with-first-is-wiring","children":[{"level":3,"title":"The wiring for a button will be:","slug":"the-wiring-for-a-button-will-be","link":"#the-wiring-for-a-button-will-be","children":[]}]},{"level":2,"title":"CODE","slug":"code","link":"#code","children":[]},{"level":2,"title":"WARNING⚠️","slug":"warning⚠️","link":"#warning⚠️","children":[]}],"relativePath":"hardwareGuides/buttons.md","lastUpdated":1675952674000}'),h={name:"hardwareGuides/buttons.md"},d=e('<h1 class="text-[#e67e22]" id="basic-guide-to-buttons" tabindex="-1">Basic Guide To Buttons <a class="header-anchor" href="#basic-guide-to-buttons" aria-hidden="true">#</a></h1><h2 id="button-basics-🔲" tabindex="-1">Button Basics 🔲 <a class="header-anchor" href="#button-basics-🔲" aria-hidden="true">#</a></h2><p>In its basic form, a button is no more than a wire with a break in it.  A standard button will be &quot;open&quot; until you press the button. At that point, the two parts of the button make contact, and the button is said to be &quot;closed&quot;.</p><p>Using a button in this manner is called &quot;commonly open&quot;. This means that when the button is NOT pressed, there is no connection from one side to the other.</p><h2 id="when-we-use-a-button-with-a-micro-controller-there-are-a-few-challenges-to-deal-with-first-is-wiring" tabindex="-1">When we use a button with a micro-controller, there are a few challenges to deal with. First is wiring <a class="header-anchor" href="#when-we-use-a-button-with-a-micro-controller-there-are-a-few-challenges-to-deal-with-first-is-wiring" aria-hidden="true">#</a></h2><h3 id="the-wiring-for-a-button-will-be" tabindex="-1"><em>The wiring for a button will be:</em> <a class="header-anchor" href="#the-wiring-for-a-button-will-be" aria-hidden="true">#</a></h3>',6),b=s("ul",null,[s("li",null,[n("Side-A of the button will be connected to the Arduino pin. "),s("ul",null,[s("li",null,[s("strong",null,"EXAMPLE A")])])]),s("li",{depending:"",on:"",the:"",Arduino:"",you:"",are:"","using.":""},[n("Side-B of the button will be connected to VCC, or 5v/3.3v "),s("ul",null,[s("li",null,[s("strong",null,"EXAMPLE B")])])]),s("li",null,[n("Side-A will also be connected to a resistor. The resistor value will be between 1K and 10K. Any value in between will work. "),s("ul",null,[s("li",null,[s("strong",null,"EXAMPLE C")])])]),s("li",null,[n("The other side of the resistor will then be connected to GND. "),s("ul",null,[s("li",null,[s("strong",null,"EXAMPLE D")])])])],-1),y=e('<p>Using this wiring, the resistor is said to be a &quot;pull-down&quot; resistor. This simply means that the resistor is pulling the Arduino pin to GND when the button is NOT pressed.</p><table><thead><tr><th style="text-align:center;">EXAMPLE A</th><th style="text-align:center;">EXAMPLE B</th><th style="text-align:center;">EXAMPLE C</th><th>EXAMPLE D</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+o+'" alt="button" title="example of wiring side A"></td><td style="text-align:center;"><img src="'+r+'" alt="button" title="example of wiring on button side B"></td><td style="text-align:center;"><img src="'+i+'" alt="button" title="Example of wiring resistor side A"></td><td><img src="'+p+`" alt="button" title=" final wiring of gnd wire to resistor"></td></tr></tbody></table><p>When you first start working with buttons, it is best to select 2 pins that are diagonal from each other. Until you understand how a button is orientated, this is the easiest way of making sure you wire the button correctly. There is some test code that will test if you have the button wired correctly, and that it is functioning.</p><h2 id="code" tabindex="-1">CODE <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// the button is connected to pin seven so thats what the below line does.</span></span>
<span class="line"><span style="color:#A6ACCD;">byte buttonPin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setup</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    Serial</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">9600</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">pinMode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">buttonPin</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> INPUT</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">loop</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">digitalRead</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">buttonPin</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">state </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> HIGH</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">Serial</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> Button is pressed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">Serial</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> Button is NOT pressed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>If your serial monitor does NOT respond correctly, you most likely have a wiring problem. Check the wiring to make sure it is like the examples above. If you&#39;re getting random readings despite not touching the button, it&#39;s most likely due to a wiring problem.</p><hr><h2 id="warning⚠️" tabindex="-1"><strong>WARNING</strong>⚠️ <a class="header-anchor" href="#warning⚠️" aria-hidden="true">#</a></h2><p>If the led&#39;s on the Arduino board turns OFF every time you press the button, OR if when you CONNECT the button, you have a short, do not operate the Arduino in this case.  Pull all of the wires from the Arduino so no wires are connected to it other than the USB. If the led lights up again, then you  need to rewire the button over again.</p><p>If you look at a diagram, a button is shown by a broken line. If you look at the image below, you can see what the same wiring diagram looks like in a SCHEMATIC example.</p><p><img src="`+c+'" alt="Schematic of a button" title="schematic of a button"></p><hr><p><img src="'+u+'" alt="example of button sides" title="example of the sides of a button"></p>',13),D=[d,b,y];function A(C,w,g,F,m,f){return a(),l("div",null,D)}const T=t(h,[["render",A]]);export{E as __pageData,T as default};
