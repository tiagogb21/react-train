import { ChangeEvent, useState } from "react";
import { Header } from "./components/Header";
import { InitialState } from "./types/interfaces/todo";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

const initialState: InitialState = {
    id: 0,
    description: "",
};

function App() {
    const [toDoList, setToDoList] = useState<InitialState[]>([]);
    const [toDoItem, setToDoItem] = useState<InitialState>(initialState);
    const [currentToDoId, setCurrentToDoId] = useState<number | undefined>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setToDoItem({
            ...toDoItem,
            description: e.target.value,
        });
    };

    const handleAddOrUpdateToDo = () => {
        if (toDoItem.description.length > 0) {
            if (currentToDoId !== undefined) {
                setToDoList((prev) =>
                    prev.map((item) =>
                        item.id === currentToDoId
                            ? { ...item, description: toDoItem.description }
                            : item
                    )
                );
                setCurrentToDoId(undefined);
            } else {
                setToDoList((prev) => [
                    ...prev,
                    {
                        ...toDoItem,
                        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
                    },
                ]);
            }
            setToDoItem(initialState);
        }
    };

    const handleDeleteToDo = (toDoId: number) => {
        setToDoList((prev) => prev.filter(({ id }) => id !== toDoId));
    };

    const handleUpdateToDo = (toDo: InitialState) => {
        setToDoItem(toDo);
        setCurrentToDoId(toDo.id);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <div className="container mx-auto flex flex-col gap-6 py-10 lg:w-3/5">
                    <h1 className="text-gray-800 font-bold text-2xl uppercase">
                        To-Do List
                    </h1>
                    <ToDoForm
                        toDoItem={toDoItem}
                        handleChange={handleChange}
                        handleAddOrUpdateToDo={handleAddOrUpdateToDo}
                    />
                    <ToDoList
                        toDoList={toDoList}
                        handleUpdateToDo={handleUpdateToDo}
                        handleDeleteToDo={handleDeleteToDo}
                    />
                </div>
            </main>
        </>
    );
}

export default App;
