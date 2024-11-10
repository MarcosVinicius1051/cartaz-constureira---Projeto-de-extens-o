import * as fun from "./functionsForSistem.js";
const url = "https://dummyjson.com/products";

export let result = fetch(url)
  .then((res) => res.json())
  .then((res) => res.products);
//adentrar no array de "products"

fun.products()

