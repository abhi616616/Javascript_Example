//object literal...........

// var emp={
//     id        :1001,
//     name      :"abhinav Kumar",  
//     contact   :"8619943099",
//     emailid  :"abhinav@gmail.com",
//     state    :"bihar"
// }
// console.log(emp);



//empty object literal......

// var emp={}
// emp.id=101
// emp["name"]="abhinav kumar"
// emp.salary="35000"
// emp['state']="bihar"
// emp['emial']="abhinav@gmail.com"
// emp.designation="software engineer"

// console.log(emp);


//new object literal
// var emp=new Object()
// emp.id=101
// emp["name"]="abhinav kumar"
// emp.salary="35000"
// emp['state']="bihar"
// emp['emial']="abhinav@gmail.com"
// emp.designation="software engineer"

// console.log(emp);


//Accessing object value with help of keys...........
// var emp=new Object()
// emp.id=101
// emp["name"]="abhinav kumar"
// emp.salary="35000"
// emp['state']="bihar"
// emp['emial']="abhinav@gmail.com"
// emp.designation="software engineer"

// console.log(emp['name']);
// console.log(emp.designation);
// console.log(emo);


//Accessing object value through loop
// we can use only (for in loop) for accessing object value through the loop
// var emp=new Object()
// emp.id=101
// emp["name"]="abhinav kumar"
// emp.salary="35000"
// emp['state']="bihar"
// emp['emial']="abhinav@gmail.com"
// emp.designation="software engineer"

// for(let key in emp){
//     console.log(key);    //getting only keys through this conditions.....
// }

//Accessing object through loop ............
// for(let key in emp){
//     console.log(key ,"=" ,emp[key]);   //getting keys and value with this conditions only......
// }


//adding an item to existing object....
// var emp=new Object()
// emp.id=101
// emp["name"]="abhinav kumar"
// emp.salary="35000"
// emp['state']="bihar"
// emp['emial']="abhinav@gmail.com"
// emp.designation="software engineer"

// console.log(emp);
// emp.district="jehanabad"
// emp["contactno"]="8619943099"
// console.log(emp);
// console.log(emp['id']);
// console.log(emp['name']);


//deleting object item.......
// var emp=new Object()
// emp.id=101
// emp["name"]="abhinav kumar"
// emp.salary="35000"
// emp['state']="bihar"
// emp['emial']="abhinav@gmail.com"
// emp.designation="software engineer"
// delete emp.name
// delete emp['state']
// delete emp.emial
// console.log(emp);


// Nesting of objects  (object inside the objects)......

// var emp = {
//     id: 101,
//     name: "abhinav Kumar",
//     salary: "35000",
//     dsg: "software engineer",
//     active: "true",
//     subject: ["MERN Stack","MEAN Stack","Java","PHP","Python"],
//     address: {
//         city: "jehanabad",
//         state: "Bihar",
//         pincode: "804422"
//     }
// }
// console.log(emp);
// console.log(emp.name);
// console.log(emp.address);
// console.log(emp.subject);
// console.log(emp.subject[2]);
// console.log(emp.subject[3]);
// console.log(emp.address);
// console.log(emp.address.city);
// console.log(emp.address.pincode);



//function in object..........  using this keyword......
// var emp={
//     id       :1001,
//     name     :"Abhinav Kumar",
//     salary   :35000,
//     age      :25,
//     state    :"bihar",

//     display(){
//         console.log(
//             `
//                 Id      :${this.id}   // this keyword is represent to current object.....
//                 Name    :${this.name}
//                 Salary  :${this.salary}
//                 Age     :${this.age}
//                 State   :${this.state}
//             `
// ); 
//     }
// }
// emp.display()



// getter and setter functions
// get properties of exapmle
// this keyword is represent to current object.....

// var emp={
//     id       :1001,
//     name     :"Abhinav Kumar",
//     salary   :35000,
//     age      :25,
//     state    :"bihar",

//     get display(){
//         console.log(
//             `
//                 Id      :${this.id}   
//                 Name    :${this.name}
//                 Salary  :${this.salary}
//                 Age     :${this.age}
//                 State   :${this.state}
//             `
// ); 
//     }
// }
// emp.display


// var emp={
//     id       :1001,
//     name     :"Abhinav Kumar",
//     salary   :35000,
//     salary1  :40000,
//     age      :25,
//     state    :"bihar",
//     setSalary(sal){
//         this.salary1=sal
//     },
//     get display(){
//         console.log(
//             `
//                 Id      :${this.id}   
//                 Name    :${this.name}
//                 Salary  :${this.salary}
//                 Salary1 :${this.salary1}
//                 Age     :${this.age}
//                 State   :${this.state}
//             `
// ); 
//     }
// }
// emp.setSalary(80000)
// console.log("updated salary is",emp.salary);
// emp.display



//setter properties
// set properties     with the help of function we can update the value/........
// set properties......


// var emp={
//     id       :1001,
//     name     :"Abhinav Kumar",
//     salary   :35000,
//     age      :25,
//     state    :"bihar",
//     set setSalary(sal){
//         this.salary=sal
//     },
//     get display(){
//         console.log(
//             `
//                 Id      :${this.id}   
//                 Name    :${this.name}
//                 Salary  :${this.salary}
//                 Age     :${this.age}
//                 State   :${this.state}
//             `
// ); 
//     }
// }
// emp.setSalary=80000
// emp.display




//object destructuring.....
// var emp={
//     id       :1001,
//     name     :"Abhinav Kumar",
//     salary   :35000,
//     age      :25,
//     state    :"bihar",
// }

// var {id,name,salary,age,state} = emp
// console.log(
//     `
//     Id       :${id}
//     Name     :${name}
//     Salary   :${salary}
//     Age      :${age}
//     State    :${state}
//     `
//     );  




//object constructor or object prototype
// in javascript we can make class in two types..
// 1 with the help of function..
// 2 with the help of class keyword....

// var employee =function(id,name,age,salary,state){
//     this.id=id
//     this.name=name
//     this.age=age
//     this.salary=salary
//     this.state=state
// }

// var e1=new employee(101,"abhinav kumar","25",35000,"bihar")
// var e2=new employee(102,"abhinav sharma","25",35000,"bihar")
// var e3=new employee(103,"abhinav singh","25",35000,"bihar")

// console.log(e1);
// console.log(e2);
// console.log(e3);




//example
// var employee=function(id=1,name="abhinav"){
//     this.id=id
//     this.name=name
// }
// var e1=new employee()
// console.log(e1);



    




















