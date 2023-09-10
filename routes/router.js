const router = require('express').Router();
const StudentController = require('../controllers/StudentController');
const studentController = new StudentController(); // Create an instance

// GET All Students
router.get('/students', studentController.getAllStudents.bind(studentController));

// Get particular student via id
router.get('/students/:id', studentController.ParticularStudents.bind(studentController));

// POST
router.post('/students', studentController.postStudent.bind(studentController));

// PUT (update)
router.put('/students/:id', studentController.updateStudent.bind(studentController));

// DELETE
router.delete('/students/:id', studentController.deleteStudent.bind(studentController));

module.exports = router;
