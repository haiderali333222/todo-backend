let mongoose = require('../connection')

let Schema = mongoose.Schema
let todoSchema = new Schema({
  name: {
      type:String,
      required:true
    
    }
}

)

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo