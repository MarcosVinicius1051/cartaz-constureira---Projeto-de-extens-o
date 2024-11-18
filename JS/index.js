import * as fun from "./functionsForSistem.js";
const url = "https://dummyjson.com/products";
import * as style from "./styleSistems.js"

export let result = fetch(url)
  .then((res) => res.json())
  .then((res) => res.products);

let containerElement;
let containerDivElements;
let containerTagsElementsButtons;
let resultProducts = await fun.getProducts();

//sistema de pegar os elementos DEPOIS de serem puxados do DOM
if (resultProducts != false) {
  containerElement = [...document.querySelectorAll(".containerElement")];
  containerDivElements = [
    ...document.querySelectorAll(".containerDivElements"),
  ];
  containerTagsElementsButtons = [...document.querySelectorAll(".btnTags")];
}

fun.btnNext.map((btnNext) => {
  btnNext.addEventListener("click", (evt) => {
    fun.nextElementsButtonSistem(containerDivElements);
  });
});


fun.btnBack.map((btnBack) => {
  btnBack.classList.add("hide");
  btnBack.addEventListener("click", (evt) => {
    fun.backElements(containerDivElements);
  });
});

containerElement.map((containerElement) => {
  containerElement.addEventListener("click", (evt) => {
    // ao clicar class hide de "p" é retirada.
    style.clickContainerElements(
      containerElement,
      containerElement.lastElementChild
    ); //pega o ultimo elemento filho, ou seja "p"
  });
});

containerTagsElementsButtons.map((containerTagsElementsButtons) => {
  containerTagsElementsButtons.addEventListener("click", (evt) => {
    
    fun.selectTags(containerTagsElementsButtons.classList[1],containerElement);
  });
});


