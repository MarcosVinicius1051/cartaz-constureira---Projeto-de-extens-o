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


export function selectTag(tag,allTags){

  if(tag.classList.contains("tagSelected")){
    tag.classList.remove("tagSelected")
  }else{
    checkIfASubtagIsAlreadySelected(tag,allTags)
    tag.classList.add("tagSelected") 
  }
}

function checkIfASubtagIsAlreadySelected(tag,allTags){
 allTags.map((all)=>{
  if(all.classList.contains("subTag")){
    if(all.classList.contains("tagSelected")){
      all.classList.remove("tagSelected");
    }
  }
 });
 
}