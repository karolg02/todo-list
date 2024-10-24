import {BrowserRouter} from "react-router-dom";
import {Routing} from "./features/Routing";
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";

const theme = createTheme({

})

function App() {

  return (
    <>
        <MantineProvider theme={theme}>
            <Notifications />
              <BrowserRouter>
                  <Routing/>
              </BrowserRouter>
        </MantineProvider>
    </>
  )
}

export default App
