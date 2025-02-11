import style from './TodoList.module.css';
import { TodoType } from '../App';
import TodoItem from '../ListItem/TodoItem';

interface TodoListProps {
  todos: TodoType[];
  onToggleClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  const arr = ['React', 'Typescript', 'Javascript', 'HTML', 'CSS'];
  return (
    <section>
      <ol className={style.olContainer}>
        {
          props.todos.map((todo) => {
            return <TodoItem
              id={todo.id}
              key={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
              onRemoveClick={props.onRemoveClick}
              onToggleClick={props.onToggleClick} />
          })
        }
      </ol>
    </section>
  )
};

export default TodoList;