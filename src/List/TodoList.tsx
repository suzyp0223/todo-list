import style from './TodoList.module.css';
import TodoItem from '../ListItem/TodoItem';

const TodoList = () => {
  const arr = ['React', 'Typescript', 'Javascript', 'HTML', 'CSS'];
  return (
    <section>
      <ol className={style.olContainer}>
        {
          arr.map((str, index) => {
            return <TodoItem key={`${str}_${index}`} text={str} />
          })
        }
      </ol>
    </section>
  )
};

export default TodoList;