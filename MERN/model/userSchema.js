const mongoose = require('mongoose');
//const{Schema} = mongoose;
const UserSchema = new mongoose.Schema({
    fname: {
        type:String,
        required:true
    },
    lname: {
        type:String,
        required:true
    },
    loc: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    pass: {
        type:String,
        required: true
    },
    num: {
        type:Number,
        required:true,
        unique:true
    }
});
//const User = mongoose.model('USER', UserSchema);
//module.exports = User;


const Userschema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    
    email: {
        type:String,
        required:true,
        unique:true
    },
    
    num: {
        type:Number,
        required:true,
        unique:true
    },

    message: {
        type:String,
        unique:true
    }
});
//const U = mongoose.model('INFO', Userschema);
//module.exports = U;



const User = mongoose.model('user', UserSchema);
const Info = mongoose.model('info', Userschema);

module.exports = {
    User, Info
}