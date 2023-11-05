

import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginAuth = ({children}) => {

  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('main')));

    if(currentUser === null){
        return children;
    }else{
        
        return <Navigate to="/add" />
    }
}

export default LoginAuth;