import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,b as n,d as s,a as l,e as i}from"./app-21d4bb55.js";const c="/assets/1-1694333766936-99-31f10e97.png",u="/assets/2-1694333775226-101-9bec4574.png",r={},k=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),d=n("p",null,"VuePress，是一个非常好用的静态网页生成器，经常被用于创建API，程序之类的使用文档。",-1),v={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},m=i('<figure><img src="'+c+`" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure><p>在这里我不介绍怎么具体使用这个东西，比如安装之类的事情，因为这些事情已经在<code>官网</code>介绍了，我在这里主要是介绍一些其他的内容~</p><h2 id="更加完善的config-js" tabindex="-1"><a class="header-anchor" href="#更加完善的config-js" aria-hidden="true">#</a> 更加完善的config.js</h2><p>官网给的貌似不是那么完整，于是我写了一个相对于比较完整的js文件，下面就是代码啦~直接复制就好</p><p>如果遇到不明白的，看注释就可以了~</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> backToTopPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-back-to-top&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> nprogressPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-nprogress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Suzumi&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;Suzumi随机图片的API文档~&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;/images/fav.jpg&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">colorMode</span><span class="token operator">:</span> <span class="token string">&quot;dark&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 关闭开关</span>
    <span class="token literal-property property">colorModeSwitch</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置首页路径</span>
    <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 导航栏</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;使用方法&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/method/&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;关于&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/about/&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 侧边栏</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/about/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;关于&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;/about/about.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/about/feed.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/about/local.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/about/online.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/about/note.md&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;/method/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;使用方法&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;/method/quickstart.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/method/args.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/method/request_address.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/method/request_way.md&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/method/return.md&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">backToTopPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">nprogressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主页模板" tabindex="-1"><a class="header-anchor" href="#主页模板" aria-hidden="true">#</a> 主页模板</h2><p>适用于<code>V2.0</code>版本哦！别搞错了~</p><p>这个主页制作了一个非常简单的页面，比如下面这样子：</p><figure><img src="`+u+`" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure><p>好啦，直接上代码吧~，这段代码应当放在docs目录下面的<code>README.md</code>中哦</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 快速上手
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /method/quickstart.md
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 项目简介
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /about/about.md
    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 访问快
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 使用FastAPI进行开发，访问速度极快
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 占用资源极小
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 多数据
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 拥有多达十万张图片的数据库！
<span class="token key atrule">footer</span><span class="token punctuation">:</span> Be Kaede <span class="token punctuation">|</span> Copyright © 2023</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(y,g){const a=p("ExternalLinkIcon");return e(),o("div",null,[k,d,n("p",null,[s("可以"),n("a",v,[s("点此"),l(a)]),s("去2.0官网看看哦~，下面是官网的图片")]),m])}const f=t(r,[["render",b],["__file","VuePress使用笔记.html.vue"]]);export{f as default};
