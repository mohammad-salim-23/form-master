import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
           <section>
           <h2>Aunty</h2>
            <Cousin name={'sadia'}></Cousin>
           </section>
           
            <p>Money:{money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000 tk</button>

        </div>
        

    );
};

export default Aunty;