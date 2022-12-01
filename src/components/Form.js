import styles from "../style.module.css"
import shortid from "shortid";
//import { usteState } from 'react'

const Form = ({ todo, setTodo, todoList, setTodoList })=>{
    
    const handleChange = (event)=>{
        setTodo(event.target.value);
        //console.log(todo)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        //installation of shortid pakage with npm
        setTodoList([...todoList, {name:todo, id:shortid.generate()}])
        console.log(todoList)
        setTodo(" ")
    };
    
    return(
        <div>
            <form 
                className={styles.todoform}
                onSubmit={handleSubmit}>
                    <input 
                        value={todo}
                        onChange={handleChange}
                        className={styles.todoinput}
                        placeholder="Add To the Super Todo "
                    ></input>
                    <button
                        type="submit"
                        className={styles.todobutton}>
                        Add
                    </button>
            </form>
        </div>
    )
}

export default Form;