function showCommentOthers(event) {
  // 获取当前点击的ul
  var AncestorList = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
  AncestorList.classList.add('comment-current');
  //获取节点
  var CurrentCommentOthersArea = document.querySelector('.comment-current .comment-other-textarea');
  var CurrentInput = document.querySelector('.comment-current .comment-other-textarea textarea');
  var CurrentButton = document.querySelector('.comment-current .comment-other-textarea button');
  var responseToPerson = document.querySelector('.comment-current .commentAuthor').innerHTML;
  // 改变部分样式并展示出来。
  CurrentInput.value = `回复${responseToPerson}：`;
  function ButtonEvent(event) {
    //重置类名和样式。
    CurrentInput.value = '';
    CurrentCommentOthersArea.style.display = 'none';
    AncestorList.classList.remove('comment-current');
    var hasPadding = document.querySelector('.padding-division');
    // 提交的时候移除监听。
    CurrentButton.removeEventListener('touchend', ButtonEvent);
    window.removeEventListener('touchend', hideCommentOthers);
  }
  // 对butto进行监听。
  CurrentButton.addEventListener('touchend',ButtonEvent);
  // 显示评论区域。
  CurrentCommentOthersArea.style.display = 'block';
  // 这个函数用于，点击屏幕其他部分的时候，将评论取隐藏。
  function hideCommentOthers(event) {
    var target = event.target;
    // 确认点击的对象是什么
    if(event.target !== CurrentInput && event.target !== CurrentButton) {
      // console.log('remove');
      // 重置类名和样式。
      CurrentInput.value = '';
      CurrentCommentOthersArea.style.display = 'none';
      AncestorList.classList.remove('comment-current');
      // 移除监听。
      CurrentButton.removeEventListener('touchend', ButtonEvent);
      window.removeEventListener('touchend', hideCommentOthers);

    }
  }
  // 异步加入监听，监听window对象，如果点击的不是评论框或者button则移除dom节点，并移除
  // 监听。
  setTimeout(function () {
    // console.log('add');
    // useCapture设置为ture，否则会冒泡截断执行事件，导致window事件后后触发，会消除样式。
    window.addEventListener('touchend', hideCommentOthers,true);
  })
}
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
            `<li class="item">
              <div class="item-box">
                <span class="gameImg fifty_radius f-fl">
                  <%- img(100, 100) %>
                </span>
                <span class="con">
                  <div class="">
                    <p class="commentAuthor">DEMO</p>
                    <p class="commentContent">只要998，吕布貂蝉带回家-御天传奇良心福利攻略dddddddddd</p>
                    <div class="other-comment">
                      <div class="other-comment-item">
                        <span class="other-comment-author">@Jack Spaluo：</span>
                        <span class="ohter-comment-content">这游戏有毒哇</span>
                      </div>
                    </div>
                    <div class="date-text">
                      <span class="date">2017.4.22</span>
                      <i class="icon icon-pinglun" onclick="showCommentOthers(event)"></i>
                    </div>
                  </div>
                </span>
              </div>
              <div class="comment-other-textarea">
                <textarea name="name" ></textarea>
                <button type="button" name="confirm">提交</button>
              </div>
            </li>`;
          html = html + html + html + html + html;
          $(".commentList").append(html);
          index++;
        }

    })

    var num = $("#detail-game_intro_swiper .m-swiper-slide").length;
    var width = $("#detail-game_intro_swiper .m-swiper-slide").outerWidth(true);

    $("#detail-game_intro_swiper").width(width * num)
  })
