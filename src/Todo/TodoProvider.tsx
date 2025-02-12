import { createContext, Dispatch, ReactNode, Reducer, useContext, useReducer } from 'react';
import { TodoInputActionType, todoInputReducer, TodoInputStateType } from './todoInputReducer';
import { TodoActionType, todoReducer, TodoStateType } from './todoReducer';

interface TodoProviderProps {
  children: ReactNode;
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext = createContext<Dispatch<TodoInputActionType> | null>(null);

const TodoProvider = (props: TodoProviderProps) => {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: ''
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });


  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
};

export const useTodoState = () => {
  const value = useContext(TodoStateContext);
  if (!value) {
    throw new Error('cannot find todoState');
  }
};

export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);
  if (!value) {
    throw new Error('cannot find todoDispatch');
  }
};

export const useInputTodoState = () => {
  const value = useContext(InputTodoContext);
  if (!value) {
    throw new Error('cannot find inputTodo');
  }
};

export const useInputTodoDispatch = () => {
  const value = useContext(InputTodoDispatchContext);
  if (!value) {
    throw new Error('cannot find InputTodoDispatch');
  }
};

export default TodoProvider;