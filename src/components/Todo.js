// import { useState } from "react";
// import ListTodo from "./ListTodo";
import styles from "../style.module.css"

const Todo = ({ todoItem,todoList, setTodoList }) =>{
    const deleteTodo = ()=>{
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));
    };
    return(
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoname}> {todoItem.name}</h3>
                <button 
                    onClick={deleteTodo}
                    className={styles.deletbutton}
                    > Done 
                </button>
            </div>
        </div>
    )
}

export default Todo;

// export default function Todo(){
//     const [todo, setTodo] = useState("");
//     const[todoList, setTodoList] = useState([])
    
//     const handleChange =(event)=>{
//         setTodo(event.target.value);
        
//     }

//     const handleSubmit = (event)  =>{
//         event.preventDefault();
        
//         let tempList = todoList;
//         tempList.push(todo);
//         setTodoList(tempList);
//         console.log(todoList);
//         setTodo("");
//     }

//     return (
//         <div> 
//             <form onSubmit={handleSubmit}>
//                 <input value = {todo} onChange ={handleChange} type="texte"></input>
//                 <button type="submit"> Add</button>
//             </form>
//             {todoList.map((item)=>(
//                 <ListTodo key ={item} name={item}></ListTodo>
//             ))}
//         </div>)
// }
