'use strict';
$(function() {
  var index = 0; //控制器
  $(window).scroll(function() {
    if (index > 5) {
      return false
    };
    console.log("scroll");
    var $this = $(this),
      viewH = $(window).height(), //可见高度
      contentH = $("body").get(0).scrollHeight, //内容高度
      scrollTop = $(window).scrollTop(); //滚动高度
      if (scrollTop / (contentH - viewH) >= 0.95 ) { //到达底部100px时,加载新内容

        // 这里加载数据.. 下边模拟数据加载
        console.log("这里加载数据");
        var html =
          `<li class="gift-item">
            <a href="#">
              <div class="gameImg f-fl fifteen_radius">
                <img src="http://temp.im/100x100" class="">
              </div>
              <div class="con f-fl">
                <div class="content f-fl">
                  <p>[保卫萝卜]新手礼包7</p>
                  <div class="progress">
                    <div class="graph"><strong class="graph-bar" style="width:50%;"></strong></div>
                    <span>50%</span>
                </div>
                <div class="date">
                  <span>有效期:2017.05.20-2017.05.31</span>
                </div>
                </div>
              </div>
              <div class="item-handle f-fr">
                <a href="#" class="item-btn f-fr">领取</a>
              </div>
            </a>
          </li>`;
        html = html + html + html + html + html;
        $("#game-active-information").append(html);
        index++;
      }

  })
});
