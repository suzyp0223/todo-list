import { ChangeEvent, FormEvent } from "react";
import { RiChatNewLine } from "react-icons/ri";
import { useInputTodoDispatch, useInputTodoState, useTodoDispatch } from "../Todo/TodoProvider";
import style from './TodoInput.module.css';

const TodoInput = () => {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();

  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change', payload: event.target.value
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!inputState.text) {
      return;
    }

    todoDispatch({
      type: 'add',
      payload: { text: inputState.text }
    });

    inputDispatch({
      type: 'clear'
    });
  };

  return (
    <section className={style.container}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <input
          className={style.input}
          placeholder={'해야 할 Todo'}
          value={inputState.text}
          onChange={handleInputChanged}
        />
        <button type="submit" className={style.enter}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
};

export default TodoInput;