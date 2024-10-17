import {Button, Card, Image, Text} from "@mantine/core";
import {TodoType} from "../../types/TodoType";
import {CSSProperties} from "react";

interface TodoListItemProps {
    item: TodoType;
    onToggleDone: (id: number) => void;
}

export const TodoListItem = ({item,onToggleDone }: TodoListItemProps) => {

    const style: CSSProperties | undefined = item.done
        ? { border: "2px solid", borderColor: "rgb(82,173,47)" }
        : undefined;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
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

            <Button
                style={{
                    marginTop: "3%",
                    width: "30%",
                }}
                onClick={() => onToggleDone(item.id)}
                variant="filled"
                color={item.done ? "gray" : "teal"}
                size="md"
            >
                {item.done ? "Zrobione" : "Nie zrobione"}
            </Button>

        </Card>
    );
}