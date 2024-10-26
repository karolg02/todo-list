import {Button, Card, Image, Text} from "@mantine/core";
import {TodoType} from "../../types/TodoType";
import {deleteTodo} from "./api/deleteTodo.ts";
import {useNavigate} from "react-router-dom";
import {Notifications} from "@mantine/notifications";
import {changeTodoDone} from "./api/changeTodoDone.ts";
import {IconTrash} from "@tabler/icons-react";
import {useState} from "react";
import './TodoStyle.css';

interface TodoListItemProps {
    item: TodoType;
    onDelete: () => void;
}

const DEFAULT_IMAGE_URL = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png";

export const TodoListItem = ({ item,onDelete }: TodoListItemProps) => {
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        setTimeout(async () => {
            await deleteTodo(item.id);
            onDelete();
        }, 500);
    };

    return (
        <Card className={isDeleting ? "deletingCard" : ""}
            shadow="sm" padding="lg" radius="md" withBorder>
            <Notifications style={{ position: 'fixed', bottom: 0, right: 0 , border: "none"}} />
            <Card.Section>
                <Image
                    src={DEFAULT_IMAGE_URL}
                    height={200}
                    alt="No way!"
                />
            </Card.Section>

            <Text
                fw={500}
                size="lg"
                mt="md"
                color={item.done ? "black" : "green"}
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
                    gradient={item.done ? { from: 'grey', to: 'grey', deg: 270 } : { from: 'blue', to: 'green', deg: 270 }}
                    size="md"
                >
                    {item.done ? "Zrobiono!" : "Nie zrobiono"}
                </Button>

                <Button
                        style={{
                            width: "25%",
                        }}
                        onClick={() => navigate(`/todo/edit/${item.id}`)}
                        variant="gradient"
                        gradient={item.done ? { from: 'grey', to: 'grey', deg: 270 } : { from: 'red', to: 'blue', deg: 270 }}
                        size="md"
                >
                    Edytuj
                </Button>

                <Button variant="gradient" size="md"
                        style={{
                            color: "black",
                            width: "20%",
                        }}
                        gradient={{ from: 'pink', to: 'red', deg: 270 }}
                        onClick={handleDelete}

                >
                    <IconTrash size="1.2rem" stroke={1.5}/>
                </Button>
            </div>
        </Card>
    );
};
