use ("person")

db.person.aggregate([
    {$match:
        {
            gender:"male",
        "dob.age":{$gt:30}}
        
    },{
        $project:{
            _id:0,
            fullName:{$concat:["$name.first"," ","$name.last"]},
            gender:1,
            age:"$dob.age",
            email:1,
            city:"$location.city",
            userName:"$login.username"
        }
    },{
        $sort:{age:-1
        }
    },
    {$skip:10},{$limit:5}]
    )
