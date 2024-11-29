export function clickContainerElements(elementsDiv, p, containerElement) {
  
  if (elementsDiv.classList.contains("selected")) {
    removeSelectClassOfElement(elementsDiv,p)
  } else {
    addSelectClassOfElement(elementsDiv,p)
  }

  containerElement.map((item)=>{
    if(item.classList.contains("hide")){
      removeSelectClassOfElement(item,p)
    }
  })
}
export function removeSelectClassOfElement(elementsDiv,p){
  p.classList.add("hide");
  elementsDiv.style.height = "300px";
  elementsDiv.style.width = "300px";
  elementsDiv.classList.remove("selected");
}
export function addSelectClassOfElement(elementsDiv,p){
  elementsDiv.style.height = "450px";
  elementsDiv.style.width = "330px";
  elementsDiv.classList.add("selected"); // adiciona a classe de selected
  p.classList.remove("hide");
}

export function selectTag(tag,allTags){

  if(tag.classList.contains("tagSelected")  ){
    tag.classList.remove("tagSelected");

  }else{
    checkIfASubtagIsAlreadySelected(allTags)
    tag.classList.add("tagSelected") 
  }
}

function checkIfASubtagIsAlreadySelected(allTags){
 allTags.map((all)=>{
  if(all.classList.contains("subTag")){
    if(all.classList.contains("tagSelected")){
      all.classList.remove("tagSelected");
    }
  }
 });
 
}