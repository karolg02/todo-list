import {notifications} from "@mantine/notifications";

export const notificationsTodo = () => {
    notifications.show({
        color: 'green',
        title: 'Success',
        message: 'Todo item added successfully!',
        autoClose: 2000,
    });
};

export const notificationDeletedTodo = () => {
    notifications.show({
        color: 'green',
        title: 'Success',
        message: 'Todo deleted successfully!',
        autoClose: 2000,
    })
}