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
          `<li class="news-item">
          <a href="#">
            <div class="gameImg f-fr">
              <img src="http://temp.im/160x140" class="">
            </div>
            <div class="con f-fl">
              <div class="f-fl">
                <p>只要998，吕布貂蝉带回家-《御天传奇》良心福利攻略&nbsp;&nbsp;<span class="strategyFlag">攻略</span></p>
                <span class="date">2017.4.22</span>
              </div>
            </div>
          </a>
        </li>`;
        html = html + html + html + html + html;
        $(".g-gameList .cur-ul").append(html)
          index++;
      }

  })
});
