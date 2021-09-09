const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    // structure of the teacher model
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        
    },
    subject: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports  = mongoose.model('Teacher', teacherSchema);