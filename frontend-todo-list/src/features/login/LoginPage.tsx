import {FC} from 'react';
import {useForm} from "@mantine/form";
import {Button, Stack, TextInput} from "@mantine/core";
import {loginErrorNotification} from "./notifications.ts";
import {login} from "./api/login.ts";
import {useNavigate} from "react-router-dom";
import {Notifications} from "@mantine/notifications";

type LoginFormType = { // do formularza
    email: string,
    password: string,
}

export const LoginPage: FC = () => {
    const navigate = useNavigate();
    const form = useForm<LoginFormType>({
        initialValues: {
            email: '',
            password: '',
        },
    });

    const handleSubmit = async (data: LoginFormType) => {
        try {
            await login(data.email, data.password);
            navigate('/todo');
        } catch (error) {
            console.error("Error during login:", error); // Logowanie błędu
            loginErrorNotification(); // Wywołanie powiadomienia o błędzie
        }
    };


    return (
        <div style={{width:'100%'}}>
            <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                <Stack gap="md">
                    <TextInput required type="email" label="Email"{...form.getInputProps('email')} />
                    <TextInput required type='password' label="Password" {...form.getInputProps('password')} />
                    <Button type="submit">Login</Button>
                </Stack>
            </form>
            <Notifications/>
        </div>
    );
}

