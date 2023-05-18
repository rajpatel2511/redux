import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "./redux/actions/counterAction";


const Counter = () =>{

    const counterSlice = useSelector((state) => state.counter);
    const dispatch = useDispatch();


const add = ()=>{
    dispatch(increment());
}

const subtract = ()=>{
    dispatch(decrement());    
}


return(

    <>
    <div style={{textAlign:"center",marginTop:"300px"}}>
    <button onClick={subtract}>-</button>Counter value:{" "}
    {counterSlice.counterValue}
    <button onClick={add}>+</button>
    </div>
    </>


);
};
export default Counter;