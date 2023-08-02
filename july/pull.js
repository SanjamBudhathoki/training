//!--------------------------------------------------------------------
use ("person")
//?--------------------------------------------------------------------

// db.students.insertMany([
//     { "name":"Bishal", "grades" : [ 85, 80, 80 ] },
//     { "name":"Milan", "grades" : [ 88, 90, 92 ] },
//     { "name":"Ayush", "grades" : [ 85, 100, 90 ] }
//  ])

//*---------------------------------------------------------------------
//! ARRAY UPDATE
/**
 * *push value on array--> //! $push
 * *remove vaue from array--> //! $pop || $pull
 */
//?---------------------------------------------------------------------

//! PUSH

//? one value add from last
// db.students.updateOne({name:"Milan"},{
    //     $push:{
        //         grades:95
        // }
        // })

//? multiple value add from last
// db.students.updateOne({name:"Ayush"},{
//     $push:{
//         grades:{$each:[71,81]}
//     }
// })

//?---------------------------------------------------------------------
// TODO : $addToSet
/** //* difference of add to set and push
 *  ?addToSet dose not care about repetation
 *  ?but push cares about it and dissoves
 */
//?---------------------------------------------------------------------

// db.students.updateOne({
//     name:"Bishal"
// },{
//     $addToSet:{
//         grades:{$each:[20,80,65,68,85,96,78]
//         }
//     }
// })

//?---------------------------------------------------------------------
//!POP --> REMOVE ONE 
//?---------------------------------------------------------------------

// db.students.updateOne({name:"Ayush"},{
//     $pop:{
//         grades:1//! 1(-1) indicate (first)last value of array
// }
// })

//?---------------------------------------------------------------------
/** //! $PULL --> remove items from array 
 * ? Which matches condition
*/
//?---------------------------------------------------------------------

// db.students.updateOne({name:"Milan"},{
//     $pull:{
//         grades:{$gte:91}
//     }
// })

//?---------------------------------------------------------------------
//* Modifier Position
//! PULL ALL
//?---------------------------------------------------------------------

db.students.updateOne({
    name:"Milan"
},{
    $pullAll:{
        grades:[88,100]
        }
    }
)





//!--------------------------------------------------------------------
// db.students.deleteMany({})
db.students.find()
//*---------------------------------------------------------------------
