use ("person")


// db.user.insertOne(
//     {
//         name:"Sanjam",
//         sportData:[
//             {
//             name:"Circket",
//         frequency:1
//     },
//     {
//         name:"Football",
//         frequency:2
//     },
//     {
//         name:"BasketBall",
//         frequency:3
//     }
// ]
// })

// db.user.aggregate([{
//     $match:{}
// },{
//     $unwind: {
//       path:"$sportData",
//     //   includeArrayIndex: 'string',
//     //   preserveNullAndEmptyArrays: boolean
//     }
// }
// ])