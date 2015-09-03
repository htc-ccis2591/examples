
var content = document.getElementById("content");
console.log(content);

console.log("I am here!");

var newHeading = document.createElement("h2");
var h2Text = document.createTextNode("New Heading");

newHeading.appendChild(h2Text);
content.appendChild(newHeading);

console.log("Yay!");

var newPara = document.createElement("p");
var paraText = document.createTextNode("Fun new text.");

newPara.appendChild(paraText);
content.appendChild(newPara);

console.log("Para Added");

var h2s = document.getElementsByTagName("h2");

content.removeChild(h2s[1]);

console.log("removed h2");

var paras = document.getElementsByTagName("p");

para2 = paras[1];
para2.setAttribute("class", "hide");


