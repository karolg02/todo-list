import {API_URL} from "../../../config.ts";
import {Notifications} from "@mantine/notifications";

export const Register = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/user`,{
        method: "POST",
        headers : {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(email + ":" + password),
        },
        body: JSON.stringify({ email, password })
    });
    if(response.ok){
        Notifications.show({color:"green", title: "Sukces!", message: "Rejestracja przebiegła pomyślnie!",autoClose: 3000, });
    }else if(response.status==409){
        Notifications.show({color:"red", title: "Niepowodzenie!", message: "Użytwkonik o takim adresie już istnieje!",autoClose: 3000, });
    }else{
        Notifications.show({color:"red", title: "Niepowodzenie!", message: "Nie udało się utworzyć użytkownika!",autoClose: 3000, });
    }
}