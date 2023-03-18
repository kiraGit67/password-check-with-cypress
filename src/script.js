"use strict";

function arePasswordsEqual(pw1, pw2) {
  return pw1 === pw2;
}

const pwInput1 = document.querySelector("#password1");
const pwInput2 = document.querySelector("#password2");
const checkBtn = document.querySelector("#checkButton");
const check = document.querySelector("#check");

function checkPasswords() {
  const checkResult = arePasswordsEqual(pwInput1.value, pwInput2.value);

  if (checkResult) {
    check.innerText = " ✅ ";
  } else {
    check.innerText = " ❌ ";
  }
}

checkBtn.addEventListener("click", checkPasswords);
