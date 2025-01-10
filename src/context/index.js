import { getRequest, postRequest } from '@/utils/api';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userToken, setUserToken] = useState("")
    const [authStatus, setAuthStatus] = useState("");

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

     
    useEffect(() => {
        const authToken = getCookie('token');

        if (authToken) {
            getUser(authToken)
            setUserToken(authToken)
        }else {
            handleLogout(); // Redirect if token is missing
          }
    }, [authStatus]);

    // const handleLogout = () => {
    //    //document.cookie = `token=; Max-Age=0; path=/; SameSite=Lax;` 
    //    document.cookie = `token=; Max-Age=0; path=/; domain=.happypeopleai.com; Secure; SameSite=Lax`;
    //     setUser(null); // Clear the user state
    //     setUserToken(""); // Clear the token state     
    // };

    
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    //document.cookie = `token=; Max-Age=0; path=/; SameSite=Lax;`
    document.cookie = `token=; Max-Age=0; path=/; domain=.happypeopleai.com; Secure; SameSite=Lax`;

    setUser(null); // Clear the user state
    setUserToken(""); // Clear the token state  
    setAuthStatus(`Logout successfully ${new Date()}`)  
};

    const getUser = async (token) => {
        try {
            const res = await postRequest(
                "/user/getUserDetails",
                {},
                { Authorization: `Bearer ${token}` }
            );
            setUser(res?.data)
            //console.log("userdetails",res?.data)
        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <UserContext.Provider value={{ user, userToken ,setAuthStatus}}>
            {children}
        </UserContext.Provider>
    );
};