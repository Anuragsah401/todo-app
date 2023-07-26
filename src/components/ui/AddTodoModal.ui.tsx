interface Todo {
  text: string;
  complete: boolean;
}

interface AddTodoModalProps {
  setTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodosHandler: any;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: any;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({
  setInputText,
  setTodoModal,
  addTodosHandler,
  inputText,
}) => {
  return (
    <div className="fixed flex justify-center items-center z-50 top-0 left-0 w-full h-full">
      <div
        onClick={() => setTodoModal(false)}
        className="fixed inset-0 z-10 bg-black opacity-50 w-full h-full"
      />

      <div className="z-10 bg-gray-100 shadow-lg rounded-lg min-w-[300px] md:min-w-[400px] text-center py-8">
        <h1 className="mb-5 text-[1.5em] font-semibold">Create Todos!</h1>
        <form
          action=""
          className="flex flex-col justify-center items-center"
          onSubmit={addTodosHandler}
        >
          <div>
            <input
              type="text"
              placeholder="eg: late night movie plan"
              className="border-2 border-slate-400 rounded-sm py-1.5 px-3"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-32 mt-4 px-3 py-2 rounded-sm text-white bg-lime-600 hover:scale-[1.1] transition-all ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;
