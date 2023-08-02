//! use this database=> collection of table(collection)
use ("friendData")
// to do => BSON => binary object notation

//db.friendInfo.find()
//!CURD 
//? c=> create 
// ?insert one

// db.friendInfo.insertOne({
//     name :"santosh",
//     eduLevel:"BCT",
//     location :" pokhara"
// })

//? insert many
// db.friendInfo.insertMany({
//    { name :"shyam",
//     eduLevel:"BCT",
//     location :" pokhara"
//    },
//      { name :"Ram",
//     eduLevel:"BCE",
//     location :" KTM"
//    },
//      { name :"gita",
//     eduLevel:"BEL",
//     location :" Bhaktapur"
//    },
//      { name :"Sanjam",
//     eduLevel:"BCT",
//     location :" pokhara"
//    },
// })

//?R => GET/READ/RETRIVE
//  ?find one 
// db.friendInfo.findOne({name:"santosh"})

// //find many
// db.friendInfo.find({location:"KTM"})
// //!D=> delete /remove
// db.friendInfo.deleteOne({
//     name :"santosh"
// })
// db.friendInfo.deleteMany({
// location:"KTM"
// })

// ?U=> Update or Edit
//! UpdateOne 
// db.friendInfo.updateOne({
// name :"Sanjam"},{
   
//     $set: {
//      location:"BHTK"
//     }
// })

//!Update Many
//    db.friendInfo.updateMany({name:"sanjam"},{
//     /**
//      * field: The field name
//      * expression: The expression.
//      */
//     $set: {
//       eduLevel: "Masters"
//     }

//    })
// db.friendInfo.find()