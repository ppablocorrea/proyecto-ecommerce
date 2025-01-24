import { Flex, Text } from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import productoscarrito from "../../productoscarrito.json";
import CarritoCard from "./CarritoCard";

function Carrito() {
  return (
    <>
      <Flex
        direction={"column"}
        pt={"20px"}
        bgColor={"gray.200"}
        maxWidth={"370px"}
        minHeight={"70vh"}
        maxHeight={"70vh"}
      >
        <IoCloseOutline size={"40px"} />
        <Flex pl={"40px"} direction={"column"} pt={"5px"}>
          <Text pb={"20px"} fontSize={"25px"}>
            Carrito de Compras
          </Text>
          <Flex gap={"30px"} direction={"column"}>
            {productoscarrito.map((producto) => (
              <CarritoCard
                imagen={producto.foto}
                nombre={producto.nombre}
                taller={producto.talle}
                cantidad={producto.cantidad}
                precio={producto.precio}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Carrito;
