import * as utilitary from "./utils.js";
import * as dom from "./dom.js";
import * as style from "./ui.js";
const url = "https://api-projeto-peex.onrender.com/products";

export let result = fetch(url).then((res) => res.json());

let containerElement;
let arraysElementsActives = [];
let containerTagsElementsButtons;
let resultProducts = await dom.getProducts();

//sistema de pegar os elementos DEPOIS de serem puxados do DOM
if (resultProducts != false) {
  containerElement = [...document.querySelectorAll(".containerElement")];

  containerTagsElementsButtons = [...document.querySelectorAll(".btnTags")];
}

dom.btnNext.map((btnNext) => {
  btnNext.addEventListener("click", (evt) => {
    sendTheArrayOfActiveElements("next");
  });
});

dom.btnBack.map((btnBack) => {
  utilitary.addClassHide(btnBack);
  btnBack.addEventListener("click", (evt) => {
    sendTheArrayOfActiveElements("back");
  });
});

containerElement.map((elements) => {
  elements.addEventListener("click", (evt) => {
    style.clickContainerElements(
      elements,
      elements.lastElementChild,
      containerElement
    );
  });
});

containerTagsElementsButtons.map((containerTagsButtons) => {
  containerTagsButtons.addEventListener("click", (evt) => {
    arraysElementsActives = dom.selectTags({
      tagClickedClassName: showClassNameOfTagClicked(containerTagsButtons),
      tagClicked: containerTagsButtons,
      elements: containerElement,
      allTags: containerTagsElementsButtons,
    });
    //organizar
    systemForArraysSmallerThanThree(arraysElementsActives);
  });
});

function showClassNameOfTagClicked(containerTagsButtons) {
  if (containerTagsButtons.classList.contains("subTag")) {
    return containerTagsButtons.classList[2];
  } else {
    return containerTagsButtons.classList[1];
  }
}

function elementArrayUpdate() {
  return arraysElementsActives;
}

function sendTheArrayOfActiveElements(key) {
  if (key == "back") {
    if (elementArrayUpdate()[0] != null) {
      console.log(elementArrayUpdate());
      dom.backElementsButtonSystem(elementArrayUpdate());
    } else {
      dom.backElementsButtonSystem(containerElement);
    }
  }
  if (key == "next") {
    if (elementArrayUpdate()[0] != null) {
      console.log(elementArrayUpdate());
      dom.nextElementsButtonSystem(elementArrayUpdate());
    } else {
      dom.nextElementsButtonSystem(containerElement);
    }
  }
}

function systemForArraysSmallerThanThree(arraysElementsActives) {
  if (arraysElementsActives.length < 5) {
    utilitary.hideButton("next");
  } else {
    utilitary.showButton("back");
  }
}
