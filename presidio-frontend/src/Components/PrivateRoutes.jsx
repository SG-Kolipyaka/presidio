import { Navigate, useLocation } from "react-router-dom";

import React from 'react'

const PrivateRoutes = ({children}) => {
    const token = localStorage.getItem('token');
    const location =useLocation()

if(!token){
 return   <Navigate to="/login" state={location.pathname} replace={true}/>
}else{
    return children
}

 
}

export default PrivateRoutes