import { useState } from "react";
import { CircleCheck, CircleX, Edit, Trash } from "tabler-icons-react";

const TodoList = ({
  text,
  complete,
  id,
  checkBoxHandler,
  editTodoHandler,
  deleteTodoHandle,
}: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const textElement = isEditing ? (
    <input
      type="text"
      className="border-2 border-black rounded-sm"
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
    />
  ) : (
    <p className={`${complete ? "line-through" : ""}`}>{text}</p>
  );

  return (
    <div
      className={`flex justify-between items-center p-3 ${
        complete ? "bg-lime-200" : "bg-orange-200"
      }  border-b-2 border-black`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={complete}
          onChange={(e) => checkBoxHandler(e.target.checked, id)}
        />
        {textElement}
      </div>

      {!isEditing && (
        <div className="flex gap-2">
          <button onClick={() => setIsEditing(true)} className="">
            <Edit size={22} strokeWidth={2} color={"black"} />
          </button>
          <button onClick={() => deleteTodoHandle(id)} className="">
            <Trash size={22} strokeWidth={2} color={"black"} />
          </button>
        </div>
      )}

      {isEditing && (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              editTodoHandler(editedText, id);
              setEditedText(editedText);
              setIsEditing(false);
            }}
          >
            <CircleCheck size={25} strokeWidth={2} color={"green"} />
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedText(text);
            }}
          >
            <CircleX size={25} strokeWidth={2} color={"red"} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
