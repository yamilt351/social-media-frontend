import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    let valor = false
    if (valor) {
        return <Outlet/>
    }else {
        return <Navigate to={'/SignIn'}/>
    }
}

export default ProtectedRoutes