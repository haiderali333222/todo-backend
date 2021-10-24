const chai = require('chai');
const assert = chai.assert;
const Todo = require('../db/mongodb/models/todos');
describe('the add todo function ',()=>{
  
  it('should add a todo in our backend',(done)=>{
    


    let todos=new Todo({"name":"here is it"});
    assert.isNotNull(todos);
    assert.isObject(todos);
   done();
  })
})