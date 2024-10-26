import { Button, Card, Image, Text } from "@mantine/core";
import { TodoType } from "../../types/TodoType";
import { CSSProperties } from "react";
import { deleteTodo } from "./api/deleteTodo.ts";
import { useNavigate } from "react-router-dom";
import {Notifications} from "@mantine/notifications"; // Import useNavigate

interface TodoListItemProps {
    item: TodoType;
    onToggleDone: (id: number) => void;
}

export const TodoListItem = ({ item, onToggleDone }: TodoListItemProps) => {
    const navigate = useNavigate(); // Initialize navigate

    const style: CSSProperties | undefined = item.done
        ? { border: "2px solid", borderColor: "rgb(82,173,47)" }
        : undefined;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Notifications style={{ position: 'fixed', bottom: 0, right: 0 , border: "none"}} />
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={200}
                    alt="No way!"
                    style={style}
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                {item.title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
                {item.content}
            </Text>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <Button
                    style={{
                        width: "50%",
                    }}
                    onClick={() => onToggleDone(item.id)}
                    variant="filled"
                    color={item.done ? "gray" : "teal"}
                    size="md"
                >
                    {item.done ? "Zrobione" : "Nie zrobione"}
                </Button>

                <Button variant="filled" size="md"
                        style={{
                            width: "25%",
                        }}
                        onClick={() => navigate(`/todo/edit/${item.id}`)} // Navigate to edit page
                >
                    Edytuj
                </Button>

                <Button variant="filled" size="md"
                        style={{
                            backgroundColor: "indianred",
                            color: "black",
                            width: "20%",
                        }}
                        onClick={() => deleteTodo(item.id)}
                >
                    Usuń
                </Button>
            </div>
        </Card>
    );
};
