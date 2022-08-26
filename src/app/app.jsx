import { ThemeProvider } from "@mui/system";
import { ModalContextProvider } from "../context/modal-context";
import Home from "../pages/home";
import { theme } from "../theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <Home />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
