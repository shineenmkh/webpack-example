require("@babel/polyfill");
import "../../dist/css/style.css";
import { elements as elements, classList as classLists } from "../view/base";
import * as navBar from "../view/navBar";
import * as keyframeContainer from "../view/keyframeDiv";
import { drop } from "lodash";

elements.menuItems.forEach((e) => {
  e.addEventListener("mousemove", () => {
    navBar.addShadow(e);
  });

  e.addEventListener("mouseout", () => {
    navBar.removeShadow(e);
  });
});

const keyframeObj = [
  {
    title: "shinee",
  },
  {
    title: "nemekhbayar",
  },
  {
    title: "nasanbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
  {
    title: "naranbayar",
  },
];

elements.renderKeyframeBtn.addEventListener("click", (e) => {
  keyframeContainer.renderKeyframeItems(keyframeObj, 0);
});

elements.keyframeContainer.addEventListener("mousedown", (e) => {

      keyframeContainer.checkMouseDragged(true);
      keyframeContainer.getStartPoint(e.clientX);
});

document.addEventListener("mouseup", (e) => {
      
  keyframeContainer.checkMouseDragged(false);

  //keyframeContainer.renderKeyframeItems(keyframeObj, 1);


});

document.addEventListener("mousemove", (e) => {

      keyframeContainer.eventItems(e);
});

//import icon from "../../src/image/icon.png";

// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");
//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   element.classList.add("code");

//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = icon;
//   myIcon.alt = "sdf";

//   element.appendChild(myIcon);

//   // console.log(Data);
//   // console.log(Notes);

//   btn.innerHTML = "Click me and check the console!";
//   //btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());
