import {IconListCheck, IconLogout, IconPencilPlus} from "@tabler/icons-react";
import {NavLink, Text} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {logout} from "../features/todo/api/logout.ts";

export const AppNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(navigate);
    };

    return (
        <div>
            <NavLink onClick={() => navigate("/todo")}
                label="Lista TODO"
                leftSection={<IconListCheck size="1rem" stroke={1.5} />}
            />
            <NavLink onClick={() => navigate("/todo/new")}
                label="Dodaj TODO"
                leftSection={<IconPencilPlus size="1rem" stroke={1.5} />}
            />
            <NavLink onClick={handleLogout}
                label="Wyloguj"
                leftSection={<IconLogout size="1rem" stroke={1.5} />}
            />
            <Text
                style={{position: 'fixed', bottom: 2, left: "auto"}}
            >Autor: Karol Glanowski</Text>
        </div>
    )
}