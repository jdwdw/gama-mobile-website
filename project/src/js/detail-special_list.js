'use strict';
$(function() {
  var index = 0;
  $(window).scroll(function() {
    if(index > 5) {
      return false;
    }
    console.log("scroll");
    var $this = $(this),
      viewH = $(window).height(), //可见高度
      contentH = $("body").get(0).scrollHeight, //内容高度
      scrollTop = $(window).scrollTop(); //滚动高度
      if (scrollTop / (contentH - viewH) >= 0.95 ) { //到达底部100px时,加载新内容

        // 这里加载数据.. 下边模拟数据加载
        console.log("这里加载数据");
        var html =
          `<div class="detailSpecialList-game-collection">
            <a href="#"><img src="http://temp.im/750x240" class="block__img"></a>
          </div>`;
        html = html + html + html + html + html;
        $(".detailSpecialList-game-list-container").append(html);
        index++;
      }

  })
})
