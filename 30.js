use("person")

//* update
//? Set


//! UPDATES
/*one*/

// db.person.updateOne({"name.first":"carl","location.state":"wicklow"},{
//         $set:{
//                 email:"carl@gmail.com",
//                 phone:"980894562"
//             }
//         })




// db.person.findOne({"name.first":"carl"},{
//     name:1,
//     email:1,
//     phone:1
// })


/*
da yesko class sidechi free lancing 
garnu parla partime payena bhanne 
*/


// db.scores.insertMany([
//     {
//         name:"Sanjeev",
//         age:23,
      
//        highestScore:93,
//        location:{
//         temporary:"Ktm",
//         permanent:"Kavre"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:85
//          },  {
//             subject:"Social",
//             obtained:75
//          },  {
//             subject:"Math",
//             obtained:93
//          }
//        ]
//     },
//     {
//         name:"Anit",
//         age:24,
      
//        highestScore:95,
//        location:{
//         temporary:"Ktm",
//         permanent:"Nepalgunj"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:95
//          },  {
//             subject:"Social",
//             obtained:82
//          },  {
//             subject:"Math",
//             obtained:73
//          }
//        ]
//     },
//     {
//         name:"Dipesh",
//         age:23,
      
//        highestScore:98,
//        location:{
//         temporary:"Ktm",
//         permanent:"Bhaktapur"
//        },
//        scores:[
//         {
//             subject:"Science",
//             obtained:81
//          },  {
//             subject:"Social",
//             obtained:67
//          },  {
//             subject:"Math",
//             obtained:98
//          }
//        ]
//     }
// ])


// db.score.updateOne({"name":"Sanjeev"},{
//     $set:{
//         age:24,
//         "location.temporary":"kalaPaani"
//     }
// })

//? $INC
// db.scores.updateMany({},{
//       $inc:{
//         highestScore:-2
//       }
//     })


//? $MUL
// db.scores.updateMany({},{
//       $mul:{
//         highestScore:0.4
//       }
//     })

//? $RENAME

// db.scores.updateMany({},{
//     $mul:{
//       highestScore:0.4
//     }
//   })


// db.scores.updateMany({},{
//     $rename:{
//       highestScore:"lowestScore"
//     }
//   })

// db.scores.updateOne({totalAge:{$gte:20}},{
//     $rename:{
//       totalAge:"age"
//     }
//   })

//? $UNSENT ==> Remove field




db.scores.find()