import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxFilePlus, RxCross1 } from "react-icons/rx";

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const Todos = () => {
  const {
    register,
    handleSubmit,
    resetField,
    //  formState: { errors },
  } = useForm<{ title: string }>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddClick = (data: { title: string }) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 10).toString(),
      title: data.title,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    resetField("title");
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-6 bg-gray-700 rounded-xl flex flex-col items-center gap-4">
      <h1 className="font-semibold text-white text-2xl">My tasks</h1>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Insert a task name"
          className="p-3 text-gray-300 bg-gray-900 rounded-lg"
          {...register("title", { required: true })}
        />
        <button
          aria-label="Add task"
          className="text-white font-medium"
          onClick={() => handleSubmit(handleAddClick)()}
        >
          <RxFilePlus size={36} />
        </button>
      </div>
      {todos.map((todo) => (
        <div className="flex gap-3 items-center justify-center" key={todo.id}>
          <p className="text-gray-50 text-2xl">{todo.title}</p>
          <button
            onClick={() => handleDelete(todo.id)}
            className="text-red-600"
            aria-label="x"
          >
            <RxCross1 size={24}/>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
