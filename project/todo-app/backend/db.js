const mongoose  = require('mongoose')

mongoose.connect("mongodb+srv://admin:015uk6K28qGd7xik@cluster0.1imslpk.mongodb.net/todo-app")

const schema = mongoose.schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todo', schema)

module.exports = {
    todo
}