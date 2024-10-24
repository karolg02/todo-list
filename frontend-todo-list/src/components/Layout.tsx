import {Outlet} from "react-router-dom";
import {AppNavbar} from "./AppNavbar.tsx";
import {AppShell, Burger} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Notifications} from "@mantine/notifications";

export const Layout = ()=>{
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div style={{padding: "20px"}}>Kurwigórka.pl</div>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <AppNavbar/>
            </AppShell.Navbar>

            <AppShell.Main>
                <Notifications></Notifications>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    )
}