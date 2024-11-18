export function selectTags(tags, elements) {
  let arr;
  switch (tags.classList[1]) {
    case "tagBeauty":
      selectTagsActions(
        1,
        selectElementsForTags(elements, "tagBeauty"),
        elements
      );
      break;
    case "tagFragrances":
      break;
    case "tagFurniture":
      break;
    case "tagsGroceries":
      break;
  }
}


function selectTagsActions(key, elActived, el) {
  el.map((el) => {
    if (el.classList[1] == "beauty") {
      if (el.parentNode.className.endsWith("hide")) {
        el.parentNode.classList.remove("hide");
      }
    } else {
      el.parentNode.classList.add("hide");
    }
  });
}

function selectElementsForTags(el, nameTag) {
  let arr = [];
  el.map((el) => {
    if (nameTag == "tagBeauty") {
      if (el.classList[1] == "beauty") {
        arr.push(el);
      }
    }
  });

  return arr;
}