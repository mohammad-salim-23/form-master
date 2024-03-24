

const SimpleForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
              
                <br />
                <input type="text" name="name" id="" />
                <br />
               <input type="text" name="email" id="" />
               <br />
               <input type="text" name="phone" id="" />
               <br />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;
