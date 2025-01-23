import { Flex, Image, Text } from "@chakra-ui/react";

function Card(props) {
  return (
    <>
      <Flex>
        <Image src={props.imagen} alt={props.nombre} />
        <Text>{props.nombre}</Text>
        <Text>{props.precio}</Text>
      </Flex>
    </>
  );
}

export default Card;
