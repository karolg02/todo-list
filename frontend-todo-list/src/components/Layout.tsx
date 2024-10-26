import {Outlet} from "react-router-dom";
import {AppNavbar} from "./AppNavbar.tsx";
import {AppShell, Burger, Text} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

export const Layout = () => {
    const [opened, { toggle }] = useDisclosure();
    const isSmallScreen = useMediaQuery('(max-width: 48em)'); // 48em = 768px

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
            <AppShell.Header style={{ backgroundColor: 'rgb(243,243,243)' }}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    {!isSmallScreen && (
                        <>
                            <Text
                                pl="4%"
                                fw={700}
                                style={{ textAlign: "left" }}
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'green', deg: 180 }}
                                size="lg"
                            >
                                YourTodo
                            </Text>
                            <Text
                                pr="3%"
                                size="lg"
                                fw={700}
                                style={{ textAlign: "right" }}
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'green', deg: 180 }}
                            >
                                Witaj!
                            </Text>
                        </>
                    )}
                </div>
            </AppShell.Header>

            <AppShell.Navbar p="md" style={{ backgroundColor: 'rgb(243,243,243)' }}>
                <AppNavbar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};
