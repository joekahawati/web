import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement,reset} from '../actions/index';

function Calculation() {
        const counter=useSelector(state=>state.counter);
        const dispatch=useDispatch();

        return ( 
            <div className="body">
                <h1 className="padding">Counter</h1>
                <h1 className="padding">{counter}</h1><br/>
                <table className="tablecenter">
                    <tr>
                        <td>
                            <button className="btn btn-secondary btn-lg btn-light" onClick={()=>dispatch(decrement(parseInt(document.getElementById("counterid").value)))}>-</button>    
                        </td>
                        <td></td>
                        <td>
                            <button className="btn btn-secondary btn-lg btn-light" onClick={()=>dispatch(increment(parseInt(document.getElementById("counterid").value)))}>+</button>
                        </td>
                    </tr>
                    <tr >
                        <td></td>
                        <td><button style={{marginTop:40}} className="btn btn-secondary btn-lg btn-light" onClick={()=>dispatch(reset())}>Reset</button></td>
                        
                    </tr>

                    <tr >
                        <td colSpan="3"><input style={{marginTop:40}} type="number" id="counterid" name="counter" min="1" defaultValue="1"/></td> 
                    </tr>
                </table>
                <p><b>You can choose your number</b></p>
                
            </div>
         );
    
}
 
export default Calculation;