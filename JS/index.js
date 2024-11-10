import * as fun from "./functionsForSistem.js";
const url = "https://dummyjson.com/products";

export let result = fetch(url)
  .then((res) => res.json())
  .then((res) => res.products);

fun.products()


const btnBack = document.querySelector(".back");

/* começar a fazer a manipulação do Dom */


/* Sistema de navegação de "paginas" */

fun.btnNext.addEventListener("click",(evt)=>{
  let containerDivElements = [...document.querySelectorAll(".containerDivElements")]
  
  fun.nextElements(containerDivElements)
});

