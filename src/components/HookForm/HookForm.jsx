import useInputState from "../../hooks/useInputState";


const HookForm = () => {
   
    // const [email,handleEmailChange] = useInputState('saka@jjj')
    const emailState= useInputState('salimali@gmail');
    const handleSubmit=e=>{
        e.preventDefault();
        console.log('form data',emailState.value)
    }
    return (
        <div>
              <form onSubmit={handleSubmit}> 
              
              <br />
              <input type="text" name="name" id="" />
              <br />
             {/* <input value={email} onChange={handleEmailChange} type="text" name="email" id="" /> */}
             <input  type="email" name="" id="" />
             <br />
             <input {...emailState} type="password" name="password" id="" />
             <br />
             <input type="submit" value="Submit" />
          </form>
        </div>
    );
};

export default HookForm;