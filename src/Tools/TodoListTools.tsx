import { CgRadioCheck } from 'react-icons/cg';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider';
import style from './TodoListTools.module.css';



const TodoListTools = () => {
  const todoState = useTodoState();
  const todoDispatch = useTodoDispatch();

  const isTodoAllChecked = () => {
    return todoState.todos.every(todo => todo.isChecked);
  }


  const handleToggleAllClick = () => {
    todoDispatch({
      type: 'allChecked',
      payload: isTodoAllChecked()
    })
  }

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'allRemove'
    })
  }


  return (
    <section className={style.container}>
      <button className={style.button} onClick={handleToggleAllClick}>
        {
          isTodoAllChecked() ?
            <>
              <CgRadioCheck className={style.checkAllIcon} />전체 해제
            </> :
            <>
              <IoCheckmarkDoneCircleOutline className={style.checkAllIcon} />전체 완료
            </>
        }
      </button>
      <button className={[style.button, style.removeAllButton].join(' ')} onClick={handleRemoveAllClick}>
        <MdDelete className={style.removeAllIcon} />전체 삭제
      </button>
    </section >
  )
};

export default TodoListTools;