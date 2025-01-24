import { Provider } from "./components/ui/provider";
import Catalogo from "./components/Catalogo";
import Carrito from "./components/Carrito";
import CarritoTotal from "./components/CarritoTotal";

function App() {
  return (
    <Provider>
      <Carrito />
      <CarritoTotal />
    </Provider>
  );
}

export default App;
