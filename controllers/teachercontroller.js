const database = require('../config/database');
const Teacher = require('../models/teachermodel');

// read teacher by subject
exports.getTeacherBySubject = (req, res) => {
    Teacher.find({subject: req.params.subject})
    .then(teacher => {
        res.send(teacher);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving teacher."
        });
    });
};


// read all the teachers
exports.getAllTeachers = (req, res) => {
    Teacher.find()
    .then(teacher => {
        res.send(teacher);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving teacher."
        });
    });
;}

// create a new teacher
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Teacher name can not be empty"
        });
    }

    // Create a teacher
    const teacher = new Teacher({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,

    });

    // Save teacher in the database
    teacher.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the teacher."
        });
    });
};
