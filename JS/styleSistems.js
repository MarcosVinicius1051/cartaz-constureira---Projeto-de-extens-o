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