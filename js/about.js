/*打字效果*/
var subtitle = document.getElementById('article-container')
var i = 0;

function typing() {
    var timer = 0;
    var str = '<h3 id="🏆个人简介"><a href="#🏆个人简介" class="headerlink one-pan-link-mark" title="🏆个人简介"></a>🏆个人简介</h3><p>欢迎来到我的个人博客，我是 <strong><a href="https://home.lete114.now.sh/" target="_blank" rel="noopener" style="color:#ff7242;" class="one-pan-link-mark">Lete 乐特</a></strong> ,<br>一名后端程序员，虽学的是后端，但心在前端，<br>但我前后端依旧很菜，写的一些前后端代码可能很烂，或者有待优化的地方<br>希望大佬能够指出🐵</p><h4 id="🎉更多"><a href="#🎉更多" class="headerlink one-pan-link-mark" title="🎉更多"></a>🎉更多</h4><p>🐵昵称: Lete 乐特<br>👓性别：男♂<br>📷爱好: Java,Minecraft, 动漫，摄影，西方古文化，西方中世纪<br>🎮常玩游戏: Minecraft, 王者荣耀<br>🎥喜欢的电影：科幻类，喜欢普罗米修斯<br>🔮喜欢的动漫：星游记，星辰变，西行记，你的名字，天气之子，千与千寻</p><h3 id="📑博客简介"><a href="#📑博客简介" class="headerlink one-pan-link-mark" title="📑博客简介"></a>📑博客简介</h3><p><a href="https://hexo.io/zh-cn" target="_blank" rel="noopener" class="one-pan-link-mark">Hexo</a> 框架 + <a href="https://github.com/jerryc127/hexo-theme-butterfly" target="_blank" rel="noopener" class="one-pan-link-mark">Butterfly</a> 主题<br>博客中的部分图片源于网络，侵删<br>本博客文章采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener" class="one-pan-link-mark">CC BY-NC-SA 4.0</a> 协议，转载请注明出处</p><h3 id="✔技能学习"><a href="#✔技能学习" class="headerlink one-pan-link-mark" title="✔技能学习"></a>✔技能学习</h3><p>Java<br>C#<br>Linux<br>MySQL<br>SQLServer<br>前端三件套<br>JQuery<br>JSP<br>Spring 套餐 (在学习)<br>MyBatis (在学习)</p>';
    if (i <= str.length) {
        subtitle.innerHTML = str.slice(0, i++)
        timer = setTimeout(typing, 10)

    } else {
        subtitle.innerHTML = str
        clearTimeout(timer)
    }
}
typing()