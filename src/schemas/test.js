import mongoose from 'mongoose';

const testSchema = mongoose.Schema({
    CNA : {
        type : String
    },//Company Number
    CNU : {
        type : String,
        unique : true
    },
});

var test = mongoose.model('test', testSchema);

module.exports = test;