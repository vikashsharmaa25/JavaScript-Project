let result = document.getElementById("result");

function reverseValue() {
  var inputElement = document.getElementById("inputElement").value;
  return inputElement.toLowerCase().split("").reverse().join("");
}

function checkPalindrome() {
  var inputElement = document.getElementById("inputElement");
  var inputValue = inputElement.value.toLowerCase();

  if (inputValue === "") {
    alert("please write something");
  } else {
    if (inputValue === reverseValue()) {
      result.innerText = "Yes, this is a palindrome";
    } else {
      result.innerText = "This is not a palindrome";
    }
  }
}
