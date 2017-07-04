'use strict'
const male = document.getElementById('male-icon');
const female = document.getElementById('female-icon');
male.onclick = function () {
  const contains = male.classList.contains('active')
  if(!contains) {
    male.classList.add('active');
    female.classList.remove('active_girl');
  }
}
female.onclick = function () {
  const contains = female.classList.contains('active_girl')
  if(!contains) {
    female.classList.add('active_girl');
    male.classList.remove('active');
  }
}
const submit = document.getElementById('confirm-button');
const form = document.querySelector('form');
submit.onclick = function (event) {
  event.preventDefault();
  console.log(form);
}
console.log(submit);
