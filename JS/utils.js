import * as dom from "./dom.js";

export function showButton(key) {
  if (key == "next") {
    dom.btnBack.map((back) => removeClassHide(back));
  } else if ("back") {
    dom.btnNext.map((next) => removeClassHide(next));
  }
}
export function hideButton(key) {
  if (key == "back") {
    dom.btnBack.map((back) => addClassHide(back));
  } else if ("next") {
    dom.btnNext.map((next) => addClassHide(next));
  }
}

export function addClassHide(el) {
  el.classList.add("hide");
  return el;
}
export function removeClassHide(el) {
  el.classList.remove("hide");
  return el;
}
