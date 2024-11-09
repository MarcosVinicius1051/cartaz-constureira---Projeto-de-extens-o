const url = "https://dummyjson.com/products"

let result = fetch(url).then(res => res.json()).then(res=>res.products);
//adentrar no array de "products"


async function products(){

    const productsArray = await result;


    productsArray.map((el)=>{
        console.log(el.id)
        console.log(el.images[0])
    })

}

products()

