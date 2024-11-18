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
  console.log(productsArray[0]);
  productsArray.map((el) => {
    indexAllDataElement = productsArray.indexOf(el);

    createChieldsElementsInContainerFiveElement({
      id: el.id,
      images: el.images[0],
      title: el.title,
      description: el.description,
      category: el.category,
      divActual: createDivElements(indexAllDataElement),
    });
  });
}

function createDivElements(indexAllDataElement) {
  if (indexAllDataElement % 5 == 0) {
    let creatDiv = document.createElement("div");
    creatDiv.classList.add(`containerFiveElement${indexAllDataElement}`);
    creatDiv.classList.add(`containerDivElements`);
    if (indexAllDataElement >= 5) {
      creatDiv.classList.add("hide");
    }
    containerMain.appendChild(creatDiv);
    nameContainerFiveElement = `containerFiveElement${indexAllDataElement}`;
  }

  let divActual = document.querySelector(`.${nameContainerFiveElement}`);
  return divActual;
}

function createChieldsElementsInContainerFiveElement({
  id,
  images,
  title,
  description,
  category,
  divActual,
}) {
  let createDivContainerElementResult = createDivContainerElement(id, category);

  createDivContainerElementResult.appendChild(
    createImageElement(images, title)
  );
  createDivContainerElementResult.appendChild(createTitleElement(title));
  createDivContainerElementResult.appendChild(
    createdescriptionElement(description)
  );
  if (createDivContainerElementResult) {
    divActual.appendChild(createDivContainerElementResult);
  }
}

function createDivContainerElement(id, category) {
  let elementDivCreat = document.createElement("div");
  elementDivCreat.id = `${id}`;
  elementDivCreat.classList.add("containerElement");
  elementDivCreat.classList.add(category);

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



export function nextElementsButtonSistem(containerDivElements) {
  containerDivElements.map((el) => {
    showBackButton(containerDivElements, el);
    addHideClassPreviousDiv(el, containerDivElements);
  });
  noMorePagesForNextButton(containerDivElements);
}

function showBackButton(containerDivElements, el) {
  if (containerDivElements.indexOf(el) != 0) {
    btnBack.map((btnBack) => btnBack.classList.remove("hide"));
  } else {
    return;
  }
} //criar sistema para que esta função faça para ambos os btn
function addHideClassPreviousDiv(el, containerDivElements) {
  if (!el.className.endsWith("hide")) {
    indexElementContainerNumber = containerDivElements.indexOf(el) + 1;
    el.classList.add("hide");
  }
}

function noMorePagesForNextButton(containerDivElements) {
  if (indexElementContainerNumber == containerDivElements.length - 1) {
    btnNext.map((btnNext) => {
      btnNext.classList.add("hide");
    });
  }
  if (
    indexElementContainerNumber <
    containerDivElements.length 
  ) {
    containerDivElements[indexElementContainerNumber].classList.remove("hide");
  }
}

export function backElements(containerDivElements) {
  containerDivElements.map((el) => {
    showNextButton(containerDivElements, el);
    hideBackButton(containerDivElements, el);
  });

  controlOfHideClassOfBackButton(containerDivElements);
}

function showNextButton(containerDivElements, el) {
  if (containerDivElements.indexOf(el) <= containerDivElements.length - 2) {
    btnNext.map((btnNext) => btnNext.classList.remove("hide"));
  }
}

function hideBackButton(containerDivElements, el) {
  if (!el.className.endsWith("hide")) {
    indexElementContainerNumber = containerDivElements.indexOf(el) - 1;
    el.classList.add("hide");

    if (containerDivElements.indexOf(el) == 1) {
      btnBack.map((btnBack) => btnBack.classList.add("hide"));
    }
  }
  console.log(indexElementContainerNumber);
}

function controlOfHideClassOfBackButton(containerDivElements) {
  if (indexElementContainerNumber <= containerDivElements.length - 1) {
    containerDivElements[indexElementContainerNumber].classList.remove("hide");
  } else {
    btnBack.map((btnBack) => {
      btnBack.classList.add("hide");
    });
    containerDivElements[indexElementContainerNumber + 1].classList.remove(
      "hide"
    );
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


