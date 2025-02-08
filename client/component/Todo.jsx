import axios from 'axios'
import React from 'react'
import { baseurl } from '../utils/ConstantComponent'

const Todo = ({ text , id , setLoading ,setPopup , setPopupcontent}) => {

const deleteTodo = () => {

axios.delete(`${baseurl}/delete/${id}`)

.then(res => {

console.log(res.data);
setLoading((prevstate) => !prevstate)
})}




const updatetodo = () => {
  setPopupcontent({text, id})
  setPopup(true)

}
  return (
    <div className='todo'>
      {text}



      <div className='icons'>


      <i className="fa-regular fa-pen-to-square" onClick={updatetodo} ></i>
      <i className="fa-solid fa-trash"  onClick={deleteTodo}></i>

      </div>
    </div>
  )
}

export default Todo
