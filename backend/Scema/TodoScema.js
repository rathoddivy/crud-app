const mongoose=require('mongoose');

const TodoSchema = new mongoose.Schema({


todo : {
    type : String,
    required : true
}


});

module.exports = mongoose.model('Todo',TodoSchema);  //Todo is the name of the collection in the database