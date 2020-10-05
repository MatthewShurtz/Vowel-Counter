const clearBtn = document.getElementById("clear-button");
// const userSen = document.getElementById("sentence-input").value;

clearBtn.addEventListener("click", clearField);
function clearField() {
  document.getElementById("sentence-input").value = "";
  document.getElementById("output").innerHTML = "";
}

function countVowel() {
  let vowelNum = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let userSen = document.getElementById("sentence-input").value;
  let userStr = userSen.toLowerCase().split("");
  console.log(userStr);
  for (var i = 0; i < userStr.length; i++) {
    for (var j = 0; j < vowels.length; j++)
      if (userStr[i] == vowels[j]) {
        vowelNum += 1;
      } else {
        vowelNum += 0;
      }
  }
  return vowelNum;
}
function showNum() {
  document.getElementById("output").innerHTML = countVowel();
}

const input = document.getElementById("sentence-input");
input.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    countVowel();
    showNum();
  }
});
