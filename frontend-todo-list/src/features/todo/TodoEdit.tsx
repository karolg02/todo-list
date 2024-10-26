import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTodoForm } from "./hooks/useTodoForm.ts";
import { Button, Checkbox, Group, Paper, Stack, Textarea, TextInput } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { editTodo } from "./api/editTodo.ts";
import { TodoFormValues } from "../../types/TodoFormValues.ts";

export const TodoEdit = () => {
    const { id } = useParams<{ id: string }>();
    const form = useTodoForm();
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const fetchTodo = async () => {
            const todo = await editTodo(Number(id));
            if (todo && !isDataLoaded) {
                form.setValues({
                    title: todo.title,
                    content: todo.content,
                    done: todo.done,
                });
                setIsDataLoaded(true);
            }
        };

        fetchTodo();
    }, [id, form, isDataLoaded]);

    const handleSubmit = async (vals: TodoFormValues) => {
        try {
            const success = await editTodo(Number(id), vals);
            if (success) {
                Notifications.show({color: "green", title: "Sukces", message: "Udało się zaktualizować Todo!",autoClose: 2000, });
            } else {
                Notifications.show({color: "red", title: "Błąd", message: "Nie udało się zaktualizować Todo!",autoClose: 2000, });
            }
        } catch (error) {
            console.error(error);
            Notifications.show({ title: "Error", message: "Failed to update todo",autoClose: 2000, });
        }
    };

    return (
        <Paper shadow="xs" p="xl" style={{ position: 'relative' }}>
            <Notifications style={{ position: 'fixed', bottom: 0, right: 0 }} />
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        placeholder="Tytuł todo"
                        {...form.getInputProps('title')}
                    />
                    <Textarea
                        withAsterisk
                        label="Treść"
                        placeholder="Treść todo"
                        {...form.getInputProps('content')}
                    />
                    <Checkbox
                        label="Wykonane"
                        {...form.getInputProps('done', { type: 'checkbox' })}
                    />
                    <Group justify="flex-end" mt="md">
                        <Button style={{textAlign:"right"}}
                                variant="gradient"
                                gradient={{ from: 'red', to: 'blue', deg: 270 }}
                                type="submit">Zatwierdź
                        </Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    );
};
