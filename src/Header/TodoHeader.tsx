import styles from './TodoHeader.module.css';

interface TodoHeaderProps {
  count: number;
}

const TodoHeader = (props: TodoHeaderProps) => {

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}></h1>
      <mark className={styles.todoCount}>{props.count}</mark>
      개의 할 일
    </header>
  )
};

export default TodoHeader;