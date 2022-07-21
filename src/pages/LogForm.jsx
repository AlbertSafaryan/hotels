import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';
import '../css/Register.css';
import { setUser } from "../redux/actions/userActions";

export default function LogForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError(true);
    } else {
      const resp = await axios.get('http://localhost:3000/user', {
        params: {
          email,
          password
        }
      });

      if (resp.data.length) {
        dispatch(setUser(resp.data[0]));
        navigate('/');
      } else {
      setError(true);
      }
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Wrong username or password</h1>
      </div>
    );
  };
 
  return (
    <div className="form Register">
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
      <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn">
          Log In
        </button>
      </form>
    </div>
  );
}