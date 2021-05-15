const express = require('express');
const userModel = require('./models/user.js');
const studentModel = require('./models/student.js');
const courseModel = require('./models/course.js');
const enrollmentModel = require('./models/enrollment.js');

const app = express()


//Routes

app.get('/', async (req, res) => {
   try {
    res.status(200).json({message: "Root endpoint"});
   } catch (error) {
    res.status(500).send(error);
   }
});

//User CRUD
app.get('/users', async (req, res) => {
    const users = await userModel.find({});
        try {
            res.send(users);
        } catch (error) {
            res.status(500).send(error);
        }
});

//Get user by id
app.get('/users/:id', async (req, res) => {
    const user = await userModel.findById(req.params.id);
    if (!user) {
        return res.status(400).json({error: "User not found"});
    };
        try {
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
});

app.post('/users', async (req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/users/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!user) {
            return res.status(404).json({error: "User not found"});
        };
       res.status(200).send(user);
   } catch (error) {
       res.status(500).send(error);
   }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if(!user) res.status(404).send("User not found");
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Student CRUD
app.get('/students', async (req, res) => {
    const students = await studentModel.find({});
    try {
        res.send(students);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Get student by id
app.get('/students/:id', async (req, res) => {
    const student = await studentModel.findById(req.params.id);
    if (!student) {
        return res.status(400).json({error: "Student not found"});
    };
        try {
            res.send(student);
        } catch (error) {
            res.status(500).send(error);
        }
});

app.post('/students', async (req, res) => {
    const student = new studentModel(req.body);

    try {
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/students/:id', async (req, res) => {
    try {
        const student = await studentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!student) {
            return res.status(404).json({error: "Student not found"});
        };
        res.status(200).send(student);
   } catch (error) {
       res.status(500).send(error);
   }
});

app.delete('/students/:id', async (req, res) => {
    try {
        const student = await studentModel.findByIdAndDelete(req.params.id);
        if(!student) res.status(404).send("Student not found");
        res.status(200).json(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Course CRUD
app.get('/courses', async (req, res) => {
    const courses = await courseModel.find({});
    try {
        res.send(courses);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Get course by id
app.get('/courses/:id', async (req, res) => {
    const course = await courseModel.findById(req.params.id);
    if (!course) {
        return res.status(400).json({error: "Course not found"});
    };
        try {
            res.send(course);
        } catch (error) {
            res.status(500).send(error);
        }
});

app.post('/courses', async (req, res) => {
    const course = new courseModel(req.body);

    try {
        await course.save();
        res.status(201).send(course);

    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/courses/:id', async (req, res) => {
    try {
        const course = await courseModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!course) {
            return res.status(404).json({error: "Course not found"});
        };
        res.status(200).send(course);
   } catch (error) {
       res.status(500).send(error);
   }
});

app.delete('/courses/:id', async (req, res) => {
    try {
        const course = await courseModel.findByIdAndDelete(req.params.id);
        if(!course) res.status(404).send("Course not found");
        res.status(200).json(course);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Enrollment CRUD
app.get('/enrollments', async (req, res) => {
    const enrollments = await enrollmentModel.find({});
    try {
        res.send(enrollments);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Get enrollment by id
app.get('/enrollments/:id', async (req, res) => {
    const enrollment = await enrollmentModel.findById(req.params.id);
    if (!enrollment) {
        return res.status(400).json({error: "Enrollment not found"});
    };
        try {
            res.send(enrollment);
        } catch (error) {
            res.status(500).send(error);
        }
});

app.post('/enrollments', async (req, res) => {
    const enrollment = new enrollmentModel(req.body);

    try {
        await enrollment.save();
        res.status(201).send(enrollment);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.patch('/enrollments/:id', async (req, res) => {
    try {
        const enrollment = await enrollmentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!enrollment) {
            return res.status(404).json({error: "Enrollment not found"});
        };
        res.status(200).send(enrollment);
   } catch (error) {
       res.status(500).send(error);
   }
});

app.delete('/enrollments/:id', async (req, res) => {
    try {
        const enrollment = await enrollmentModel.findByIdAndDelete(req.params.id);
        if(!enrollment) res.status(404).send("Enrollment not found");
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).send(error);
    }
});

//add student to enrollment
app.patch('/enrollment/:id', async (req, res) => {
    try {
        const enrollment = await enrollmentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!enrollment) {
            return res.status(404).json({error: "Enrollment not found"});
        }
        enrollment.students.push({name: req.params.name, credits: req.params.credits});
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).send(error);
    }

});

module.exports = app;