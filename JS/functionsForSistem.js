import { result } from "./index.js";

let indexArrName;
let nameContainer;
let indexElementContainerNumber;
export const btnNext = document.querySelector(".next"); 
const containerMain = document.querySelector(".containerMain");

export async function products() {
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
    if(indexArrName >=5 ){
      creatDiv.classList.add('hide')
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
  indexArrName,
) {
  let elementDivCreat = document.createElement("div");
  elementDivCreat.id = `${id} ${category}`;
  elementDivCreat.classList.add("containerElement")
  let imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = `${title} img`;
  let titleElement = document.createElement("h1");
  titleElement.classList.add("titleElement");
  titleElement.innerHTML = title;
  let descriptionElement = document.createElement("p");
  descriptionElement.classList.add("descriptionElement");
  descriptionElement.innerHTML = description;

  elementDivCreat.appendChild(titleElement);
  elementDivCreat.appendChild(imgElement);
  elementDivCreat.appendChild(descriptionElement);
  divActual.appendChild(elementDivCreat);
}


export function nextElements(elements){
  /*sistema de passa para a proxima pagina */
  elements.map((el)=>{
    if(!el.className.endsWith("hide")){
      indexElementContainerNumber = elements.indexOf(el)+1;
      el.classList.add("hide");    
      console.log(indexElementContainerNumber) 
    }
  })
  /*sistema de parar quando não tiver mais pagina */

  if(indexElementContainerNumber <= elements.length-1 /*arr de elements =6, mas so tem 5 */){
    elements[indexElementContainerNumber].classList.remove("hide"); 
    console.log(elements)
    console.log(indexElementContainerNumber) 
  }else{
    btnNext.classList.add("hide")
    elements[indexElementContainerNumber-1].classList.remove("hide"); 
  }

}