module.exports = (app) => {
    const student = require('../controllers/studentcontroller');
    const teacher = require('../controllers/teachercontroller');

    // add new student
    app.post('/api/student', student.create);

    // get all students
    app.get('/api/student', student.getAll);

    // get student by section and class
    app.get('/api/student/:section/:class', student.findBySectionAndClass);

    // update student by studentID
    app.put('/api/student/:id', student.update);

    // delete student by studentID
    app.delete('/api/student/:id', student.delete);

     // get list of students assigned to teacher
     app.get('/api/student/:teacher', student.getStudentsByTeacher);

    //get teacher by subject
    app.get('/api/teacher/:subject', teacher.getTeacherBySubject);

    // read all the teachers 
    app.get('/api/teacher', teacher.getAllTeachers);

    //add new teacher
    app.post('/api/teacher', teacher.create);


};

