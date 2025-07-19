import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css'
import { FirebaseContext } from '../../store/FirebaseContex';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function 
Signup() {
const History = useHistory()
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
     firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('user').add({
          id:result.user.uid,
          username:username,
          phone:phone
          

        }).then(()=>{
            History.push('/login')
        })
      })
     })
     if(handleSubmit){
      
     }
     
     
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onClick={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setphone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
