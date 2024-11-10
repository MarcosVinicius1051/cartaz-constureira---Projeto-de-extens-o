const url = "https://dummyjson.com/products";

let result = fetch(url)
  .then((res) => res.json())
  .then((res) => res.products);
//adentrar no array de "products"

const containerMain = document.querySelector(".containerMain");
let indexArrName;
let nameContainer;

async function products() {
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

products();

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
    category
  );
}

function createItemsInContainers(
  divActual,
  id,
  img,
  title,
  description,
  category
) {
  let elementDivCreat = document.createElement("div");
  elementDivCreat.id = `${id} ${category}`;
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
