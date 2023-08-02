use ("netflix")

// ! create

// ? insertMany
// db.movies.insertMany([{
//         name:"Oppenheimer",
//         director:"Nolan",
//         runtime:180,
//         status:"Running",
//         rating:8.3,
//         genre:["Thriller","Action","War","Sci-Fi"]
//     },
//     {
//             name:"Dune",
//             director:"Robert",
//             runtime:160,
//             status:"Ended",
//             rating:7.8,
//             genre:["Adventure","Action","War","Sci-Fi"]
//         }  ,
//         {
//             name:"Shawshank Redemption",
//             director:"Elon",
//             runtime:120,
//             status:"Ended",
//             rating:9.1,
//             genre:["Prison","Drama","Crime Fiction","Mystery"]
//         }
// ])

// ! delete
// db.movies.deleteMany({})

// greater//! $gt
// db.movies.find({rating:{$gt:8}})

//less than//! $lt
// db.movies.find({rating:{$lt:8}})

// less than or equall to//! $lte
// db.movies.find({rating:{$lte:8.3}})


// greater than or equal to//! $gte
// db.movies.find({rating:{$gte:8.3}})

// ? $re ===> (:)
// db.movies.find({runtime:{$eq:120}})

// not equal to//? $ne
// db.movies.find({status:{$ne:"Running"}})

// ! find / GET
// db.movies.find({rating:7.8})
// db.movies.findOne({id:ObjectId("64bf9fe05d1c70f8e2c1e535")})

// db.movies.find()//?all

// ! LOGICAL OPERATOR
//* $or
//* $and
//* $not
//* $nor

//! OR
// db.movies.find({$or:[{runtime:180},{runtime:120}]})

//! AND
// db.movies.find()//?all
db.movies.find()
