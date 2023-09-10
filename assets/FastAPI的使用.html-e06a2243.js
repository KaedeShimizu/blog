import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,b as s,d as n,a as c,e as a}from"./app-21d4bb55.js";const l={},u=a(`<p>用官网的话说：</p><p>FastAPI 是一个用于构建 API 的现代、快速（高性能）的 web 框架，使用 Python 3.6+ 并基于标准的 Python 类型提示。</p><p>简单说的话其实就是一个Python中用来实现API接口的简单框架，非常好用。下面我会列举一些实例，同时也是使用FastAPI必须要学会的一些东西。（这里使用官网教程的名称，但是内容我做了进一步修改）</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><h3 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h3><p>当然，使用之前你需要安装FastAPI这个库，直接使用<code>pip install fastapi</code>即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 首先，导入fastAPI</span>
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
 
<span class="token comment"># 创建app实例</span>
<span class="token comment"># uvicorn main:app --reload 在运行的时候这个实例也被调用</span>
<span class="token comment"># 这里的app可以是其他的东西，但是必须运行是写 main:xxx(其他内容)</span>
app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># 定义一个路径操作器，如果你直接访问网址会执行下面的代码</span>
<span class="token comment"># 这里的意思是访问路径为/，操作为get请求</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 这里使用了async函数，当然也可以使用普通函数，区别不大</span>
    <span class="token comment"># 如果不会用的话就用正常函数就行</span>
    
    <span class="token comment"># 可以返回各种各样的东西</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写完这段代码并保存为<code>main.py</code>，然后就可以在控制台中使用<code>uvicorn main:app --reload</code>运行啦，点击控制台给出的链接即可进行跳转。</p><p>运行起来以后，你可以打开这个链接<code>http://127.0.0.1:8000/docs</code>，可视化的调用你的API接口，非常方便。</p><h3 id="路径参数" tabindex="-1"><a class="header-anchor" href="#路径参数" aria-hidden="true">#</a> 路径参数</h3><p>举个例子吧，我现在的uid是10，我现在要获取我的密码，那么我可以访问<code>https://www.xxx.com/10/password</code>，相对应的，uid可以是其他的内容，那么我就可以通过变量来获取uid，从而引导到正确的password。直接看案例吧，不然说的也看不懂~</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
 
app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
 
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello World&quot;</span>
 
 
<span class="token comment"># 路径参数，大概就是你可以传入一些参数</span>
<span class="token comment"># 比如这里可以让你传入一些内容</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/{item_id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">kaedeItem</span><span class="token punctuation">(</span>item_id<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 然后直接在这里返回传入的内容 当然，函数也需要有这个参数，不然传不进来</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;item_id&quot;</span><span class="token punctuation">:</span> item_id<span class="token punctuation">}</span>
 
 
<span class="token comment"># 当然，也可以对传入的变量进行类型注释</span>
<span class="token comment"># 一旦进行类型注释，那么输入后的内容会自动进行格式转换</span>
<span class="token comment"># 如果你又返回了传入的内容，那么返回的不会是一个字符串，而是目标类型</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/number/{number}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">getANumber</span><span class="token punctuation">(</span>number<span class="token punctuation">:</span> <span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;The number is </span><span class="token interpolation"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询参数" tabindex="-1"><a class="header-anchor" href="#查询参数" aria-hidden="true">#</a> 查询参数</h3>`,13),d={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},r=s("code",null,"size = 10, num = 20",-1),k=s("code",null,"http://localhost:8080?size=10&num=20",-1),m=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Union
 
app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># 给一个模拟的数据库</span>
fake_items_db <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;item_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;item_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bar&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;item_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Baz&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
 
<span class="token comment"># 其实就是类似于下面这种问号的参数</span>
<span class="token comment"># http://127.0.0.1:8000/items/?skip=0&amp;limit=10</span>
 
 
<span class="token comment"># 声明不属于路径参数的其他函数参数时，它们将被自动解释为&quot;查询字符串&quot;参数</span>
<span class="token comment"># 比如下面的路径中没有skip和limit</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/items/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">read_items</span><span class="token punctuation">(</span>skip<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> limit<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 返回从第skip个到skip+limit的所有列表元素</span>
    <span class="token comment"># 如果直接访问items/那么也一样，因为这里给定了默认值</span>
    <span class="token keyword">return</span> fake_items_db<span class="token punctuation">[</span>skip <span class="token punctuation">:</span> skip <span class="token operator">+</span> limit<span class="token punctuation">]</span>
 
 
<span class="token comment"># 可选参数</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/kxcs/{item_id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">kxcs</span><span class="token punctuation">(</span>item_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> q<span class="token punctuation">:</span> Union<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 上面声明的q是一个可选参数，默认为None值</span>
    <span class="token comment"># 如果q不是None的话就可以执行下面if里面的语句</span>
    <span class="token keyword">if</span> q<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;Item id&quot;</span><span class="token punctuation">:</span> item_id<span class="token punctuation">,</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span> q<span class="token punctuation">}</span>
    <span class="token comment"># 没有q那就执行没有q的</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;Item id&quot;</span><span class="token punctuation">:</span> item_id<span class="token punctuation">}</span>
 
 
<span class="token comment"># 其实q也是一个查询参数而已啦，只是这里默认值为None了</span>
 
 
<span class="token comment"># 必须查询参数</span>
<span class="token comment"># 其实简单说就是没有默认值，自然就是默认参数了</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/bixu/{itemID}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">bixu</span><span class="token punctuation">(</span>itemID<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> needy<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;itemID&quot;</span><span class="token punctuation">:</span> itemID<span class="token punctuation">,</span> <span class="token string">&quot;needy&quot;</span><span class="token punctuation">:</span> needy<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>上面的东西掌握了其实已经够啦，至少我的API开发只用到了上面的这些东西。但是呢，学不可以已，如果还想要了解学习更多的关于FastAPI的内容，可以去官网看看，相信你一定能学到更多的东西，开发出来更加实用的程序~</p>`,3);function v(b,h){const t=p("ExternalLinkIcon");return o(),i("div",null,[u,s("p",null,[n("这个就是重点了，因为我们使用API肯定是要加一些条件的，比如我访问"),s("a",d,[n("http://localhost:8080"),c(t)]),n("，我想要返回的内容符合"),r,n("，那么我就可以访问："),k,n("，这个链接后面跟的参数其实就是所谓的路径参数了。下面是演示：")]),m])}const f=e(l,[["render",v],["__file","FastAPI的使用.html.vue"]]);export{f as default};
