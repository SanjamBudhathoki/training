use ("person")

//?--------------------------------------------------------
//! PULL || PULL ALL

// db.scores.updateOne({ 
//     name:"Anit"
// },{
//     $pull:{
//         scores:{subject:"Data Science"}
// }
// })


// db.scores.updateOne({ 
//     name:"Anit"
// },{
//     $pull:{
//         scores:[{subject:"Data Science",obtained:73}]
// }
// })
//?-----------------------------------------------------------------------
//!PUSH


db.scores.updateOne({name:"Anit"},{
    $push:{
        scores:{$each:[{
        subject:"Computer",
        obtained:92
    },{
        subject:"Data Mining",
        obtained:89
    }]}
    }
})

db.scores.find()