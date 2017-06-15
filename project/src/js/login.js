




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
  var userName = document.getElementById('userName').value;
  var nextButton= document.getElementById('nextButton');
  var verify=document.getElementById('verify');
  var sureAmend = document.getElementById('sure-amend');
  var sure=document.getElementById('sure');
  var reset = document.getElementById('reset');
  var error = document.getElementById('error');
  var errorConnect = document.getElementById('error-connect');
  var resetIcon = reset.firstElementChild.lastElementChild.lastElementChild;
  if(!userName){
    nextButton.disabled = true;
    nextButton.style.background='#999999';
  }else{
    verify.style.display="none";
    sure.style.display="block";
    reset.style.color ='#e22127';
    resetIcon.style.color ='#e22127';
    sureAmend.addEventListener('click',function(){
      var passWord =  document.getElementById('passWord').value;
      var surePassWord = document.getElementById('sure-passWord').value;
      if(surePassWord != passWord){
        error.style.display = 'block';
        errorConnect.innerHTML = '密码输入不一致!'
      }
    })
  }
}

// 确认修改



// var template += ' <div class="error" id="error">'+
//   '<div class="error-button f-fl ">'+
//     '<img src="../img/error.png" alt="">'+
//   '</div>'+
//   '<div class="error-connect" id="error-connect">'+data.connect+' </div>'+
//  '</div>';

// 注册页面
function save() {
  var stringData = {};
  var userName = document.getElementById('userName').value;
  var passWord =  document.getElementById('passWord').value;
  var surePassWord = document.getElementById('sure-passWord').value;
  var verificationInput = document.getElementById('verificationInput').value;
  var error = document.getElementById('error');
  var errorConnect = document.getElementById('error-connect');
  if(surePassWord != passWord ){
    error.style.display = 'block';
    errorConnect.innerHTML = '密码输入不一致!'
  }
  stringData.userName = userName;
  stringData.passWord = passWord;
  stringData.surePassWord = surePassWord;
  stringData.verificationInput = verificationInput;
  var jsonFormat = JSON.stringify(stringData)
  localStorage.setItem(stringData.userName, stringData.passWord);
  console.log(stringData)
}



// 登录页面
function findItem(){
  var userName = document.getElementById('userName').value;
  var passWord =  document.getElementById('passWord').value;
  var error = document.getElementById('error');
  var errorConnect = document.getElementById('error-connect');
  var finduserName = localStorage.getItem(userName);
  var findpassWord = localStorage.getItem(passWord);
  if(!userName || !passWord || !finduserName || !findpassWord){
    error.style.display = 'block';
    errorConnect.innerHTML = '帐号或密码输入有误!'
  }
}
