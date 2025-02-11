import style from './TodoItem.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

interface TodoItemProps {
  text: string;
}

const TodoItem = (props: TodoItemProps) => {
  const isCheck = true;

  return (
    <li className={style.container}>
      <BsCheckCircle className={[style.checkIcon, `${isCheck ? style.checkedCircleIcon : style.unCheckedCircleIcon}`].join(' ')} />
      <span>{props.text}</span>
      <IoIosRemoveCircleOutline className={style.removeIcon} />
    </li>
  )
};

export default TodoItem;