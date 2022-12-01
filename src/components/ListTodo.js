import Todo from './Todo';

const ListTodo = ({ todoList, setTodoList }) =>{
    return (
        <div>
            {todoList.map((todoItem)=>(
                <Todo
                    key={todoItem.id} 
                    todoItem={todoItem}
                    todoList={todoList}
                    setTodoList={setTodoList}>
                </Todo>
            ))}
        </div>
    )
}

// export default function ListTodo(props){
//     return(
//         <div>{props.name}</div>
//     )
// }

export default ListTodo;