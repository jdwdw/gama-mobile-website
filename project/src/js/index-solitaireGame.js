'use strict';
$(function() {
  $(window).scroll(function() {
    console.log("scroll");
    var $this = $(this),
      viewH = $(window).height(), //可见高度
      contentH = $("body").get(0).scrollHeight, //内容高度
      scrollTop = $(window).scrollTop(); //滚动高度
      if($(".g-gameClassifyTable")[0].parentNode.style.display!=="none"){
        console.log("ssssss");
        return;
      }
      if (scrollTop / (contentH - viewH) >= 0.95 ) { //到达底部100px时,加载新内容

        // 这里加载数据.. 下边模拟数据加载
        console.log("这里加载数据");
        var html =
          `<li class="game_item">
            <a href="#">
              <div class="gameImg f-fl fifteen_radius">
                <%- img(120, 120) %>
              </div>
              <div class="con f-fl">
                <div class="content f-fl">
                  <p>保卫萝卜2</p>
                  <div class="star">
                    <% for(var index = 0; index < 4; index++) {%>
                      <i class="icon iconActive icon-score1"></i>
                    <% } %>
                    <i class="icon icon-score1"></i>
                  </div>
                  <span class="margin-right30">策略类</span><span>人气:&nbsp;230116</span>
                </div>
              </div>
              <div class="item-handle f-fr">
                <a href="#" class="item-btn">开始</a>
              </div>
            </a>
          </li>`;
        html = html + html + html + html + html;
        $(".g-gameList .cur-ul").append(html)
      }

  })
})
