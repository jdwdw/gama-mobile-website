'use strict';
// 如有问题，可回滚到6.27版本。
const arrow = document.querySelector("span:nth-child(2)");
const message = document.querySelectorAll(".g-center-message-detail ");
const recharge = document.querySelectorAll(".recharge");
const consume = document.querySelectorAll(".consume");
const selector = document.querySelector(".g-center-message-selector");
const showAll = document.querySelector(".show-all");
const showRecharge = document.querySelector(".show-recharge");
const showConsume = document.querySelector(".show-consume");
const showAllIcon = document.querySelector(".show-all .icon");
const showRechargeIcon = document.querySelector(".show-recharge .icon");
const showConsumeIcon = document.querySelector(".show-consume .icon");
console.log(consume);
arrow.onclick = function () {
  selector.style.display = 'block';
}
const selectorController = {};
selectorController.selected = [];
selectorController.unSelected = [];
selectorController.component = [];
selectorController.change = function(selectedObjcet) {
  console.log(selectedObjcet === showAll);
  // 首先判断本次选择与上次选择是否相同.本次选择与上次选择相同则不做出改变
  const selectedIncludes = this.selected.includes(selectedObjcet);
  if(selectedIncludes) {
    selector.style.display = 'none';
    return true;
  }
  // 判断unSelected里面有没有被点击的object, 如果有则从unSelected里面删除对象。
  const unSelectedindex = this.unSelected.indexOf(selectedObjcet);
  if(unSelectedindex !== -1) {
    this.unSelected.splice(unSelectedindex, 1);
  }
  //将selected中原来的对象删除掉，要判断里面是否为空，空则不做任何动作。
  const selectedLength = this.selected.length;
  let previousSelected;
  if(selectedLength > 0) {
    previousSelected = this.selected.pop();
  }
  // 如果previousSelected为空，则原来为初始化状态，什么也不做，否则
  // 将previousSelected，原来选择的对象push到unSelected里面。
  if(previousSelected) {
    this.unSelected.push(previousSelected);
  }
  //然后将selectedObjcet push到selected里面
  this.selected.push(selectedObjcet);
  // 对选择对象进行分组后，判断selectedObjcet在哪个component里面，进行相应的操作。
  // 现对不包含selectedObjcet的component进行操作。
  for (let componentIndex = 0; componentIndex < this.component.length; componentIndex++) {
    let currentComponent = this.component[componentIndex];
    let component = currentComponent.component;
    let key = currentComponent.key;
    let icon = currentComponent.icon;
    if(key !== selectedObjcet) {
      for (let i = 0; i < component.length; i++) {
           component[i].style.display = "none";
      }
      key.style.color = 'black';
      icon.classList.remove("icon-xuanxiang_pre");
      icon.classList.add("icon-xuanxiang");
    }
  }
  //再对包含selectedObjcet的component进行操作。
  for (let componentIndex = 0; componentIndex < this.component.length; componentIndex++) {
    let currentComponent = this.component[componentIndex];
    let component = currentComponent.component;
    let key = currentComponent.key;
    let icon = currentComponent.icon;
    if(key === selectedObjcet) {
      for (let i = 0; i < component.length; i++) {
           component[i].style.display = "block";
      }
      key.style.color = '#E22127';
      icon.classList.add("icon-xuanxiang_pre");
      icon.classList.remove("icon-xuanxiang");
    }
  }
  // 最后，隐藏选择面板
  selector.style.display = 'none';
}
const AllMessageComponent = {
  component: message,
  key: showAll,
  icon: showAllIcon
};
const RechargeComponent = {
  component: recharge,
  key: showRecharge,
  icon: showRechargeIcon
};
const ConsumeComponent = {
  component: consume,
  key: showConsume,
  icon: showConsumeIcon
};
selectorController.unSelected.push(showAll, showRecharge, showConsume);
selectorController.component.push(AllMessageComponent, RechargeComponent, ConsumeComponent);
// console.log(selectorController.unSelected);
showAll.onclick = function () {
  selectorController.change(this);
}
showRecharge.onclick = function () {
  selectorController.change(this);
}
showConsume.onclick = function () {
  selectorController.change(this);
}
