import React, { useState ,useContext} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../contexts/authContext';
import LoginCard from "../../../components/login";
import image from "../../../assets/images/login.svg"

const Login = () => {
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:4000/auth/login', credentials);
      if (response.status === 200) {
        const { token, userId ,userDetails} = response.data;
        if (token && userId) {
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);
          localStorage.setItem('userData', JSON.stringify(userDetails));
          updateUser(userDetails)
          navigate('/dashboard');
        } else {
         
          console.error('Unexpected response data:', response.data);
        }
      } else {
       
        console.error('Login failed:', response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div className="login">
      <div className="left_container"> <h3>Effortless Event Planning Starts Here - Sign in Now!</h3><div className="floating-image"><img src={image} alt="login_image"/></div></div>
      <div className="right_container"><LoginCard credentials={credentials} handleLogin={handleLogin} handleInputChange={handleInputChange}/></div>
     
      
    </div>
  );
};

export default Login;
