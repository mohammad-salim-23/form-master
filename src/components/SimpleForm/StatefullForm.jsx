import { useState } from "react";


const StatefullForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(null);
    const [error, setError ] = useState('');
   const handleSubmit = (e)=>{
    e.preventDefault();
    if(password.length<6){
        setError('password must be greater than 6 characters');
    }else{
        setError(' ');
        console.log(email);
        console.log(password);
    }
   
   }
   const handleEmailChange =e =>{
    // console.log(e.target.value);

    setEmail(e.target.value);
   }
   const handlePassword = e =>{
    // console.log(e.target.value);
  
        setPassword(e.target.value);
    
   
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handlePassword} type="password" name="password" id="" required />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;