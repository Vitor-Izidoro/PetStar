import { useState,useContext } from 'react';
import { login as apiLogin } from '../../api/usersApi';
import { AuthContext } from '../../context/AuthContext';

const Login = ()=>{
  const { login } = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await apiLogin({ email,password });
      login(res.data.token);
      alert('Login successful!');
    }catch(err){ alert('Login failed'); }
  };

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
