const { Schema, model } = require('mongoose');

const studentSchema =  new Schema({
    name: String
});

const Student = model('Student', studentSchema);
module.exports = Student;