const mongoose = require('mongoose');
const bcrypt =require('bcrypt')
// DB-connection

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb+srv://mandaldk11:apunKaRestApi@cluster1.vkfe6ac.mongodb.net/?retryWrites=true&w=majority');
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
    },
    password: {
      type: String,
      required: true
    },
    confirm_password: {
      type: String,
      required: true
    }
  });
  // password hashing --
  studentSchema.pre('save',async function(next){
    if (this.isModified('password' || 'confirm_password')) {
      this.password = await bcrypt.hash(this.password,12);
      this.confirm_password = await bcrypt.hash(this.confirm_password,12);
    }
    next()
   
  })

  // Model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student