// limit
//? project
//! sort
//* skip

use("netflix")

//! PROJECT
// db.Anime.find({name:"Under the Dome"},{
//     name:1,
//     status:1,
//     genres:1,
    // summary:1,
// })

//! LIMIT
// db.Anime.find({},{
//     name:1,
//     status:1,
//     genres:1,
//     summary:1,
// }).limit(2)

//! SKIP
// db.Anime.find({rating:{$gt:7}},{
//     name:1,
//     status:1,
//     genres:1,
//     summary:1,
// }).skip(3).limit(2)

//! SORT
// db.Anime.find({"rating.average":{$gt:7}},{name:1,
//         rating:1,
//         genres:1,}).sort({"rating.average":-1})

// db.Anime.find({runtime:{$lt:100}},{name:1,
// runtime:1,
// status:1,
// _id:0}).sort({name:-1})


