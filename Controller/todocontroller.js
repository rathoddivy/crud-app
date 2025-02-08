const TodoScema = require('../Scema/TodoScema');

module.exports.gettodos = async (req, res) => {

const todos = await TodoScema.find();   //find all the todos from the database

res.send(todos);   //send the todos to the client

}






module.exports.savetodo = async (req, res) => {  //save the todo in the database
const { todo } = req.body;  //get the todo from the request body

TodoScema.create({ todo })    //create the todo in the database
.then(data =>{                //if the todo is created successfully then send the response to the client
console.log("saved successfully...");
res.status(201).send(data);


})

.catch((err) => {
    console.log(err)
     res.send({error : err , msg : "something went wrong"});

});     //if there is any error then send the error to the client
}





module.exports.UpdateTodo = async (req, res) => {  //save the todo in the database

    const{id}=req.params;  //get the id from the request params

    const { todo } = req.body;  //get the todo from the request body
    
    TodoScema.findByIdAndUpdate(id,{ todo }) //update the todo in the database
    .then(() =>{                             //if the todo is created successfully then send the response to the client
     res.send("updated successfully...");
 })
 .catch((err) => {
    console.log(err)
     res.send({error : err , msg : "something went wrong"});

});               //if there is any error then send the error to the client
    }


    
module.exports.DeleteTodo = async (req, res) => {  //save the todo in the database

    const{id}=req.params;  //get the id from the request params

 
    
    TodoScema.findByIdAndDelete(id) //delete the todo in the database
    .then(() =>{                        
     res.send("Delete successfully...");
 })
 .catch((err) => {
    console.log(err)
     res.send({error : err , msg : "something went wrong"});

});                //if there is any error then send the error to the client
    }