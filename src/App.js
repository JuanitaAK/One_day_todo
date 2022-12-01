import { useState} from 'react';
import ListTodo from './components/ListTodo';
//import Todo from './components/Todo';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const[todo, setTodo] = useState(' ');
  const[todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form 
        todo={todo}
        setTodo={setTodo} 
        todoList = {todoList}
        setTodoList={setTodoList}
      ></Form>
      <ListTodo
        todoList = {todoList}
        setTodoList={setTodoList}
      ></ListTodo> 
    </div>
  );
}

export default App;
