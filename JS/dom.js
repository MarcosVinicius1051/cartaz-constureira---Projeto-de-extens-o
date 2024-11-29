import { result } from "./index.js";
import * as style from "./ui.js";
import * as utilitary from "./utils.js"

let indexAllDataElement;
export const btnNext = [...document.querySelectorAll(".next")];
export const btnBack = [...document.querySelectorAll(".back")];
const containerMain = document.querySelector(".containerMain");

let AllMainTags = [...document.querySelectorAll(".mainTag")];

export async function getProducts() {
  const productsArray = await result;
  console.log(productsArray[0]);
  productsArray.map((el) => {
    indexAllDataElement = productsArray.indexOf(el);

    createChieldsElements({
      id: el.id,
      images: el.image,
      title: el.title,
      description: el.description,
      category: el.class,
      subCategory: el.subClass,
      index: indexAllDataElement,
    });
  });
}

function createChieldsElements({
  id,
  images,
  title,
  description,
  category,
  subCategory,
  index,
}) {
  let createDivContainerElementResultCall = createDivContainerElement(
    id,
    category,
    subCategory,
    index
  );

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

function createDivContainerElement(id, category, subCategory, index) {
  let elementDivCreat = document.createElement("div");
  elementDivCreat.id = `${id}`;
  elementDivCreat.classList.add("containerElement");
  elementDivCreat.classList.add(category);
  elementDivCreat.classList.add(subCategory);

  if (index > 4) {
    utilitary.addClassHide(elementDivCreat);
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
  utilitary.addClassHide(descriptionElement);
  descriptionElement.innerHTML = description;
  return descriptionElement;
}

const numberSetOfFive = 5;

export function nextElementsButtonSystem(containerElement) {
  let lastIdOfSet = elementsNoHideToHide(containerElement);

  utilitary.showButton("next");

  nextPageAction(containerElement, lastIdOfSet);

  lastPageHideNext(containerElement);
}

function elementsNoHideToHide(containerElement) {
  let lastIdOfSet;

  containerElement.map((el) => {
    if (!el.className.endsWith("hide")) {
      lastIdOfSet = utilitary.addClassHide(el);
    }
  });
  return lastIdOfSet.id;
}

function nextPageAction(containerElement, lastIdOfSet) {
  let idElemet;
  containerElement.map((el) => {
    idElemet = parseInt(el.id);
    lastIdOfSet = parseInt(lastIdOfSet);
    if (idElemet > lastIdOfSet && idElemet <= lastIdOfSet + numberSetOfFive) {
      utilitary.removeClassHide(el)
    }
  });
}

function lastPageHideNext(containerElement) {
  if(!containerElement[containerElement.length-1].classList.contains("hide")){
    utilitary.hideButton("next");
  }
}

export function backElementsButtonSystem(containerElement) {
  utilitary.showButton("back")
  let lastIdOfSet = elementsNoHideToHide(containerElement);
  BackPageAction(containerElement, lastIdOfSet);
  firstPageHideBack(containerElement);
}

function firstPageHideBack(containerElement) {
  if(!containerElement[containerElement.length-containerElement.length].classList.contains("hide")){
 
    utilitary.hideButton("back")
  }
}
function BackPageAction(containerElement, lastIdOfSet) {
  let idElemet;
  containerElement.map((el) => {
    idElemet = parseInt(el.id);
    lastIdOfSet = parseInt(lastIdOfSet);

    if (
      idElemet <= lastIdOfSet - numberSetOfFive &&
      idElemet > lastIdOfSet - numberSetOfFive * 2
    ) {
      utilitary.removeClassHide(el)
    }
  });
}


export function selectTags({
  tagClickedClassName,
  tagClicked,
  elements,
  allTags,
}) {

  if (tagClicked.classList.contains("mainTag")) {
    subTagsSystem(allTags, objectWithTagResult(tagClickedClassName) || objectWithTagResult(undefined));
  }

  checkIfMainTagIsSelected(tagClicked, allTags);

  style.selectTag(tagClicked, allTags);

  return showOnlyElementsFromTheSelectedTag({elements:elements, key:objectWithTagResult(tagClickedClassName), tagClicked:tagClicked, allTags:allTags});
}

function objectWithTagResult(tagClicked){
  const TagsObject = {
    pijama: "pijama",
    pijamaFeminino: "pijamaFeminino",
    pijamaMasculino: "pijamaMasculino",
    pijamaInfantil: "pijamaInfantil",
    armarinho: "armarinho",
    lingerieSutia: "sutia",
    lingerieCalcinha: "calcinha",
    lingerieCuecas: "cueca",
    armarinhoAgulha: "agulha",
    armarinhoLinha: "linha",
    armarinhoBotoes: "botao",
    armarinhoTesoura: "tesoura",
    armarinhoElastico: "elastico",
    armarinhoFita: "fita",
    lingerie: "lingerie",
    roupaInfantil: "roupaInfantil",
  };

  return TagsObject[tagClicked]
}

//não mudar nada 
function checkIfMainTagIsSelected(tagClicked, allTags) {

  if (tagClicked.classList.contains("mainTag")) {

    if (tagClicked.classList.contains("tagSelected")) {

      allTags.map((el) => utilitary.addClassHide(el))
      AllMainTags.map((el) =>  utilitary.removeClassHide(el));
    } 
    else {
      return console.log("não selecionada ainda ");
    }
  }
}
//não mudar nada
function subTagsSystem(tags, key) {
  if (key == undefined) {
    return;
  }
  tags.map((tag) => {
    if (tag.classList.contains(key)) {
      utilitary.removeClassHide(tag)
    } else {
      utilitary.addClassHide(tag)
    }
  });
}

function showOnlyElementsFromTheSelectedTag({elements,key,tagClicked,allTags}) {

  let elementsactive = [];
  let nameOfTagActived;

  //transformar os if e elese em funções 
  elements.map((el) => {
    if (!el.classList.contains(key)) {
      utilitary.addClassHide(el)
    } else {
      elementsactive.push(el);
    }
  });

  if (!tagClicked.classList.contains("tagSelected") && tagClicked.classList.contains("subTag")) {
    return weiPointSubTags({elementsactive:elementsactive,nameOfTagActived:nameOfTagActived,allTags:allTags,elements:elements})
  }
  
  if (!tagClicked.classList.contains("tagSelected")) {
    return elementsArrayAddOrRemoveHide(elements);
  } else {
    return elementsArrayAddOrRemoveHide(elementsactive);
  }
}
//não mudar nada abaixo



function weiPointSubTags({elementsactive,nameOfTagActived,allTags,elements}){

    allTags.map((el) => {
      if (el.classList.contains("tagSelected")) {
        nameOfTagActived = el.classList[1];
      }
    });
    elements.map((el) => {
      if (el.classList.contains(nameOfTagActived)) {
        elementsactive.push(el);
      }
    });
    return elementsArrayAddOrRemoveHide(elementsactive);
    
}



function elementsArrayAddOrRemoveHide(elementsactive) {

  elementsactive.map((el) => {
    initialPointPage(elementsactive.indexOf(el), el);
  });

  return elementsactive;
}

function initialPointPage(indexArr, elArr) {
  if (indexArr > 4) {
    utilitary.addClassHide(elArr)
  } else {
    utilitary.removeClassHide(elArr)
  }
}
