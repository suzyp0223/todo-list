import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoListTools from './Tools/TodoListTools';
import TodoList from './List/TodoList';
import { useState } from 'react';
import TodoListArea from './List/TodoListArea';


export type TodoType = {
  id: number,
  text: string,
  isChecked: boolean,
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text: string) => {
    setText(text)
  }

  const handleSubmit = () => {
    const newTodos = todos.concat({
      id: Date.now(),
      text: text,
      isChecked: false
    });

    setTodos(newTodos);
    setText('');
  };

  return (
    <main className="App">
      <TodoHeader />
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleSubmit} />
      <TodoListArea todoCount={todos.length}>
        <TodoListTools />
        <Divider />
        <TodoList todos={todos} />

      </TodoListArea>
    </main>
  );
}

export default App;
