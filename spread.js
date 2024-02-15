// let arr=["abhi","kumar","asw"]

// function f1(...a){
//     console.log(a);
// }

// f1(...arr)

/////////////////////////

let products = [
    ["banana", "orange", "mango"],
    ["mango", "mango", "mango"],
    ["shirt", "tshirt", "Jeans"],
    ["cap", "jeans", "jeans"]
]

// console.log(...products);


// console.log("products",products[0],products[1]);

let fruits = []
fruits.push(products[0], products[1])
console.log("fruits", fruits);

let eCom = []

    let a= products[2]
    let b= products[3]

    let c=[...a,...b]

eCom.push(c)
console.log("eCom", eCom);
