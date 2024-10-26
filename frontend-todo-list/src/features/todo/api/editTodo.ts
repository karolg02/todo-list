import { API_URL } from "../../../config.ts";
import {TodoFormValues} from "../../../types/TodoFormValues.ts";

export const editTodo = async (id: number, data?: TodoFormValues) => {
    try {
        if (data) {
            const response = await fetch(`${API_URL}/todo/${id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return response.ok;
        } else {
            const response = await fetch(`${API_URL}/todo/${id}`, {
                method: 'GET',
                credentials: 'include',
            });
            if (response.ok) {
                return await response.json();
            } else {
                console.error('Couldn\'t fetch todo');
                return null;
            }
        }
    } catch (error) {
        console.error('Error editing:', error);
        return null;
    }
};
