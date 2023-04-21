import React, { useState } from 'react';
import './Register.css'; // import external CSS file
import Button from '../../component/Buttons/Button';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/Firebase.config';
import { FaEye ,FaEyeSlash} from "react-icons/fa";

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const auth = getAuth(app)

  const handleregister =(e)=>{
    e.preventDefault();

    // if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    //   console.log('thik ache password')
      
    //   // setError('')
    // }else{
    //   setError('Minimum eight characters, at least one letter and one number')
    //   // return
    // }

    // form.reset()
   if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      setError('')
    }).catch(error => { 
      setError(error.message)
      console.log(error.message)
    })
   }else{
    setError('Minimum eight characters, at least one letter and one number')
    console.log('email and password needed')
    return
   }
}

const showbutton=()=>{
        setShow(!show) 
}

const eyeIcon = password.length > 0 && (
  <div onClick={showbutton}>
    {show ? <FaEyeSlash style={{ marginLeft: '-20px', cursor: 'pointer' }} /> : <FaEye style={{ marginLeft: '-20px', cursor: 'pointer' }} />}
  </div>
);


  return (
    <>

    <div style={{width: '50%', margin: '0 auto'}} className="register">
    <h1>Register</h1>
      <form onSubmit={handleregister}>
        <label>
          Name:
          <input type="text" name='name' placeholder='enter name' required/>
        </label>


        <label>
          Email:
          <input type="email" name='email'  placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} required/>
        </label>


        <label>
          Password:
         <div style={{ display: 'flex', alignItems: 'center' }}>
    <input type={show ? 'text' : 'password'} name='password' placeholder='password' onChange={(e) => { setPassword(e.target.value) }} required/>
    {eyeIcon}
  </div>
        </label>
        <p style={{color: 'red'}}>{error}</p>
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
