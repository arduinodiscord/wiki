import{_ as e,o as s,c as a,h as n}from"./app.63be2f21.js";const u=JSON.parse('{"title":"Pages","description":"","frontmatter":{},"headers":[{"level":2,"title":"Adding a Page","slug":"adding-a-page","link":"#adding-a-page","children":[{"level":3,"title":"Sub-directories","slug":"sub-directories","link":"#sub-directories","children":[]},{"level":3,"title":"Adding a Page to the Sidebar","slug":"adding-a-page-to-the-sidebar","link":"#adding-a-page-to-the-sidebar","children":[]},{"level":3,"title":"Title Style","slug":"title-style","link":"#title-style","children":[]}]},{"level":2,"title":"Editing a Page","slug":"editing-a-page","link":"#editing-a-page","children":[]}],"relativePath":"contributing/pages.md","lastUpdated":1676209151000}'),o={name:"contributing/pages.md"},l=n(`<h1 class="text-[#e67e22]" id="pages" tabindex="-1">Pages <a class="header-anchor" href="#pages" aria-hidden="true">#</a></h1><p>This section will cover how to add or edit pages on the wiki.</p><p>Please use the <code>Github Markdown</code> flavour for your Markdown files.</p><p>Please look at other pages to see how they are formatted, and for examples of how to use Markdown.</p><h2 id="adding-a-page" tabindex="-1">Adding a Page <a class="header-anchor" href="#adding-a-page" aria-hidden="true">#</a></h2><p>To add a page, you will need to create a new Markdown file in the <code>vitepress/docs/src/pages</code> folder. The file name will be the URL of the page. For example, if you create a file called <code>my_page.md</code>, the URL will be <code>https://wiki.arduinodiscord.com/my_page</code>.</p><h3 id="sub-directories" tabindex="-1">Sub-directories <a class="header-anchor" href="#sub-directories" aria-hidden="true">#</a></h3><p>You can also create sub-directories in the <code>vitepress/docs/src/pages</code> folder. For example, if you create a file called <code>my_page.md</code> in a folder called <code>my_folder</code>, the URL will be <code>https://wiki.arduinodiscord.com/my_folder/my_page</code>.</p><p>This is useful for organizing pages into categories.</p><h3 id="adding-a-page-to-the-sidebar" tabindex="-1">Adding a Page to the Sidebar <a class="header-anchor" href="#adding-a-page-to-the-sidebar" aria-hidden="true">#</a></h3><p>To add a page to the sidebar, you will need to add the page to the <code>vitepress/docs/src/custom/theme/index.js</code> file.</p><p>To do this, you will need to add the page to the <code>sidebar</code> object.</p><p>For example, if you want to add a page called <code>my_page.md</code> to the sidebar, you will need to add the following to the <code>sidebar</code> object:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Getting Started</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// The category that will appear in the sidebar</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">collapsible</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Whether or not the category can be collapsed</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">items</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [ </span><span style="color:#676E95;font-style:italic;">// The pages in the category</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Introduction</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> link</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/gettingStarted/basicsOfProgramming</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Buyers Guide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> link</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/gettingStarted/arduinobuyersguide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My Page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> link</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/my_page/my_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Add this line - subdir then file</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="info custom-block"><p class="custom-block-title">Note</p><p>The <code>link</code> property does not require a file extension. Please do not add it.</p></div><h3 class="text-[#e67e22]" id="title-style" tabindex="-1">Title Style <a class="header-anchor" href="#title-style" aria-hidden="true">#</a></h3><p>The title style is the style of the title that appears at the top of the page.</p><p>We like to keep this cohesive, so please use the following style:</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">My Page {.text-</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">#e67e22</span><span style="color:#89DDFF;">]</span><span style="color:#FFCB6B;"> }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This will give the title a nice orange colour.</p><p>The <code>{}</code> are required, and the <code>.text-[#e67e22]</code> is the colour using <code>TailWindCSS</code> classes. You can change this to any colour you like, but please keep it consistent with the rest of the site.</p><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>This entire site supports <code>TailWindCSS</code> classes. You can find the documentation <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">here</a>.</p><p>All classes you wish to add, must be prefaced with a <code>.</code> when inside of the <code>{}</code>.</p><p>When using classes on <code>HTML</code> elements, you can use the <code>class</code> attribute. For example:</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-[#e67e22]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">My Page</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="editing-a-page" tabindex="-1">Editing a Page <a class="header-anchor" href="#editing-a-page" aria-hidden="true">#</a></h2><p>To edit a page, you will need to edit the Markdown file in the <code>vitepress/docs/src/pages</code> folder.</p>`,24),t=[l];function p(r,c,i,d,y,F){return s(),a("div",null,t)}const g=e(o,[["render",p]]);export{u as __pageData,g as default};
