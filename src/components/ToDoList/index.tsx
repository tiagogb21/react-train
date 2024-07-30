import { FaPencilAlt } from "react-icons/fa";
import { IToDoList } from "../../types/interfaces/todo";
import { MdOutlineDelete } from "react-icons/md";

export const ToDoList = ({
    toDoList,
    handleUpdateToDo,
    handleDeleteToDo,
}: IToDoList) => (
    <div>
        {toDoList.length > 0 && (
            <ul className="flex flex-col gap-4 border border-solid border-gray-300 p-4 rounded-md">
                {toDoList.map((toDo) => (
                    <li
                        key={toDo.id}
                        className="flex gap-2 border border-solid border-gray-300 p-4 rounded-md"
                    >
                        <span className="flex-1">{toDo.description}</span>
                        <button
                            type="button"
                            onClick={() => handleUpdateToDo(toDo)}
                        >
                            <FaPencilAlt />
                        </button>
                        <button
                            type="button"
                            onClick={() => handleDeleteToDo(toDo.id)}
                        >
                            <MdOutlineDelete />
                        </button>
                    </li>
                ))}
            </ul>
        )}
    </div>
);