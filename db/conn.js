const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.set('strictQuery',true);
mongoose.connect(DB).then(() => {
    console.log(`connection successful!`);

}).catch((err) => console.log(`Not connected`+err));

//const mongoose = require('mongoose');
const D = process.env.DATA;
mongoose.set('strictQuery',true);
mongoose.connect(D).then(() => {
    console.log(`connection successful!`);

}).catch((err) => console.log(`Not connected`));

