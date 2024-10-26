import {TodoFormValues} from "../../types/TodoFormValues.ts";
import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";
import {useTodoForm} from "./hooks/useTodoForm.ts";
import {createTodo} from "./api/create-todo.ts";
import {notificationsTodo} from "./notificationsTodo.ts";
import {Notifications} from "@mantine/notifications";

export const TodoForm = () => {

    const form = useTodoForm();

    const handleSubmit = async (vals: TodoFormValues) => {
        try {
            await createTodo(vals);
            notificationsTodo();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Paper shadow="xs" p="xl" style={{ position: 'relative' }}>
            <Notifications style={{ position: 'absolute', bottom: 0, right: 0 }} />
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Tytul"
                        placeholder="Tytul todo"
                        {...form.getInputProps('title')}
                    />
                    <Textarea
                        withAsterisk
                        label="Tresc"
                        placeholder="Tresc todo"
                        {...form.getInputProps('content')}
                    />
                    <Checkbox
                        label="Wykonane"
                        {...form.getInputProps('done', {type: 'checkbox'})}
                    />
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Wyslij</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    );
};
