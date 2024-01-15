//dynamic square print 

// function fun(){
//     var n=5;
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//             document.write("*")
//         }
//         document.write("<br>")
//     }
// }
// fun()



//Hollow Star pattern printing....

// function fun(){
//     var n=7;
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n;j++){
//           if(i>=2 && j>=2 && i<=n-1 && j<=n-1){
//             document.write(" &nbsp ")
//           }
//           else{
//             document.write("*")
//           }
//         }
//         document.write("<br>")
//     }
// }
// fun()



let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);