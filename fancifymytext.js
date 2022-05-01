/* Anthony Laurente CSC196W */

/*
function alert() {
  alert("Hello World!");
}
*/

// Bigger function
function big() {
  var text = document.getElementById("textinput");
  text.style.fontSize = "30pt";
}

// Bold function 
function bold() {
  var text = document.getElementById("textinput");
  text.style.fontWeight = "bold";
  text.style.color = "red";
  text.style.textDecoration = "underline";
}

// BoringBetty Function
function boring() {
  var text = document.getElementById("textinput");
  text.style.fontSize = "initial";
  text.style.fontWeight = "normal";
  text.style.color = "black";
  text.style.textDecoration = "none";
}


// Moo function
function moo() {
  var suffix = '-Moo',
  txtInput = document.getElementById("textinput");
  txtInput.style.textTransform = "uppercase";
  txtInput.value = txt.value.split('.').join('') + suffix;
}
