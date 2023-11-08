
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const currentuser = JSON.parse(sessionStorage.getItem('main'));
    const [loggedIn, setLoggedIn] = useState(currentuser !== null);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('main');
        setLoggedIn(false);
        navigate('/login');
    }
    
    return (
        <UserContext.Provider value={{
            loggedIn, setLoggedIn, logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext);

export default useUserContext;