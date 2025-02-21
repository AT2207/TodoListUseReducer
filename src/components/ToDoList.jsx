import React, { useState } from 'react'
import { useReducer } from 'react'



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: state.length + 1, task: action.payload }];
        case "DELETE":
            return state.filter((item,index) => item.id != action.payload);
        default:
            return state;
    }
}


const ToDoList = () => {
    const initialState = []
    const [state,dispatch] = useReducer(reducer,initialState)
    const [task,setTask] = useState("")
    const addList = () =>{
        console.log(task)
        if(task.trim()=="") return
        dispatch({type:"ADD",payload: task})
        setTask("")
    }
    const deleteList = (id) => {
        console.log(id)
        dispatch({ type: "DELETE", payload: id });
    }


    return (
        <>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addList}>Add List</button>
        <ul>
        {state.map((val) => (
                    <li key={val.id}>{val.task}
                     <button onClick={() => deleteList(val.id)}>Delete</button>
                    </li>                    
                ))}
        </ul>
        </>
    )
}
export default ToDoList

