import axios from 'axios';
import React, { useState } from 'react';
import Todo from './Todo';
import { baseurl } from '../utils/ConstantComponent';

const Popup = ({setPopup , setLoading ,popupcontent }) => {
  const [input, setInput] = useState(popupcontent.text); // Initialize the input state


const updateTodo = () => {

axios.put(`${baseurl}/update/${popupcontent.id}`, {todo : input})
.then((res) => {
  console.log(res.data);
  setLoading((prevstate) => !prevstate)
  setPopup(false)
}
)
}

  return (
    <div className='backdrop'>
      <div className="popup">
      <i class="fa-solid fa-xmark" onClick={()=>setPopup(false)}></i>
        <h1>Edit Todo</h1>

        <div className="popup__input_holder">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}  
            type='text' 
            placeholder='Update A TODO' 
            className='input' 
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
