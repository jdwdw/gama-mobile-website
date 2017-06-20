// js here

// 全局错误提示
function errorElement(connect){
  var html='<div class="error" id="error"><div class="error-button f-fl"><img src="../img/error.png" alt=""></div><div class="error-connect" id="error-connect">'+connect+'</div></div>';
  $("body").append(html);

  setTimeout(function(){
      $("#error").remove();
  },1500)
}


//倒计时
function time(o) {
  clearTimeout(t)
  if (wait == 0) {
    o.innerHTML = "重新发送";
    $("#j-verify_bt").removeClass("no")
  } else {
    o.innerHTML = "" + wait + "s后重发";
    wait--;
    var t = setTimeout(function() {
      time(o)
    }, 1000);
  }
}

$(function(){
  // 验证码点击
  $("#j-verification").click(function(){
    console.log("触发获取验证码按钮");
    if($(this).hasClass("no")){
      errorElement("请输入手机号码");
    }else{
      var tel=$("#j-userName").val();
      console.log(tel);
      //ajax 发送验证码
    }

  })





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
      return false;
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
 $(".sex").click(function(){
   var index=$(this).index();
   $(this).addClass("cur").siblings(".sex").removeClass("cur");
   $("#j-sex").val(index);
   console.log($("#j-sex").val());
 })

})
