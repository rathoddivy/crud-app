const {Router} = require('express');   // rother difine
const {gettodos , savetodo ,DeleteTodo ,UpdateTodo}    = require('../Controller/todocontroller');  // get all the todos

const router = Router();

router.get("/get" , gettodos);  //get all the todos

router.post("/save" , savetodo);  //save the todo in the database

router.delete("/delete/:id" , DeleteTodo);  //delete the todo from the database

router.put("/update/:id" , UpdateTodo);  //update the todo in the database


module.exports = router;