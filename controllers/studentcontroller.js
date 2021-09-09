const database = require('../config/database');
const Student = require('../models/studentmodel');


//create and save a student record
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
//create a new student
const student = new Student({
    name: req.body.name,
    email: req.body.email,
    class: req.body.class,
    section: req.body.section,
    teacher: req.body.teacher

});
//save student in the database
student.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the student."
    });
});
};

// Retrieve and return all students from the database.
exports.getAll = (req, res) => {
    Student.find()
    .then(students => {
        res.send(students);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
};

// get student by section and class
exports.findBySectionAndClass = (req, res) => {
    Student.find({section: req.params.section, class: req.params.class})
    .then(students => {
        res.send(students);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
};

//update student by id
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        class: req.body.class,
        section: req.body.section,
        teacher: req.body.teacher
    }, {new: true})
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.id
            });
        }
        res.send(student);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating student with id " + req.params.id
        });
    });
};

// delete student by id
exports.delete = (req, res) => {
    Student.findByIdAndRemove(req.params.id)
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.id
            });
        }
        res.send({message: "Student deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete student with id " + req.params.id
        });
    });
};

// get list of students assigned to a teacher
exports.getStudentsByTeacher = (req, res) => {
    Student.find({teacher: req.params.teacher})
    .then(students => {
        res.send(students);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
};


 