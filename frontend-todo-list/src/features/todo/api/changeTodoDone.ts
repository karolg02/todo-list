import {API_URL} from "../../../config.ts";
import {Notifications} from "@mantine/notifications";

export const changeTodoDone = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/todo/${id}`, {
            method: 'GET',
            credentials: 'include',
        });

        if (!response.ok) {
            console.error("Couldn't fetch todo");
            return null;
        }

        const todo = await response.json();

        const updateResponse = await fetch(`${API_URL}/todo/${id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: todo.title,
                content: todo.content,
                done: !todo.done,
            }),
        });
        if (response.ok) {
            Notifications.show({ color: "green", title: "Sukces!", message: "Todo zmieniło status!",autoClose: 2000, });
        } else {
            Notifications.show({ color:"red", title: "Błąd!", message: "Nie udało się zmienić Todo",autoClose: 2000, });
        }
        return updateResponse.ok;
    } catch (error) {
        console.error("Error changing todo done status:", error);
        return null;
    }
};
