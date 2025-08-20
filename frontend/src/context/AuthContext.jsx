import { createContext,useState,useEffect } from 'react';
import { getProfile } from '../api/usersApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children })=>{
  const [user,setUser] = useState(null);
  const [token,setToken] = useState(localStorage.getItem('token'));

  useEffect(()=>{
    if(token){ getProfile(token).then(res=>setUser(res.data)).catch(()=>setUser(null)); }
  },[token]);

  const login = (t)=>{
    localStorage.setItem('token',t);
    setToken(t);
  };

  const logout = ()=>{
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  return <AuthContext.Provider value={{ user,token,login,logout }}>{children}</AuthContext.Provider>;
};
