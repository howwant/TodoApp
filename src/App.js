import { useCallback, useEffect, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    localStorage.setItem('todoList', JSON.stringify(todos));
  });
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: Date.now(), //현재시간으로 대신 사용
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo=> todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo),
      )
    },
  [todos],
  );

  return (
  <TodoTemplate>
    <TodoInsert onInsert ={onInsert} />
    <TodoList todos ={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
  );
};

export default App;
