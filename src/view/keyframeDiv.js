import { elements, classList } from "./base";


//class nemj ogoh itemInfo.g constructure.s awch oortoo hadgalah buya this.d hiih


const renderKeyframeItem = (itemInfo, type) => {

      const markup = 
      `
            <div class=${classList.keyframeDiv}>${itemInfo.title}</div>
      `;

      // if(type == 0)
      //       elements.keyframeContainer.insertAdjacentHTML("beforeend", markup);
      // else 
      //       elements.keyframeContainer.insertAdjacentHTML("afterbegin", markup);

      elements.keyframeContainer.insertAdjacentHTML("beforeend", markup);
}

export const renderKeyframeItems = items => {

      console.log(items);

      items.forEach(element => {
            renderKeyframeItem(element);      
      });
}

let mouseDrag = false;
let draggedLocX = 0;

export const eventItems = e =>{

      if (mouseDrag) {
        
            elements.keyframeContainer.style.left =
              elements.keyframeContainer.offsetLeft + (e.clientX - draggedLocX) + "px";
        
            draggedLocX = e.clientX;

            //tuhain elementiin zuun taliin bairshliig tuhain elementiin orgon dr nemj baruun taliin bairshiliig olno

            let offsetRight = elements.keyframeContainer.offsetLeft + elements.keyframeContainer.offsetWidth;

            // console.log(`агуулагчийн зүүн хэмжээ = ${elements.keyframeContainer.offsetLeft}`);
            // console.log(`агуулагчийн баруун хэмжээ = ${offsetRight}`);
            // console.log(`Дэлгэцийн хэмжээ = ${document.documentElement.clientWidth}`);

            //elements.keyframeContainer elementiin baruun taliin bairshil delgetsiin tsewer orgontei tentsuu esehiig shalgaj baina.

            if(document.documentElement.clientWidth == offsetRight)
                  console.log("right side = true");
      }      
}

export const checkMouseDragged = mouseDraged => {
      mouseDrag = mouseDraged;
      //elements.keyframeContainer.style.left = "1903px";
}

export const getStartPoint = draggedLoc => {
      draggedLocX = draggedLoc;
}