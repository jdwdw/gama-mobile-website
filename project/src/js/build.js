// js here

// 全局错误提示
function errorElement(connect){
  var html='<div class="error" id="error"><div class="error-button f-fl"><img src="../img/error.png" alt=""></div><div class="error-connect" id="error-connect">'+connect+'</div></div>';
  $("body").append(html);

  setTimeout(function(){
      $("#error").remove();
  },1500)
}

$(function(){
  //tab切换组件
  $("#j-tab_box .tab_title>li").click(function(){
    console.log("tab click");
    var index=$(this).index();
    $(this).addClass("cur").siblings("li").removeClass("cur");
    $("#j-tab_box .tab_con>li").hide().eq(index).show();
  })

  // 登录页面--记住密码
  $(".rememberPassWord").click(function(){
    $(".rememberPassWord .radio").toggleClass("changbackground");
      $(".rememberPassWord .radio").val(!$(".rememberPassWord .radio").val())
  })

  // 登录操作
  $("#j-login_btn").click(function(){
    if($(this).hasClass("no")){
      errorElement("请输入账户密码");
    }
    var name =$("#userName").val();
    var passWord =$("#passWord").val();
    // 发送数据
  });

  //登录页面 输入中.....
  $(".login-message input").bind('input propertychange',function(){
    var name =$("#userName").val();
    var passWord =$("#passWord").val();
    if(name!="" && passWord!=""){
        $("#j-login_btn").removeClass("no")
    }else{
        $("#j-login_btn").addClass("no")
    }
  })

  //注册页面，切换性别;


})
