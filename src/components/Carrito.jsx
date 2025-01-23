import { Flex, Text } from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import productoscarrito from "../../productoscarrito.json";

function Carrito() {
  return (
    <>
      <Flex
        direction={"column"}
        pt={"20px"}
        bgColor={"gray.200"}
        maxWidth={"370px"}
      >
        <IoCloseOutline size={"40px"} />
        <Flex direction={"column"} pt={"10px"}></Flex>
        <Text pl={"40px"} fontSize={"25px"}>
          Carrito de Compras
        </Text>
      </Flex>
    </>
  );
}

export default Carrito;
