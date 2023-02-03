import { useState, useRef, useEffect } from "react";

import { Todo } from "@/App";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
  todos: Todo[];
}

const TodoItem: React.FC<Props> = (props): JSX.Element => {
  // PROPS
  const { setTodos, todo, todos } = props;

  // REFS
  const inputRef = useRef<HTMLInputElement>(null);

  // STATES
  const [editTodo, setEditTodo] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  // HANDLERS
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editTitle } : todo
      )
    );

    setEditTodo(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // RE-RENDER
  useEffect(() => {
    inputRef.current?.focus();
  }, [editTodo]);

  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)} className='todos__single'>
      {editTodo ? (
        <input
          type='text'
          className='todos__single--text'
          ref={inputRef}
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className='todos single--text'>{todo.title}</s>
      ) : (
        <span className='todos single--text'>{todo.title}</span>
      )}

      <div>
        <button
          type='button'
          className='icon'
          onClick={() => {
            if (!editTodo && !todo.isDone) setEditTodo(!editTodo);
          }}
        >
          <AiFillEdit />
        </button>
        <button
          type='button'
          className='icon'
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </button>
        <button
          type='button'
          className='icon'
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </button>
      </div>
    </form>
  );
};

export default TodoItem;
