
 //正则匹配手机号
  var number = /^1\d{10}$/


function loadElement(){
  var userName = document.getElementById('userName').value;
  var passWord =  document.getElementById('passWord').value;
  var surePassWord = document.getElementById('sure-passWord').value;
  var verificationInput = document.getElementById('verificationInput').value;
  var nextButton= document.getElementById('nextButton');
  var verify=document.getElementById('verify');
  var sureAmend = document.getElementById('sure-amend');
  var sure=document.getElementById('sure');
  return {
    userName:userName,
    passWord:passWord,
    surePassWord:surePassWord,
    verificationInput:verificationInput,
    nextButton:nextButton,
    verify:verify,
    sureAmend:sureAmend,
    sure:sure
  }

}
function errorElement(connect){
  var error = document.getElementById('error');
  var errorConnect = document.getElementById('error-connect');
  error.style.display = 'block';
  errorConnect.innerHTML = connect;
}


// 弹窗定时消失
function disappear(){
  setTimeout(function(){
    var error = document.getElementById('error');
    error.style.display = 'none';
  },1500)
}

//验证码倒计时
function time() {
  var wait= 60;
  var verification=document.getElementById('verification');
  if (wait == 0) {
    verification.setAttribute("disabled", false);
    verification.value="获取验证码";
    verification.style.background = "#e22127"
     wait= 60;
  } else {
  verification.setAttribute("disabled", true);
  verification.value="重新发送(" + wait + ")";
  verification.style.background = "#cccccc"
  wait--;
  setTimeout(function() {
   time(verification)
  },
  1000)
  }
}





// 找回密码点击下一步
function next(){
  var result=loadElement();
  var stringData = {};
  var reset = document.getElementById('reset');
  var resetIcon = reset.firstElementChild.lastElementChild.lastElementChild;
  if(!result.userName || !result.verificationInput){
    result.nextButton.disabled = true;
    result.nextButton.style.background='#999999';
    setTimeout(function(){
        document.getElementById('userName').addEventListener('input',function(event){
          result.nextButton.disabled = false;
          result.nextButton.style.background='#e22127';
        })
    },500)

  }else{
    if(number.test(result.userName)){
      result.verify.style.display="none";
      result.sure.style.display="block";
      reset.style.color ='#e22127';
      resetIcon.style.color ='#e22127';
      result.sureAmend.addEventListener('click',function(){
         result=loadElement();
        if(result.surePassWord != result.passWord){
          errorElement('密码输入不一致!')
        }else{
          stringData.surePassWord=result.surePassWord ;
          stringData.passWord=result.passWord ;
          var jsonFormat = JSON.stringify(stringData);
          localStorage.setItem(stringData.surePassWord, stringData.passWord);
          console.log(stringData);
        }
      })
    }else {
      errorElement('输入手机号格式不对!');
    }
  }
}




// var template += ' <div class="error" id="error">'+
//   '<div class="error-button f-fl ">'+
//     '<img src="../img/error.png" alt="">'+
//   '</div>'+
//   '<div class="error-connect" id="error-connect">'+data.connect+' </div>'+
//  '</div>';

// 注册页面
function save() {
  var stringData = {};
  var result=loadElement();
  if(result.passWord != result.surePassWord  ){
      errorElement('密码输入不一致');
  }
  stringData.userName = result.userName;
  stringData.passWord = result.passWord;
  stringData.surePassWord = result.surePassWord;
  stringData.verificationInput = result.verificationInput;
  var jsonFormat = JSON.stringify(stringData);
  localStorage.setItem(stringData.userName, stringData.passWord);
  console.log(stringData)
}



// 登录页面
function findItem(){
  var result = loadElement();
  var finduserName = localStorage.getItem(result.userName);
  var findpassWord = localStorage.getItem(result.passWord);
  if(!result.userName || !result.passWord || !finduserName || !findpassWord){
    errorElement('帐号或密码输入有误!');
    // disappear();
  }
}
