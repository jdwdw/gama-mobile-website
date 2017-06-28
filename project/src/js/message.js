'use strict';
function showCommentOthers(event) {
  // 获取当前点击的ul
  const AncestorList = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
  AncestorList.classList.add('comment-current');
  //获取节点
  const CurrentCommentOthersArea = document.querySelector('.comment-current .comment-other-textarea');
  const CurrentInput = document.querySelector('.comment-current .comment-other-textarea textarea');
  const CurrentButton = document.querySelector('.comment-current .comment-other-textarea button');
  const responseToPerson = document.querySelector('.comment-current .commentAuthor').innerHTML;
  // 改变部分样式并展示出来。
  CurrentInput.value = `回复${responseToPerson}：`;
  function ButtonEvent(event) {
    //重置类名和样式。
    CurrentInput.value = '';
    CurrentInput.focus();
    CurrentCommentOthersArea.style.display = 'none';
    AncestorList.classList.remove('comment-current');
    const hasPadding = document.querySelector('.padding-division');
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
    const target = event.target;
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
