import React from 'react'
import {Route,Routes} from "react-router-dom"
import Homepage from './Homepage'
import Login from '../Components/Login'
import PrivateRoutes from '../Components/PrivateRoutes'
import SignUp from '../Components/SignUP'
import SellHouse from '../Components/SellHouse'
import Edit from '../Components/Edit'
import BuyerHome from '../Components/BuyerHome'
import GetSeller from '../Components/GetSeller'


const AllRoutes = () => {
  return (
    <div> 
        <Routes>      
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/buy" element={<PrivateRoutes><BuyerHome/></PrivateRoutes>} />
            <Route path="/edit/:id" element={<PrivateRoutes><Edit/></PrivateRoutes>} />
            <Route path="/getseller/:id" element={<PrivateRoutes><GetSeller/></PrivateRoutes>} />
            <Route path="/sell" element={<PrivateRoutes><SellHouse/></PrivateRoutes>} />
            <Route path="*" element={<h1>404 Error</h1>} />
        </Routes>
    </div>
  )
}

export default AllRoutes