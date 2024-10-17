import {TodoFormValues} from "../../types/TodoFormValues.ts";
import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";
import {useTodoForm} from "./hooks/useTodoForm.ts";

export const TodoForm = () => {

    const form = useTodoForm();

    const handleSubmit = (vals: TodoFormValues) => {
        console.log(vals);
    }
    return (
        <Paper shadow="xs" p="xl">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Tytul"
                        placeholder="Tytul todo"
                        {...form.getInputProps('title')}
                    />
                    <Textarea withAsterisk label="Tresc"
                              placeholder="Tresc todo" {...form.getInputProps('content')}
                    />
                    <Checkbox
                        label="Wykonane"
                        {...form.getInputProps('done',{type: 'checkbox'})}
                    />
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Wyslij</Button>
                    </Group>

                </Stack>
            </form>
        </Paper>
    );
}