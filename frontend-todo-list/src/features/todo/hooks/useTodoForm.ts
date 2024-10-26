import {useForm} from "@mantine/form";
import {TodoFormValues} from "../../../types/TodoFormValues.ts";

export const useTodoForm = () =>{
    return useForm<TodoFormValues>({
        initialValues: {
            content: "",
            title: "",
            done: false,
        },

        validate: {
            title: (value) => {
                if (value.length < 3) {
                    return "Title must be at least 3 characters long";
                }
            },
            content: (value) => {
                if (value.length < 1) {
                    return "Description must be at least 10 characters long";
                }
            }
        },
    });
}