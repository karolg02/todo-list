import {Button, Card, Image, Text} from "@mantine/core";
import {TodoType} from "../../types/TodoType";
import {deleteTodo} from "./api/deleteTodo.ts";
import {useNavigate} from "react-router-dom";
import {Notifications} from "@mantine/notifications";
import {changeTodoDone} from "./api/changeTodoDone.ts";
import {IconTrash} from "@tabler/icons-react"; // Import useNavigate

interface TodoListItemProps {
    item: TodoType;
    onToggleDone: (id: number) => void;
}

export const TodoListItem = ({ item }: TodoListItemProps) => {
    const navigate = useNavigate(); // Initialize navigate

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Notifications style={{ position: 'fixed', bottom: 0, right: 0 , border: "none"}} />
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={200}
                    alt="No way!"
                />
            </Card.Section>

            <Text
                fw={500}
                size="lg"
                mt="md"
                color={item.done ? "green" : "grey"}
            >
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
                    onClick={() => changeTodoDone(item.id)}
                    variant="gradient"
                    gradient={item.done ? { from: 'blue', to: 'green', deg: 270 } : { from: 'grey', to: 'grey', deg: 0 }}
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
                    <IconTrash size="1.2rem" stroke={1.5}/>
                </Button>
            </div>
        </Card>
    );
};
