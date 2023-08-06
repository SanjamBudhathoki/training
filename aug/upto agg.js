/** //! AGGERATIONS
 ** ----> ONLY read operation dose not change db
 * * aggerations ----> COmplex Query
 * ? $match  ------> Find the required condition
 * ? $group ------> helps to DATA COUNT 
 * 
 * page lesson aaye chin yo duta aaune
 * ? $skip ------> skip num of data as given
 * ? $limit------> restricts num of data flow
 *!?--
 * ? $sort ------> Arrange according to ACCENDING OR DECENGING 
 * ? $project ------> gives required output
 * ? $concat ------>add arrays value
 * ? $lookup ------>
 * ? $unwind ------>seprate any array
*/

use ("person")
// let pageNum=0
// for(i=1;1>=16;i++){
//      pageNum=pageNum+i
//    }

// db.person.aggregate(
//     [
//         {$match: { //!MATCH 
//           gender:"male",
//           "dob.age":{$gt:30}
//         }
// },{
//     $project: { //!Project
//         _id:0,
//         fullName:{$concat:["$name.first"," ","$name.last"]},
//         age:"$dob.age",
//         gender:1,
//         state:"$location.state",
//         phone:1,
//         email:1,
//     }
// },{
//     $sort: { //! SORT
//       age:1
//     }
// },
//     $skip:0 //! SKIP

// },{
//     $unwind:"$fullName" //! UNWIND
// },{
    // $group: { //! GROUP
    //     _id: "$gender",
    //     totalPerson:{$count:{}}
    //     }
    //   },
// {
//     $limit: 16 //! LIMIT
// },
// ]
// )

