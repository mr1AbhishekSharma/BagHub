const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/scatch");


const userSchema=mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart:{
        type:Array,
        default:[]
    },
    isadmin: Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact: Number,
    picture: String,
});

model.exports=mongoose.model("user",userSchema);