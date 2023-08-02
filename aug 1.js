use ("person")

//! UPDATE ARRAY
// db.scores.updateOne({
//     name:"Sanjeev",
//     // "scores.subject":"Social"
// },
// {
//     $inc:{
//             "scores.$[].obtained":-9
//  //! $ ==> MAtching // [] all select
//         }
//     })

// db.scores.updateOne({
//     name:"Sanjeev",
//     // "scores.subject":"Social"
//     $set:{
//             "scores.$[element].obtained":70
//     //! $ ==> MAtching // [] all select
//         }
// },
// {
//     arrayFilters:[{"element.obtained":{$gt:60}}]
//     })

db.students.insertMany([
    { "name":"Bishal", "grades" : [ 85, 80, 80 ] },
    { "name":"Milan", "grades" : [ 88, 90, 92 ] },
    { "name":"Ayush", "grades" : [ 85, 100, 90 ] }
 ])
db.students.find()