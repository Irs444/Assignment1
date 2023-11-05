
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

    const navigate = useNavigate();
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('main')));

    if(currentUser!==null){
        return children;
    }else{
        Swal.fire({
            title: 'Error',
            text: 'You are not logged in',
            icon: 'error'
        });
        navigate('/Login');
    }
}

export default UserAuth