/** //! AGGERATIONS
 ** ----> ONLY read operation dose not change db
 * * aggerations ----> COmplex Query
 * ? $match  ------> Find the required condition
 * ? $group ------>
 * 
 * page lesson aaye chin yo duta aaune
 * ? $skip ------> skip num of data as given
 * ? $limit------> restricts num of data flow
 *!?--
 * ? $lookup ------>
 * ? $sort ------> Arrange according to ACCENDING OR DECENGING 
 * ? $unwing ------>
 * ? $project ------> gives required output
 * ? $concat ------>add arrays value
*/

use ("person")
// let pageNum=0
// for(i=1;1>=16;i++){
//      pageNum=pageNum+i
//    }

db.person.aggregate(
    [
        {$match: { 
          gender:"male",
          "dob.age":{$gt:30}
        }
},{
    $project: {
        _id:0,
        fullName:{$concat:["$name.first"," ","$name.last"]},
        age:"$dob.age",
        gender:1,
        state:"$location.state",
        phone:1,
        email:1,
    }
},{
    $sort: {
      age:1
    }
},{
    // $skip:(pageNum-1)*$limit
    $skip:0

},
{
    $limit: 16
},
]
)
