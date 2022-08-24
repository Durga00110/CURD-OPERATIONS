const Details = require('../models/curd')

exports.getalldata = (req,res)=>{
    Details.find()
    .then((result)=>{
        res.status(200).json({
            message:"get all data sucessfully",
            data:result
        })
    })
    .catch((error)=>{
        res.status(400).json({
            message:"internal error",
            data:error
        })
    })
}
exports.postdata = (req,res)=>{
     const postdata = new Details({
        name:req.body.name,
        job:req.body.job,
        language:req.body.language
     })
     postdata.save()
    .then((result)=>{
        res.status(200).json({
            message:"Save data sucessfully",
            data:result
        })
    })
    .catch((error)=>{
        res.status(400).json({
            message:"internal error",
            data:error
        })
    })
}
exports.updatedata = (req,res)=>{
    Details.updateOne({_id : req.params.id},{$set : {name  : req.body.name}})
    .then((result)=>{
        res.status(200).json({
            message:" data updated sucessfully",
            data:result
        })
    })
    .catch((error)=>{
        res.status(400).json({
            message:"internal error",
            data:error
        })
    })
}

exports.deletedata = (req,res)=>{
    Details.deleteOne({_id:req.params.id})
    .then((result)=>{
        res.status(200).json({
            message:" data deleted sucessfully",
            data:result
        })
    })
    .catch((error)=>{
        res.status(400).json({
            message:"internal error",
            data:error
        })
    })
}