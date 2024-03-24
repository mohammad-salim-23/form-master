import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <div className="flex">
                <Myself asset={asset}>
                </Myself>
                <Brother></Brother>
            </div>
        </div>
    );
};

export default Dad;