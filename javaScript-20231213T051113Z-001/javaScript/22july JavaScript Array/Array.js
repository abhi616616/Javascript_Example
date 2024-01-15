//includes() return true if array contains item, otherwise return false.

// var a=[20,30,40,50,60,70,80,90,200,10]
// console.log(a.includes(10));

//indexof()
// var a=[20,30,40,50,60,70,80,90,200,10]
// console.log(a.indexOf(10));

//lastIndexOf()
// var a=[20,30,40,50,60,70,80,90,200,10]
// console.log(a.lastIndexOf());


//reverse()
// var a=[20,30,40,50,60,70,80,90,200,10]
// console.log(a);
// a.reverse()
// console.log(a);


//sort()  sort the numeric value .....ascending order  with using callback function().....
// var a=[20,10,43,54,9,6,87,32,23,32,11]
// console.log(a);
// function check(a,b){
//     return a-b
// }
// a.sort(check)
// console.log(a);


//sort() decending order for numeric value...... with using callback()
// var a=[20,10,43,54,9,6,87,32,23,32,11]
// console.log(a);
// function check(a,b){
//     return b-a;
// }
// a.sort(check)
// console.log(a);

//Array destructing...

// var a=[
//     1001,
//     "Abhinav Kumar",
//     "Software Engineer",
//     "35000",
//     "abhinav@gmail.com",
//     "8619943099",
//     "jehanabad",
//     "Bihar"
// ]

// console.log(
//     `
//     Id            :${a[0]}
//     Name          :${a[1]}
//     Designations  :${a[2]}
//     Salary        :${a[3]}
//     EmailId       :${a[4]}
//     Contact No    :${a[5]}
//     District      :${a[6]}
//     State         :${a[7]}
//     `
    
// );



//Array destructing...
// var a=[
//     1001,
//     "Abhinav Kumar",
//     "Software Engineer",
//     "35000",
//     "abhinav@gmail.com",
//     "8619943099",
//     "jehanabad",
//     "Bihar"
// ]
// var [id,name,des,salary,email,contact,district,state] = a

// console.log(
//     `
//     Id            :${id}
//     Name          :${name}
//     Designations  :${des}}
//     Salary        :${salary}
//     EmailId       :${email}
//     Contact No    :${contact}
//     District      :${district}
//     State         :${state}
//     `
// );
