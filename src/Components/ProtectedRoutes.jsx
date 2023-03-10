import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {

    const { currentUser } = useSelector((state) => state.user);
    
    if (currentUser._id) {
        return <Outlet/>
    }else {
        return <Navigate to={'/SignIn'}/>
    }
}

export default ProtectedRoutes