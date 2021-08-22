import _ from "lodash";
import "../../dist/css/style.css";
import icon from "../../dist/image/icon.png";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("code");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = icon;

  element.appendChild(myIcon);

  // console.log(Data);
  // console.log(Notes);

  btn.innerHTML = "Click me and check the console!";
  //btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
