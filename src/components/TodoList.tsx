import { Todo } from "@/App";
import { TodoItem } from "@/components";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = (props): JSX.Element => {
  // PROPS
  const { todos, setTodos } = props;

  return (
    <div className='container'>
      <div className='todos'>
        {todos.map((todo) => (
          <TodoItem todos={todos} setTodos={setTodos} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
