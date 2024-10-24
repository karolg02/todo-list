import {showNotification} from "@mantine/notifications";

export const notificationAddedTodo = () => {
    showNotification({
        color: 'green',
        title: 'Success',
        message: 'Todo item added successfully!',
    });
};