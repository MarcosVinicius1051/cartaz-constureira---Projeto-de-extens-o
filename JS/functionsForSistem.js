import { result } from "./index.js";

let indexArrName;
let nameContainer;
let indexElementContainerNumber;
export const btnNext = [...document.querySelectorAll(".next")];
export const btnBack = [...document.querySelectorAll(".back")];

const containerMain = document.querySelector(".containerMain");

export async function products(cod) {
  const productsArray = await result;
  console.log(productsArray[0]);
  productsArray.map((el) => {
    indexArrName = productsArray.indexOf(el);
    createItemsAndContainers(
      indexArrName,
      el.id,
      el.images[0],
      el.title,
      el.description,
      el.category
    );
  });
}

function createItemsAndContainers(
  indexArrName,
  id,
  img,
  title,
  description,
  category
) {
  if (indexArrName % 5 == 0) {
    let creatDiv = document.createElement("div");
    creatDiv.classList.add(`containerFiveElement${indexArrName}`);
    creatDiv.classList.add(`containerDivElements`);
    if (indexArrName >= 5) {
      creatDiv.classList.add("hide");
    }
    containerMain.appendChild(creatDiv);
    nameContainer = `containerFiveElement${indexArrName}`;
  }
  let divActual = document.querySelector(`.${nameContainer}`);
  createItemsInContainers(
    divActual,
    id,
    img,
    title,
    description,
    category,
    indexArrName
  );
}

function createItemsInContainers(
  divActual,
  id,
  img,
  title,
  description,
  category,
  indexArrName
) {
  let elementDivCreat = document.createElement("div");
  elementDivCreat.id = `${id} ${category}`;
  elementDivCreat.classList.add("containerElement");
  let imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = `${title} img`;
  let titleElement = document.createElement("h1");
  titleElement.classList.add("titleElement");
  titleElement.innerHTML = title;
  let descriptionElement = document.createElement("p");
  descriptionElement.classList.add("descriptionElement");
  descriptionElement.classList.add("hide");
  descriptionElement.innerHTML = description;

  elementDivCreat.appendChild(imgElement);
  elementDivCreat.appendChild(titleElement);
  elementDivCreat.appendChild(descriptionElement);
  divActual.appendChild(elementDivCreat);
}

export function nextElements(containerDivElements) {
  containerDivElements.map((el) => {
    /*Sistema de "mostrar" o btn back */
    if (containerDivElements.indexOf(el) != 0) {
      btnBack.map((btnBack) => btnBack.classList.remove("hide"));
    }
    // SISTEMA PARA ADICIONAR O "HIDE" A DIV ANTERIOR
    if (!el.className.endsWith("hide")) {
      indexElementContainerNumber = containerDivElements.indexOf(el) + 1;
      el.classList.add("hide");
    }
  });

  /*sistema de parar quando não tiver mais pagina */

  console.log(indexElementContainerNumber);
  //ABAIXO É UM SISTEMA PARA DESABILITAR O NEXT
  if (indexElementContainerNumber == containerDivElements.length - 1) {
    btnNext.map((btnNext) => {
      btnNext.classList.add("hide");
    });
  }
  //SISTEMA PARA TIRAR O "HIDE" DA DIV ATUAL
  if (
    indexElementContainerNumber <
    containerDivElements.length /*arr de elements =6, mas so tem 5 */
  ) {
    containerDivElements[indexElementContainerNumber].classList.remove("hide");
  }
}

export function backElements(containerDivElements) {
  containerDivElements.map((el) => {
    if (containerDivElements.indexOf(el) <= containerDivElements.length - 2) {
      btnNext.map((btnNext) => btnNext.classList.remove("hide"));
    }
    if (!el.className.endsWith("hide")) {
      indexElementContainerNumber = containerDivElements.indexOf(el) - 1;
      el.classList.add("hide");
      console.log(containerDivElements.indexOf(el));
      if (containerDivElements.indexOf(el) == 1) {
        btnBack.map((btnBack) => btnBack.classList.add("hide"));
        console.log(containerDivElements.indexOf(el));
      }
    }
  });

  if (
    indexElementContainerNumber <=
    containerDivElements.length - 1 /*arr de elements =6, mas so tem 5 */
  ) {
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

export function clickContainerElements(elementsDiv, p) {
  if (elementsDiv.className.endsWith("selected")) {
    p.classList.add("hide");
    elementsDiv.style.height = "300px";
    elementsDiv.style.width = "300px";
    elementsDiv.classList.remove("selected");
  } else {
    elementsDiv.style.height = "450px";
    elementsDiv.style.width = "330px";
    elementsDiv.classList.add("selected"); // adiciona a classe de selected
    p.classList.remove("hide");
  }
}
