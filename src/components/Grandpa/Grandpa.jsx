import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import './Grandpa.css'
import { createContext, useContext, useState } from "react";


export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);
const Grandpa = () => {
    const asset = 'diamond'
    const [money, setMoney] = useState(1000)
    return (
        <div className="grandpa">
            <h1>Grandpa</h1>
            <p>Net Money:{money}</p>
         <MoneyContext.Provider value={[money,setMoney]}>
         <AssetContext.Provider value="gold">
           <div className="flex">
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
            </div>
           </AssetContext.Provider>
          </MoneyContext.Provider>
        </div>
    );
};
/**
 * 1.create a context and expore it
 * 2. Add provider for the context with a value
 * 3.useContext to access value in the context API
 */

export default Grandpa;