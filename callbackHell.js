// function getUser(userId) {
//     return new Promise((resolve, reject) => {
//         // Asynchronous operation
//         setTimeout(() => {
//             const user = { id: userId, name: 'John' };
//             resolve(user);
//         }, 1000);
//     });
// }

// function getOrders(userId) {
//     return new Promise((resolve, reject) => {
//         // Asynchronous operation
//         setTimeout(() => {
//             const orders = ['Order1', 'Order2'];
//             resolve(orders);
//         }, 1000);
//     });
// }

// // Usage with Promise chaining
// getUser(123)
//     .then(user => {
//         console.log('User:', user);
//         return getOrders(user.id);
//     })
//     .then(orders => {
//         console.log('Orders:', orders);
//         // Additional asynchronous operations...
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


// const data1= async(a,callback)=>{
//     console.log("data1",a);
//    await callback()
// }

// const data2=()=>{
//     console.log("data2");
// }

// data1("abhinav",data2)


/////////////////////////////////////////////////////////////


const data1 = async (a, callback1) => {
    console.log("data1", a);

    // Simulating an asynchronous operation
    setTimeout(async () => {
        await callback1(() => {
            console.log("Inner callback");
        });
    }, 1000);
};

const data2 = () => {
    console.log("data2");
};

data1("abhinav", (callback2) => {
    // Simulating another asynchronous operation
    setTimeout(() => {
        console.log("Callback from data1 completed");
        callback2();
    }, 1500);
});
