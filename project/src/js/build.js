// js here
let name = 'ES2015';
let output = `${name} test`;

console.log(output);

$(function(){
  //tab切换组件
  $("#j-tab_box .tab_title>li").click(function(){
    console.log("tab click");
    var index=$(this).index();
    $(this).addClass("cur").siblings("li").removeClass("cur");
    $("#j-tab_box .tab_con>li").hide().eq(index).show();
  })
})
