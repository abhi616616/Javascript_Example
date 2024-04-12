let data1 = {
    "data": [
        { "username": "rmamta", "createdTs": "2022-06-09T12:11:34.723Z", "deviceId": "13197274", "totalEcgTaken": 1 },
        { "username": "gagan-hitesh", "createdTs": "2022-07-11T09:25:10.254Z", "deviceId": "13197274", "totalEcgTaken": 2 },
        { "username": "gagan-hari", "createdTs": "2022-07-11T13:53:29.109Z", "deviceId": "13197274", "totalEcgTaken": 3 },
        { "username": "gagan-tania", "createdTs": "2022-07-11T16:45:00.463Z", "deviceId": "13197274", "totalEcgTaken": 4 }
    ]
}
// console.log("data1",data1);

// data1 = data1.data.sort((a, b) => b.totalEcgTaken - a.totalEcgTaken)
// console.log(data1);

data1 = data1.data.sort((a, b) => b.totalEcgTaken - a.totalEcgTaken)
console.log(data1);

// data1=data1.data.filter((item)=>{
//     // item!==null
//     totalEcgTaken=item.totalEcgTaken,
//     console.log(totalEcgTaken)
// })

// // data1 = data1.data.filter((item) => item !== null);

// console.log("data1",data1);


// // let x=data1.sort(function(a, b){
// //     return a-b
// // });


// let data1 = [
//         { "username": "rmamta", "createdTs": "2022-06-09T12:11:34.723Z", "deviceId": "13197274", "totalEcgTaken": 1 },
//         { "username": "gagan-hitesh", "createdTs": "2022-07-11T09:25:10.254Z", "deviceId": "13197274", "totalEcgTaken": 3 },
//         { "username": "gagan-hari", "createdTs": "2022-07-11T13:53:29.109Z", "deviceId": "13197274", "totalEcgTaken": 2 },
//         { "username": "gagan-tania", "createdTs": "2022-07-11T16:45:00.463Z", "deviceId": "13197274", "totalEcgTaken": 4 }
//     ]

// data1 = data1.sort((a, b) => a.totalEcgTaken - b.totalEcgTaken)
// console.log(data1);

