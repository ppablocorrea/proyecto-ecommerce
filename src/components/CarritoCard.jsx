import { Flex, Image, Text } from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";

function CarritoCard(props) {
  return (
    <>
      <Flex gap={"20px"} direction={"row"}>
        <Image
          width={"100px"}
          height={"120px"}
          src={props.imagen}
          alt={props.nombre}
        />
        <Flex gap={"5px"} direction={"column"}>
          <Text>{props.nombre}</Text>
          <Text>Talle:{props.talle}</Text>
          <Text>Cantidad:{props.cantidad}</Text>
          <Text>${props.precio}</Text>
        </Flex>
        <RiDeleteBinLine />
      </Flex>
    </>
  );
}

export default CarritoCard;
