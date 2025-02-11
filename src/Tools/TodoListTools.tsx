import style from './TodoListTools.module.css';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { CgRadioCheck } from 'react-icons/cg';

interface TodoListToolProps {
  isAllChecked: boolean;
  onToggleAllClick: () => void;
  onRemoveAllClick: () => void;
}

const TodoListTools = (props: TodoListToolProps) => {
  const handleToggleAllClick = () => {
    props.onToggleAllClick();
  }

  const handleRemoveAllClick = () => {
    props.onRemoveAllClick();
  }


  return (
    <section className={style.container}>
      <button className={style.button} onClick={handleToggleAllClick}>
        {
          props.isAllChecked ?
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