
import Special from '../Special/Special';
import Friend from '../Friend/Friend';

const Cousin = ({name,asset}) => {
    return (
        <div>
           <h3>Cousin</h3>
           <p>{name}</p>
           <section>
         { asset &&  <Special asset={asset}></Special>}
         {name==='sadia' && <Friend> </Friend> }
           </section>
        </div>
    );
};

export default Cousin;