import style from './TodoList.module.css';
import { TodoType } from '../App';
import TodoItem from '../ListItem/TodoItem';

interface TodoListProps {
  todos: TodoType[];
}

const TodoList = (props: TodoListProps) => {
  const arr = ['React', 'Typescript', 'Javascript', 'HTML', 'CSS'];
  return (
    <section>
      <ol className={style.olContainer}>
        {
          props.todos.map((todo) => {
            return <TodoItem key={todo.id} text={todo.text} isChecked={todo.isChecked} />
          })
        }
      </ol>
    </section>
  )
};

export default TodoList;