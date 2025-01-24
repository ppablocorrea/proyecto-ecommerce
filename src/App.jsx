import { Provider } from "./components/ui/provider";
import Catalogo from "./components/Catalogo";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Provider>
      <Carrito />
      <Checkout />
    </Provider>
  );
}

export default App;
