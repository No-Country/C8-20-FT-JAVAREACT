import { useContext } from "react";
import { Context } from "./Context";

function ItemCount(){

    const [qty, setQty] = useContext(Context)

    function up(){
        setQty(qty + 1)
        if(qty > 9){
            alert('PARAAA!!! NO HAY MAS!')
            setQty(qty + 1)
        }
    }

    function down(){
        setQty(qty - 1)
        if(qty < 1){
            alert('al menos tenes que tener uno, no?')
            setQty(qty - 1)
        }
    }

    return(
        <>
            <div>
                <div>
                    <button onClick={()=>{down()}} >-</button>
                    <p style={{color:'white'}} >{qty}</p>
                    <button onClick={()=>{up()}}>+</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;