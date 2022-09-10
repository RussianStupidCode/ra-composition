import React from "react";
import Card from "./card";
import Description from "./description";
import Image from "./image";
import Title from "./title";
import Button from "./button";
import Container from "./container";

const CardPage = () => {
  return (
    <Card>
      <Image
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRSlgDSZqoSbrvb5NCn7JdP6yULs3TbMXF3PTslPtoA&s"
        }
      />
      <Container>
        <Title text="Котик"></Title>
        <Description text="Описание котика"></Description>
        <Button text="Погладить"></Button>
      </Container>
    </Card>
  );
};

export default CardPage;
