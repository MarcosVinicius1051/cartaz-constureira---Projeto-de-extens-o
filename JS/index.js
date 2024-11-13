import * as fun from "./functionsForSistem.js";
const url = "https://dummyjson.com/products";

export let result = fetch(url)
  .then((res) => res.json())
  .then((res) => res.products);

let containerElement ;
let containerDivElements;
let containerPElements
let resultProducts =  await fun.products()


//sistema de pegar os elementos DEPOIS de serem puxados do DOM 
if(resultProducts != false){
  containerElement = [...document.querySelectorAll(".containerElement")];
  containerDivElements = [...document.querySelectorAll(".containerDivElements")];
  containerPElements = [...document.querySelectorAll(".descriptionElement")]
}





fun.btnNext.map((btnNext)=>{
  btnNext.addEventListener("click",(evt)=>{
    fun.nextElements(containerDivElements);
  });
})
fun.btnBack.map((btnBack)=>{
  btnBack.classList.add("hide")
  btnBack.addEventListener("click",(evt)=>{
    fun.backElements(containerDivElements);
  });
});

containerElement.map((containerElement)=>{
  containerElement.addEventListener("click", (evt)=>{
    // ao clicar class hide de "p" é retirada. 
    fun.clickContainerElements(containerElement,containerElement.lastElementChild)//pega o ultimo elemento filho, ou seja "p"

  })
})




