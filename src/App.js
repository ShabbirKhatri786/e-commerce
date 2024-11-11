import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./config/appRouter";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css'

function App() {
  return (
    <PrimeReactProvider>
      <AppRouter />
    </PrimeReactProvider>
  );
}

export default App;
