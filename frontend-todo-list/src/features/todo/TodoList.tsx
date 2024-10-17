import { useState } from "react";
import { SimpleGrid } from "@mantine/core";
import { TodoType } from "../../types/TodoType.ts";
import { TodoListItem } from "./TodoListItem.tsx";

const initialData: TodoType[] = [
    {
        id: 1,
        title: "Zrobic zakupy",
        content: "mleko, jajka",
        done: false
    },
    {
        id: 2,
        title: "Sprzątanie",
        content: "Posprzątać pokój",
        done: false
    },
    {
        id: 3,
        title: "Ćwiczenia",
        content: "Przeprowadzić serię ćwiczeń:\n60 pompek x 3",
        done: false
    }
];

export const TodoList = () => {
    const [todos, setTodos] = useState<TodoType[]>(initialData);

    const toggleDone = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    return (
        <div style={{ width: "100%" }}>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
                {todos.map((item) => (
                    <TodoListItem key={item.id} item={item} onToggleDone={toggleDone} />
                ))}
            </SimpleGrid>
        </div>
    );
};
