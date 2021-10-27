const { json } = require('body-parser');
const mongoose = require('../db/mongodb/connection');

require('../db/mongodb/models/todos')
const Todo = mongoose.model('Todo')



async function getTodos(req, res) {

    


    


    await Todo.find().then((data) => {

         res.status(200).send(data)


    }).catch((err) => {

        console.log("error is " + err)
        res.status(422).send('errror while fetching')
        return err;
    })
}

async function saveTodos(req, res) {

    let values = req.body;
 

    let todos = new Todo(values);



    await todos.save().then(() => {

        console.log('user is saved');
        res.status(200).send('saved')


    }).catch((err) => {

        console.log("error is " + err)
        res.status(422).send('errror while saving')
        return err;
    })
}



module.exports.saveTodos = saveTodos;
module.exports.getTodos = getTodos;