import {API_URL} from "../../../config.ts";
import {notificationDeletedTodo} from "../notificationsTodo.ts";

export const deleteTodo = async (id: number) =>{
    try {
        const response = await fetch(`${API_URL}/todo/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        });
        if (response.ok) {
            notificationDeletedTodo();
        } else {
            console.error('Couldn\'t delete');
        }
    } catch (error) {
        console.error('Error deleting:', error);
    }
};