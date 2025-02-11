import style from './TodoListTools.module.css';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const TodoListTools = () => {

  return (
    <section className={style.container}>
      <button className={style.button}>
        <IoCheckmarkDoneCircleOutline className={style.checkAllIcon} />전체 완료</button>
      <button className={[style.button, style.removeAllButton].join(' ')}>
        <MdDelete className={style.removeAllIcon} />전체 삭제</button>
    </section>
  )
};

export default TodoListTools;