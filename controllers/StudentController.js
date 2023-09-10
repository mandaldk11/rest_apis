const Student = require('../model');

class StudentController {

    // get
    async getAllStudents(req, res) {
        try {
            const data = await Student.find({});
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async ParticularStudents(req, res) {
        let id = req.params.id
        try {
            const data = await Student.findOne({ _id: id });
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // post 

    async postStudent(req, res) {
        try {
            const student = new Student(req.body);
            await student.save();
            res.json({ msg: 'Student saved successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    // update 

    async updateStudent(req, res) {
        try {
            const data = await Student.findOneAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name } }, { new: true });
            if (!data) {
                res.status(404).json({ error: 'Student not found' });
            } else {
                res.json(data);
            }
        } catch (err) {
            res.status(500).json({ error: 'Error updating student' });
        }
    }

    // deleter

    async deleteStudent(req, res) {
        try {
            const data = await Student.findOneAndDelete({ _id: req.params.id });
            if (!data) {
                res.status(404).json({ error: 'Student not found' });
            } else {
                res.json({ msg: `deleted item ${req.params.id} successfully...1` });
            }
        } catch (err) {
            res.status(500).json({ error: 'Error deleting student' });
        }
    }

}

module.exports = StudentController