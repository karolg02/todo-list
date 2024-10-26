import {TodoFormValues} from "../../types/TodoFormValues.ts";
import {Button, Checkbox, Paper, Stack, Textarea, TextInput} from "@mantine/core";
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
        <Paper shadow="xs" p="xl" style={{ position: 'relative'}}>
            <Notifications style={{ position: 'fixed', bottom: 0, right: 0 }} />
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Tytul"
                        placeholder="Tytuł Todo"
                        {...form.getInputProps('title')}
                    />
                    <Textarea
                        withAsterisk
                        label="Tresc"
                        placeholder="Treść Todo"
                        {...form.getInputProps('content')}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                        <Checkbox style={{textAlign:"left"}}
                            label="Wykonane"
                            {...form.getInputProps('done', {type: 'checkbox'})}
                        />
                        <Button style={{textAlign:"right"}}
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'green', deg: 270 }}
                            type="submit">Dodaj Todo</Button>
                    </div>
                </Stack>
            </form>
        </Paper>
    );
};
