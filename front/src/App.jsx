import React, { useEffect } from 'react'
import './App.css'
import Todo from './component/Todo'
import axios from 'axios'
import { useState } from 'react'
import { baseurl } from './utils/ConstantComponent'
import Popup from './component/Popup'
// src/App.jsx
import Signup from './component/signup'


const App = () => {

const [todos, setTodos] = useState([])  //
const [input, setInput] = useState('')
const [loading, setLoading] = useState(false)
const [popup, setPopup] = useState(false)
const [popupcontent, setPopupcontent] = useState({})



useEffect(() => {

  axios.get(`${baseurl}/get`)

.then((res) =>  setTodos(res.data))
.catch((err) => console.log(err))
},[loading]
)



const savetodo= () => {
  axios.post(`${baseurl}/save`, { todo: input })

.then(res => {
  console.log(res.data)

  setLoading((prevstate) => !prevstate)

  .setInput("")
  
  
})
.catch((err) => console.log(err))
};






  return (
   <main>
<div className='Container'>
<h1 className='title'>Enter Your Order</h1>


<div className='input_holder'>

<input value={input} onChange={(e)=>setInput(e.target.value)}  type='text' placeholder='We Make Sure You Love It !!  🙏' className='input' />
<button onClick={savetodo}>ORDER</button>
</div>



<div className='list'>
  {todos.map(el => (
    <Todo text={el.todo}  id={el._id} 
    
    setLoading={setLoading}
    setPopup={setPopup}
    setPopupcontent={setPopupcontent}
    />

  ))}
</div>




</div>


{popup && <Popup  setPopup={setPopup}  popupcontent={popupcontent} setLoading={setLoading}  />}


   </main>
  )
}

export default App
