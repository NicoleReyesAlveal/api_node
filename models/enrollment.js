const { Schema, model } = require('mongoose');
const Students = require('./student');

const enrollmentSchema =  new Schema({
    course: Number,
    students: [{
        student_id:  {
            type: Schema.Types.ObjectId, ref: 'Student'
        },
//        student: [Students],
        credits: Number
    }]
 });

const Enrollment = model('Enrollment', enrollmentSchema);
module.exports = Enrollment;