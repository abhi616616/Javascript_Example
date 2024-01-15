// var a=[10,20,30,40,50,60,70,80,90,true,false,"hello","javascript",[1,2,3,4,5]]
// // console.log(`${a}`);
// console.log(a);

//create an array using empty array

// var a=[]
// a.push(10,20,30,40,50)
// console.log(a);

//Array constructor

// var a=Array(10,20,30,40,50,60,70,80,90,100)
// console.log(a);

//toString() convert from array to string

// var a=[10,20,30,40,50,60,70,80,90]
// console.log(a.toString());

//join() convert from array to string & we can add some add and space between the array
// var a=[10,20,30,40,50,60,70,80,90]
// console.log(a.join(" "));
// console.log(a.join("|"));
// console.log(a.join(":"));

//push() insert one or more than one element inserts in last position of array and return the updated length..
//pop()  delete the last one element and update yhe length of array.
//unshift() insert one & more than one element starting of array and update the length of array.
//shift() delete an element from first position of array and return deleted array element.
//splice() used to insert or delete or update element from any specific position of array
// and return array of deleted element.
//syntax:- array.splice(pos.numberOfItemtobeDeleted,[itemstoInsert])

//push() example.........
// var a=[10,20,30,40,50,60,70,80,90]
// console.log(a);
// console.log("updated length of array=",a.push(100));
// console.log(a);


//unshift() example.........
// var a=[10,20,30,40,50,60,70,80,90,100]
// console.log(a);
// console.log(a.unshift(5));
// console.log(a);
// console.log(a.unshift(1,2,3,4));
// console.log(a);


//splice() example............
// var a=[10,20,30,40,50,60,70,80,90,100]
// console.log(a);
// console.log("deleted element= ",a.splice(3,0,35,36,37,38,39));
// console.log(a);


//pop() example...........
// var a=[10,20,30,40,50,60,70,80,90,100]
// console.log(a);
// console.log("deleted element",a.pop());
// console.log(a);


//shift() example............
// var a=[10,20,30,40,50,60,70,80,90,100]
// console.log(a);
// console.log("deleted first element",a.shift());
// console.log(a);


//splice() exaple.......
// var a=[10,20,30,40,50,60,70,80,90,100]
// console.log(a);
// console.log("deleted element",a.splice(3,5));
// console.log(a);


//slice() return a list of item from position to position...
// example.....
// var a=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
// console.log(a);
// console.log(a.slice(5,11));
// console.log();


//concat()  example........
// var a=[1,2,3,4,5]
// var b=[10,20,30,40,50]
// var c=[100,200,300,400,500]
// var d=["hello","javascript","world"]
// var e=a.concat(b,c,d)
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(`${e}`);


//using forloop print a array..
// var a=[10,20,30,40,50,60,70,80,90,100]
// for(let i=0;i<a.length;i++){
//     console.log(`${a[i]}`);
// }

// var a=[10,20,30,40,50,60,70,80,90,100]
// for(let i=0;i<a.length;i++){
//     process.stdout.write(`${a[i]} `)   //using (process.stdout.write) print the output in same line...
// }


//accessing array element using whileloop

// var a=[10,20,30,40,50,60,70,80,90,100]
// let i=0;
// while(i<a.length){
//     console.log(`${a[i]}`);
//     i++
// }


//accessing array element using do whileloop

// var a=[10,20,30,40,50,60,70,80,90,100]
// let i=0;
// do{
//     console.log(`${a[i]}`);
//     i++
// }
// while(i<a.length)


//accessing array element using for in loop

// var a=[10,20,30,40,50,60,70,80,90,100]
// for(let i in a){
//     console.log(`${a[i]}`);
// }


//accessing array element using for of loop

// var a=[10,20,30,40,50,60,70,80,90,100]
// for(let i of a){
//     console.log(`${i}`);
// }


// print greatest element of array

// var a=[10,20,30,110,80,90]
// var max=10;

// for(let i of a){
//     if(max<i)
//     max=i
// }
// console.log("greatest element of array: ",`${max}`);




var a=[15,17,14,30,40,50,33,32,23,65,56,9,90,100,181,87,86,85]

function check(items){
    let flag=false;

    for(let i=2;i<=items**0.5;i++){
        if(items%i==0){
            flag=true
            break
        }
    }
    if(flag==false && items>=2)
    return true
    else
    return false
}
console.log(a.find(check));
console.log(a.findIndex(check));
console.log(a.map(check));
console.log(a.filter(check));


