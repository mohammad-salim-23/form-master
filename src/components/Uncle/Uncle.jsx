import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div className="grandpa">
          <h2>Uncle</h2>  
          <Cousin name={'wasif'} asset={asset}></Cousin>
        </div>
    );
};

export default Uncle;
