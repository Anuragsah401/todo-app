import { FormEvent, useState } from "react";
import uuid from "react-uuid";

import AddTodoModal from "./components/ui/AddTodoModal.ui";

import Navbar from "./components/ui/Navbar";
import CompletedTods from "./components/CompletedTodos";
import IncompleteTodo from "./components/IncompleteTodos";

interface Todo {
  text: string;
  complete: boolean;
}

function Todo() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [TodoModal, setTodoModal] = useState(false);
  const [inputText, setInputText] = useState("");
  const [searchedText, setSearchText] = useState("");

  const addTodosHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodo((prev) => [
      ...prev,
      {
        id: uuid(),
        text: inputText,
        complete: false,
      },
    ]);

    setTodoModal(false);
    setInputText("");
  };

  const deleteTodoHandle = (id) => {
    const filteredDeletedItem = todo.filter((todo) => todo.id !== id);
    setTodo(filteredDeletedItem);
  };

  const checkBoxHandler = (value: any, id: any) => {
    const updatedTodo = todo.map((todoList: Todo) => {
      return todoList.id === id ? { ...todoList, complete: value } : todoList;
    });

    setTodo(updatedTodo);
  };

  const editTodoHandler = (value, id) => {
    const updatedTodo = todo.map((todoList: Todo) => {
      return todoList.id === id ? { ...todoList, text: value } : todoList;
    });

    setTodo(updatedTodo);
  };

  const searchedTodo = todo.filter((todo) => {
    if (searchedText === "") {
      return todo;
    }

    return todo.text.toLowerCase().includes(searchedText);
  });

  return (
    <>
      <Navbar />

      <h1 className="text-[2em] text-center font-semibold mt-10">
        Create TODOs & Never Forget!
      </h1>

      <section className="md:w-[50rem] md:mx-auto mt-16">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="search todos"
            className="border-2 border-slate-400 rounded-sm px-3"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => setTodoModal(true)}
            className="px-3 py-2 rounded-sm text-white bg-lime-600 hover:scale-[1.1] transition-all ease-in-out "
          >
            Add Todos
          </button>
        </div>

        <div className="flex justify-center gap-16 mt-10 flex-wrap md:flex-nowrap">
          <IncompleteTodo
            todo={searchedTodo}
            checkBoxHandler={checkBoxHandler}
            editTodoHandler={editTodoHandler}
            deleteTodoHandle={deleteTodoHandle}
          />
          <CompletedTods
            todo={searchedTodo}
            checkBoxHandler={checkBoxHandler}
            editTodoHandler={editTodoHandler}
            deleteTodoHandle={deleteTodoHandle}
          />
        </div>

        {TodoModal && (
          <AddTodoModal
            setTodoModal={setTodoModal}
            setTodo={setTodo}
            addTodosHandler={addTodosHandler}
            setInputText={setInputText}
            inputText={inputText}
          />
        )}
      </section>
    </>
  );
}

export default Todo;
