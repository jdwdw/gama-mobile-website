'use strict';
 var btn = new Clipboard('.item-btn');
function copyCode(event) {
  console.log(event);
}
$(function() {
  $(window).scroll(function() {
    console.log("scroll");
    var $this = $(this),
      viewH = $(window).height(), //可见高度
      contentH = $("body").get(0).scrollHeight, //内容高度
      scrollTop = $(window).scrollTop(); //滚动高度
      if (scrollTop / (contentH - viewH) >= 0.95 ) { //到达底部100px时,加载新内容

        // 这里加载数据.. 下边模拟数据加载
        console.log("这里加载数据");
        var html =
          `<li class="collect_item">
              <a href="#">
                <div class="gameImg f-fl fifteen_radius">
                  <img src="http://temp.im/120x120" class="">
                </div>
              </a>
              <div class="con f-fl">
                <div class="content f-fl">
                  <p class="name">保卫萝卜2</p>
                  <p class="amount">9999999999fsdfsdfsdfsdfsdfsdfsdfsdfsdfffffefasefasfasefesafaesfe</p>
                  <!-- <input  value="232323232323232" class="hiddeninput" /> -->
                </div>
              </div>
              <div class="item-handle f-fr">
                <div class="item-btn" data-clipboard-text="45454545454545" onclick="copyCode(event)" >复制</div>
              </div>
          </li>`;
        html = html + html + html + html + html;
        $(".g-gameList ul").append(html)
      }

  })
});
