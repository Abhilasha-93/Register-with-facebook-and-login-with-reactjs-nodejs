import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'


const AllPages = () => {
  return (
    <div>
      <Routes> 

        <Route path='/login' element={<Login/>}>
        </Route>
        <Route path='/' element={<Register/>}>
        </Route>
        <Route path='/home' element={<Home/>}>
        </Route>
     </Routes>
    </div>
  )
}

export default AllPages
