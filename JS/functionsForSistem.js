import { result } from "./index.js";

let indexAllDataElement;
let nameContainerFiveElement;
let indexElementContainerNumber;
export const btnNext = [...document.querySelectorAll(".next")];
export const btnBack = [...document.querySelectorAll(".back")];

const containerMain = document.querySelector(".containerMain");


let tagsElementsName = {
  "tagBeauty":'beauty',
  "tagFragrances":"Fragrances",
  "tagFurniture":"furniture",
  "tagGroceries":"groceries"
}

export async function getProducts() {
  const productsArray = await result;
  console.log(productsArray[0])
  productsArray.map((el) => {
    indexAllDataElement = productsArray.indexOf(el);

    createChieldsElements({
      id: el.id,
      images: el.image,
      title: el.title,
      description: el.description,
      category: el.class,
      index: indexAllDataElement
    });
  });
}
//abaixo deve-se ser mudado


function createChieldsElements({
  id,
  images,
  title,
  description,
  category,
  index
}) {


  let createDivContainerElementResultCall = createDivContainerElement(id, category,index);

  createDivContainerElementResultCall.appendChild(
    createImageElement(images, title)
  );
  createDivContainerElementResultCall.appendChild(createTitleElement(title));
  createDivContainerElementResultCall.appendChild(
    createdescriptionElement(description)
  );
  if (createDivContainerElementResultCall) {
    containerMain.appendChild(createDivContainerElementResultCall);
  }
}


function createDivContainerElement(id, category,index) {

  let elementDivCreat = document.createElement("div");
  elementDivCreat.id = `${id}`;
  elementDivCreat.classList.add("containerElement");
  elementDivCreat.classList.add(category);

  if(index>4){
    elementDivCreat.classList.add("hide");
  }

  return elementDivCreat;
}


function createImageElement(img, title) {
  let imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = `${title} img`;
  return imgElement;
}
function createTitleElement(title) {
  let titleElement = document.createElement("h1");
  titleElement.classList.add("titleElement");
  titleElement.innerHTML = title;
  return titleElement;
}
function createdescriptionElement(description) {
  let descriptionElement = document.createElement("p");
  descriptionElement.classList.add("descriptionElement");
  descriptionElement.classList.add("hide");
  descriptionElement.innerHTML = description;
  return descriptionElement;
}

let numberSetOfFive = 5;

export function nextElementsButtonSystem(containerElement) {
let lastIdOfSet =elementsNoHideToHide(containerElement);
showButton("next")
lastPageHideNext(containerElement,lastIdOfSet)
nextPageAction(containerElement,lastIdOfSet)

}


function elementsNoHideToHide(containerElement){
  let lastIdOfSet;

  containerElement.map((el)=>{
      if(!el.className.endsWith("hide")){

        lastIdOfSet = addClassHide(el)
      } 
  })
  return lastIdOfSet.id 
}

function nextPageAction (containerElement,lastIdOfSet){
  let idElemet;
  containerElement.map((el)=>{
    idElemet = parseInt(el.id)
    lastIdOfSet = parseInt(lastIdOfSet)
    if(idElemet > lastIdOfSet && idElemet<= lastIdOfSet+numberSetOfFive){

      // console.log(lastIdOfSet)
      // console.log(idElemet)
      // console.log(el)
      el.classList.remove("hide")
    }
  })
}

function lastPageHideNext(containerElement,lastIdOfSet){

if(lastIdOfSet > containerElement.length-numberSetOfFive){
  hideButton("next")
}
}


export function backElements(containerElement) {
  showButton("back")
  let lastIdOfSet =elementsNoHideToHide(containerElement);
  firstPageHideBack(containerElement,lastIdOfSet)
  BackPageAction(containerElement,lastIdOfSet)
}

function firstPageHideBack(containerElement,lastIdOfSet){
  
  if(lastIdOfSet == 9){
    hideButton("back")

  }
}
function BackPageAction(containerElement,lastIdOfSet){
  let idElemet;
  containerElement.map((el)=>{
    idElemet = parseInt(el.id)
    lastIdOfSet = parseInt(lastIdOfSet)

    if(idElemet <= lastIdOfSet -numberSetOfFive  && idElemet> lastIdOfSet-(numberSetOfFive*2)){
      removeClassHide(el)
    }
    
  })
}


function addClassHide(el){

  el.classList.add("hide");
  return el
}
function removeClassHide(el){
  el.classList.remove("hide");
  return el
}
  
  function showButton(key){
    if(key == "next"){
      btnBack.map(back=>removeClassHide(back))
    }else if("back"){
      btnNext.map(next=>removeClassHide(next))
    }
  }
  function hideButton(key){
    if(key == "back"){
      
      btnBack.map(back=>addClassHide(back))
    }else if("next"){
      btnNext.map(next=>addClassHide(next))
    }
  }



//Tags salactions

export function selectTags(tags, elements) {
  showElementsOfTagActivated(tags,elements)
  console.log(tags)

}

function showElementsOfTagActivated(tags,elements){

 elements.map((el)=>{
  if(el.className.endsWith(tagsElementsName[tags])){

    removeHideElementsWithTagActived (el);
  }else{
    
    el.parentNode.classList.add("hide");
  }
})

}
function removeHideElementsWithTagActived(elements){
  if(elements.parentNode.className.endsWith("hide")){
    elements.parentNode.classList.remove("hide");
  }
}
// começar a criar o novo sistema de tags, pois é necessario organizar as tags em grupos de 5 e também fazer o sistema de ativado e desativado das seleções para que não seja possivel transitar entre elemenetos de tags diferentes

