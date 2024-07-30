import { FaPlus } from "react-icons/fa";
import { IToDoForm } from "../../types/interfaces/todo";

export const ToDoForm = ({
    toDoItem,
    handleChange,
    handleAddOrUpdateToDo,
}: IToDoForm) => (
    <form action="">
        <div className="flex flex-col">
            <label htmlFor="create-to-do">Novo todo</label>
            <div className="flex gap-2 items-center">
                <input
                    type="text"
                    id="create-to-do"
                    className="flex-1 border border-solid border-gray-300 bg-gray-100 rounded-md px-4 py-2"
                    onChange={handleChange}
                    value={toDoItem.description}
                />
                <button
                    type="button"
                    className="border border-solid border-gray-800 rounded-md p-3"
                    onClick={handleAddOrUpdateToDo}
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    </form>
);