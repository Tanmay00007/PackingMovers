import React from 'react'
import { useState } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  name: "",
  mobile: "",
  from:"",
  to:"",
  date:""
}

const Form = () => {
  const [data, setData] = useState(initialState)
  const handleChange = (e) =>{
    const result = { ...data, [e.target.name]: e.target.value };
    setData(result)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const {name,mobile,from,to,date} = data;
    if(name && mobile && from && to){
      alert("Sent Successfully")
      return;
    }
  }
  return (
    <div class="w-full max-w-xs mt-36 mx-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Enter your Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" 
          value={data.name} onChange={handleChange} name='name'
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mobile Number
        </label>
        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="tel" placeholder="9999999999" 
           value={data.mobile} onChange={handleChange} name='mobile'
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Moving From
        </label>
        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" 
           value={data.from} onChange={handleChange} name='from'
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Moving To
        </label>
        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"  
           value={data.to} onChange={handleChange} name='to'
        /> 
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Shifting Date
        </label>
        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="Date"  
           value={data.data} onChange={handleChange} name='date'
        />
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Proceed
      </button>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>
  )
}

export default Form