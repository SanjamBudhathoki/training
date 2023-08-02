use("3PM")

// db.friends.insertOne([{
//     name:"Sanjam Budhathoki",
//     hobbies:["Flute","Books",{Games:[{
//         inDoor:"Chess",
//         mobileGames:"Free Fire"
//     }]}],
//     sportData:[{
//         title:"Football",
//         frequency:1,
//     },{
//         title:"Volley BAll",
//         frequency:2,
//     },{
//         title:"Basketball",
//         frequency:3
//     }]
    
// }])

// db.friends.insertMany([
//     {
//       name:"Rohan",
//       hobbies:["Singing","Books"],
//       sportData:[
//         {
//           title:"Football",
//           frequency:3
//         },
//         {
//           title:"Cricket",
//           frequency:2
//         }
//       ]
//     },
//     {
//       name:"Dipesh",
//       hobbies:["Books","Guitar","Hiking"],
//       sportData:[
//         {
//           title:"Football",
//           frequency:5
//         },
//         {
//           title:"Tennis",
//           frequency:1
//         },
//         {
//           title:"Volleyball",
//           frequency:6
//         },
//       ]
//     },
//     {
//       name:"Aakash",
//       hobbies:["Hiking","Foods","Singing"],
//       sportData:[
//   {
//     title:"E-gaming",
//     frequency:3
//   },
//   {
//     title:"Football",
//     frequency:2
//   },
//   {
//     title:"Basketball",
//     frequency:7
//   }
//       ]
//     }
//   ])


// db.friends.find({$or:[{hobbies:"Books"},{hobbies:"Foods"}]})
// db.friends.find({hobbies:{$in:["Books","Food"]}})

//All  //?$all //! alternative of and  
// db.friends.find({
//     hobbies:{$all:["Books","Guitar"]}
// })

// ! $size
// db.friends.find({hobbies:{$size:2}})

// ! $ELEMENT MATCH
// db.friends.find({
//     sportData:{$elemMatch:{title: "Cricket",
//     frequency:{$lt:3}}}
// })

//*==============================================================================================================================================================
