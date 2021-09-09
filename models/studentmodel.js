const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({

    // name email class section assigned teacher
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
       
    },
    class: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});
 




module.exports = mongoose.model('Student', studentSchema);
