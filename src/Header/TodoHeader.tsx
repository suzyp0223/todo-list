import styles from './TodoHeader.module.css';

const TodoHeader = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}></h1>
      <mark className={styles.todoCount}>5</mark>
      개의 할 일
    </header>
  )
};

export default TodoHeader;