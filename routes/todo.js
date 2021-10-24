var express = require('express')
const app = require('../app')
var router = express.Router()
var todoController= require('../controllers/todoController')


/* GET users listing. */
router.get('/',todoController.getTodos)

router.post('/',todoController.saveTodos)

module.exports = router;
