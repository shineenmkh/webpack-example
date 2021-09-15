import { elements as elements, classList as classList } from "./base";

export const addShadow = elem => {

      elem.classList.add(classList.menuItemHover);
} 

export const removeShadow = elem => {

      elem.classList.remove(classList.menuItemHover);
}