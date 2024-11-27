import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./config/appRouter";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css'
import store from "./reducer/store";
import { Provider } from "react-redux";


function App() {
  return (
   <Provider store={store}>
    <PrimeReactProvider>
      <AppRouter />
    </PrimeReactProvider>
   </Provider>
  );
}

export default App;
