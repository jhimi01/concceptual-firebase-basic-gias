import React, { useState } from 'react';
import './Register.css'; // import external CSS file
import Button from '../../component/Buttons/Button';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here, such as sending a request to a server to create a new user
  };

  return (
    <>

    <div style={{width: '50%', margin: '0 auto'}} className="register">
    <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name='name' placeholder='enter name'/>
        </label>
        <label>
          Email:
          <input type="email" name='email'  placeholder='email'/>
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='password'/>
        </label>
        <label>
          Confirm Password:
          <input type="password" name='confirm' placeholder='confirm password'/>
        </label>
        <button type="submit">Register</button>
      </form>
<hr />
   <div style={{textAlign: 'center'}}>
    <p>login with</p>
    <Button></Button>
   </div>
    </div>
    </>
  );
}

export default Register;
