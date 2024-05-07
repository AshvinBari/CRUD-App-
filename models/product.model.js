const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please provide a name for'],
        },

        txt:{
            type:Number,
            require:true,
            default:0
        },
        rate:{
            type:Number,
            require:true,
            default:0
        },
        // image:{
        //     type : String,
        //     required:true
        // },
   },

   {
timestamps: true
   }
);

const Product = mongoose.model("product",productSchema)
module.exports=Product