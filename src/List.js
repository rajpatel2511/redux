import { useDispatch,useSelector } from "react-redux";
import {  getInputValue } from "./redux/actions/todoAction";
import { useState } from "react";

const List = () =>{
    const todoSlice = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [todo,setTodoValue] = useState("")

    console.log(todo);

const getValue = (event) =>{
    // console.log(event.target.value)
    // dispatch(getInputValue(event.target.value));
    console.log(getInputValue(event.target.value));
    setTodoValue(event.target.value);
}

const addValue = () =>{
    dispatch(getInputValue(todo));
    console.log(getInputValue(todo))
    setTodoValue("");
}

return(
<>

<input type="text" onChange={getValue} value={todo}/>
<input type="button" value="Add" onClick={addValue}/>

<ul>
        {
            todoSlice.listValue.map((todo) => (
          
          <li key={todo}>{todo}  <input type="checkbox" /> </li>

        ))
        }
</ul>

</>
);
};


export default List;