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
          `<li class="game_item">
            <a href="#">
              <div class="gameImg f-fl fifteen_radius">
                <img src="http://temp.im/120x120" class="">
              </div>
              <div class="con f-fl">
                <div class="content f-fl">
                  <p>保卫萝卜2</p>
                  <div class="star">
                    <i class="icon icon-score1"></i>
                    <i class="icon icon-score1"></i>
                    <i class="icon icon-score1"></i>
                    <i class="icon icon-score1"></i>
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
        $("#special_detail_information").append(html);
        index++;
      }

  })
});
