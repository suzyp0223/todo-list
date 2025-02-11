import style from './TodoItem.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

interface TodoItemProps {
  text: string;
  isChecked: boolean;
}

const TodoItem = (props: TodoItemProps) => {

  return (
    <li className={style.container}>
      <BsCheckCircle className={[style.checkIcon, `${props.isChecked ? style.checkedCircleIcon : style.unCheckedCircleIcon}`].join(' ')} />
      <span>{props.text}</span>
      <IoIosRemoveCircleOutline className={style.removeIcon} />
    </li>
  )
};

export default TodoItem;