import { Provider } from "./components/ui/provider";
import Catalogo from "./components/Catalogo";
import Carrito from "./components/Carrito";

function App() {
  return (
    <Provider>
      <Carrito />
    </Provider>
  );
}

export default App;
