const mongoose = require('mongoose');

// DB-connection

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test');
    console.log('db connected...');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

// Schema
const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    age: {
      type: Number,
      required: true
    },
    course: {
      type: String,
      required: true
    }
  });

  // Model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student