import {notifications} from "@mantine/notifications";

export const notificationsTodo = () => {
    notifications.show({
        color: 'green',
        title: 'Success',
        message: 'Todo dodano pomyślnie!',
        autoClose: 2000,
    });
};

export const notificationDeletedTodo = () => {
    notifications.show({
        color: 'green',
        title: 'Success',
        message: 'Todo usunięto pomyślnie!',
        autoClose: 2000,
    })
}