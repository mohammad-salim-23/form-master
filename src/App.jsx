import { useState } from 'react'

import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefullForm from './components/SimpleForm/StatefullForm'
import ReffForm from './components/SimpleForm/ReffForm'
import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import Grandpa from './components/Grandpa/Grandpa'

function App() {
  const handleSignUp=data=>{
    console.log('sign up ',data);
}
const handleLogin=data=>{  
  console.log('update profile ',data);
}

  return (
    <>
  
  {/* <SimpleForm></SimpleForm> */}
  {/* <StatefullForm></StatefullForm> */}
  {/* <ReffForm></ReffForm> */}
  {/* <HookForm></HookForm> */}
  {/* <ReusableForm formTitle={'Sign up'}
   handleSubmit={handleSignUp}>
    <div>
      <h2>Sign Up</h2>
      <p>please sign up right now</p>
    </div>
   </ReusableForm>
  <ReusableForm formTitle={'Log in'} 
  submit={'update'} 
  handleSubmit={handleLogin}>
    <div>
      <h2>Update Profile</h2>
      <p>Always keep your profile updated</p>
    </div>

  </ReusableForm> */}
  <Grandpa></Grandpa>
    </>
  )
}

export default App
