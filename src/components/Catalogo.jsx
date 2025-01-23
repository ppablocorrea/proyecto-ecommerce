import { Flex } from "@chakra-ui/react";
import productos from "../../productos.json";
import Card from "./Card";

function Catalogo() {
  return (
    <>
      <Flex
        pt={"20px"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"10px"}
      >
        {productos.map((producto) => (
          <Card
            nombre={producto.nombre}
            imagen={producto.foto}
            precio={producto.precio}
          />
        ))}
      </Flex>
    </>
  );
}

export default Catalogo;
