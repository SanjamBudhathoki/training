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

//*=================================================================================================================================

// ! delete
// db.movies.deleteMany({})

//*========================================================================================================================

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

//or type //?$in
// db.movies.find({$or:[{rating:9.1},{rating:7.8},{rating:8.3}]})
// db.movies.find({rating:{$in:[9.1,7.8,8.3]}})

// db.movies.find({$or:[{director:"Nolan"},{director:"Elon"}]})
// db.movies.find({director:{$in:["Elon","Nolan"]}})

//not or //?$nin
db.movies.find({director:{$nin:["Elon","Nolan"]}})


//*==============================================================================================================================================================================

// ! find / GET
// db.movies.find({rating:7.8})
// db.movies.findOne({id:ObjectId("64bf9fe05d1c70f8e2c1e535")})

// db.movies.find()//?all

// db.movies.insertOne([{
// name:"Intersteller",
//         director:"Nolan",
//         runtime:150,
//         status:"Running",
//         rating:8.3,
//         genre:["Thriller","Action","War","Sci-Fi"]
// }])

//*======================================================================================================================================================================

// ! LOGICAL OPERATOR
//* $or
//* $and
//* $not
//* $nor

//! OR
// db.movies.find({$or:[{genre:"Action"},{runtime:120}]})

// ! NOR
// db.movies.find({$nor:[{genre:"Action"},{runtime:120}]})

//! AND
// db.movies.find({$and:[{runtime:{$gt:120}},{genre:"War"},{director:"Nolan"}]})
// db.movies.find({$and:[{status:"Running"},{genre:"Sci-Fi"}]})

// db.movies.find({$and:[{status:"Ended"},{genre:"War"},{rating:{$lt:8}}]})

//! NOT
// db.movies.find({director:{$ne:"Nolan"}})
// db.movies.find({rating:{$ne:7.8}})
//  db.movies.find({$and:[{director:{$ne:"Nolan"}},{rating:{$ne:7.8}}]})


// db.movies.find({$or:[{rating:9.1},{rating:7.8},{rating:8.3}]})
// db.movies.find()

//!================================================================================================
//*================================================================================================
//?================================================================================================

//! REGEX ==>SEARCH
db.Anime.find({
    summary:{
        $regex:"dome",
            $options:"i"
        }
    }
)
