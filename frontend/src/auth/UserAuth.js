
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

    const navigate = useNavigate();
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    if(currentUser!==null){
        return children;
    }else{
        Swal.fire({
            title: 'Error',
            text: 'You are not logged in',
            icon: 'error'
        });
        navigate('/main/Login');
    }
}

export default UserAuth