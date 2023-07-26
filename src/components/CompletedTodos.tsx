import ContainerLayout from "./ui/ContainerLayout.ui";
import TodoList from "./ui/TodoList.ui";

interface Todo {
  text: string;
  complete: boolean;
}

interface completeTodoProps {
  todo: Todo[];
  checkBoxHandler: any;
  editTodoHandler: any;
  deleteTodoHandle: any;
}
const CompletedTodos: React.FC<completeTodoProps> = ({
  todo,
  checkBoxHandler,
  editTodoHandler,
  deleteTodoHandle,
}) => {
  const title = "Completed Todos";
  const completeTodoData = todo.filter((todo) => todo.complete === true);

  return (
    <ContainerLayout title={title}>
      {completeTodoData.length === 0 && (
        <div className="text-center mt-28">No completed todos Found!</div>
      )}
      {completeTodoData.map((todoItem, i) => (
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

export default CompletedTodos;
