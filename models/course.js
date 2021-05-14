const { Schema, model } = require('mongoose');

const courseSchema =  new Schema({
    name: String
});

const Course = model('Course', courseSchema);
module.exports = Course;