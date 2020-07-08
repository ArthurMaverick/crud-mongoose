import mongoose from 'mongoose';


const studentSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: true
  },
  lastModified: {
    type: Date,
    default: Date.now,
  }

});

const studentModel = mongoose.model('student', studentSchema, 'student')


export { studentModel }