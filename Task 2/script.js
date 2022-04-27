let username = document.querySelector("#uname");
let email = document.querySelector("#email");
let password = document.querySelector("#psw");
let divEle = document.querySelector("#form");



function signUp()
{
  validateForm();
}
function validateForm()
{
let inputElem = divEle.querySelectorAll("input");
let responce = false;
inputElem.foreach((element) => {
if (element.value == "" || element.value == null){
  var newP = document.createElement("p");
  newP.style.color = "#FF0000"
  let errText = document.createTextNode('* ${element.name} is required');
  newP.appendChild(errText);
  divEle.appendChild(newP);
  responce = true;

}

});
 return responce;

}