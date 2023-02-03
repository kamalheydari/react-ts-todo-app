import { useState } from "react";

import { Form, TodoList } from "@/components";

import "./App.css";

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

interface Props {}

const App: React.FC<Props> = (props): JSX.Element => {
  // STATES
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // HANDLERS
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (title) {
      setTodos([...todos, { id: Date.now(), title, isDone: false }]);

      setTitle("");
    }
  };

  return (
    <div className='App'>
      <h1 className='heading'>Taskify</h1>
      <Form title={title} setTitle={setTitle} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
