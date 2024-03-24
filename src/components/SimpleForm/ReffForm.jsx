import { useEffect, useRef } from "react";


const ReffForm = () => {
   const nameRef = useRef(null);
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   useEffect(()=>{
    nameRef.current.focus();
   })
    const handleSubmit= e =>{
        e.preventDefault();
        
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}> 
              
              <br />
              <input ref={nameRef} type="text" name="name" id="" />
              <br />
             <input ref={emailRef} defaultValue={'rojoni@sojoni.com'} type="text" name="email" id="" />
             <br />
             <input ref={passwordRef} type="password" name="password" id="" />
             <br />
             <input type="submit" value="Submit" />
          </form>
        </div>
    );
};

export default ReffForm;