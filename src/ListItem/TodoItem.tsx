import { BsCheckCircle } from 'react-icons/bs';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { useTodoDispatch } from '../Todo/TodoProvider';
import style from './TodoItem.module.css';

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  const todoDispatch = useTodoDispatch();

  const handleToggleClick = () => {

    todoDispatch({
      type: 'checked',
      payload:
        { id: props.id }
    })
  };

  const handleRemoveClick = () => {
    todoDispatch({
      type: 'remove',
      payload:
        { id: props.id }
    })
  };


  return (
    <li className={style.container}>
      <BsCheckCircle className={[style.checkIcon, `${props.isChecked ? style.checkedCircleIcon : style.unCheckedCircleIcon}`].join(' ')}
        onClick={handleToggleClick} />
      <span className={props.isChecked ? style.strikethrough : ''}>{props.text}</span>
      <IoIosRemoveCircleOutline className={style.removeIcon}
        onClick={handleRemoveClick} />
    </li>
  )
};

export default TodoItem;