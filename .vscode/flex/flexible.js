function myFuction(button){
  let inpObj = document.getElementById("numb");
  let text;
  button.innerHTML = "Submitted"
  if(inpObj.checkValidity()){
    text = "Input OK";
  }else{
    text = inpObj.validationMessage;
  }

  let para = document.createElement("p");
  let node = document.createTextNode(text);
  para.appendChild(node);

  let element = document.getElementById("div1");
  element.appendChild(para);
}


