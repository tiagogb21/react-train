import { ChangeEvent } from "react";

export interface InitialState {
    id: number;
    description: string;
}

export interface IToDoForm {
    toDoItem: InitialState;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleAddOrUpdateToDo: () => void;
}

export interface IToDoList {
    toDoList: InitialState[];
    handleUpdateToDo: (toDo: InitialState) => void;
    handleDeleteToDo: (toDoId: number) => void;
}

