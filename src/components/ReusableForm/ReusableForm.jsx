

const ReusableForm = ({formTitle, submit='submit',handleSubmit, children}) => {
    const handleLocalSubmit=e=>{
        e.preventDefault();
        const data={
            name:e.target.name.value,
           email:e.target.email.value,
           phone:e.target.phone.value,

        }
        handleSubmit(data);
    }
    return (
        <div>
            {children}
                <form onSubmit={handleLocalSubmit}> 
              
              <br />
              <input type="text" name="name" id="" />
              <br />
             <input type="text" name="email" id="" />
             <br />
             <input type="text" name="phone" id="" />
             <br />
             <input type="submit" value={submit} />
          </form>
        </div>
    );
};

export default ReusableForm;