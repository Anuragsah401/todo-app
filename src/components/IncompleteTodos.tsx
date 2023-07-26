import ContainerLayout from "./ui/ContainerLayout.ui";
import TodoList from "./ui/TodoList.ui";

interface Todo {
  text: string;
  complete: boolean;
}

interface IncompleteTodoProps {
  todo: Todo[];
  checkBoxHandler: any;
  editTodoHandler: any;
  deleteTodoHandle: any;
}

const IncompleteTodo: React.FC<IncompleteTodoProps> = ({
  todo,
  checkBoxHandler,
  editTodoHandler,
  deleteTodoHandle,
}) => {
  const title = "Your Todos";

  const inCompleteTodoData = todo.filter((todo) => todo.complete === false);

  return (
    <ContainerLayout title={title}>
      {inCompleteTodoData.length === 0 && (
        <div className="text-center mt-28">No todos Found!</div>
      )}
      {inCompleteTodoData.map((todoItem, i) => (
        <TodoList
          key={i}
          id={todoItem.id}
          text={todoItem.text}
          complete={todoItem.complete}
          checkBoxHandler={checkBoxHandler}
          editTodoHandler={editTodoHandler}
          deleteTodoHandle={deleteTodoHandle}
        />
      ))}
    </ContainerLayout>
  );
};

export default IncompleteTodo;
