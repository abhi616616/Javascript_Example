//using super() call the parent class method...
//super can be used to invoked immediate parent class method...
// class Parents {
//     show() {
//         console.log("print parents class");
//     }
// }
// class Child extends Parents {
//     show() {
//         console.log("print child class");
//     }
//     display(){
//         super.show()
//     }
// }
// let obj = new Child()
// obj.display()



//super() can be invoked to immediate parent class constructor

// class A{
//     constructor(){
//         console.log("parent contructor");
//     }
// }
// class B extends A{
//     constructor(){
//         super();
//         console.log("child class constructor");
//     }
// }
// let obj=new B() 



//super() example of constructor.....
// class Animal{
//     constructor(typeOfAnimal){
//         this.typeOfAnimal=typeOfAnimal;
//     }
//     animaltype(){
//         console.log(`${this.typeOfAnimal}`);
//     }
// }
// class Fly extends Animal{
//     constructor(typeOfAnimal,butterfly){
//         super(typeOfAnimal)
//         this.butterfly=butterfly;
//     }
//     flybutter(){
//         console.log(`${this.butterfly}`);
//     }
// }
// let obj=new Fly("dog","yellow");
// obj.flybutter()
// obj.animaltype()