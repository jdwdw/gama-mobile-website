'use strict'
var signature = document.querySelector(".signature-button span");
signature.onclick = function () {
  this.innerHTML = "已签到";
  this.style.backgroundColor = "#CCCCCC";
}
// var modifyPersonalMessage = document.querySelector(".head-and-tool-head");
// // modifyPersonalMessage.onclick = function () {
// //   var url = this.dataset.url;
// //   console.log(url);
// //   window.location.href=url;
// // }
// function jump(htmlTarget) {
//   htmlTarget.onclick = function () {
//     var url = this.dataset.url;
//     console.log(url);
//     window.location.href=url;
//   }
// }
// jump(modifyPersonalMessage);
// var toolItem = document.querySelectorAll(".tool-item");
// for (let i = 0; i < toolItem.length; i++) {
//   jump(toolItem[i]);
// }
// var message_password_consult_item = document.querySelectorAll('.message-password-consult-item');
// for (let i = 0; i < message_password_consult_item.length; i++) {
//   jump(message_password_consult_item[i]);
// }
