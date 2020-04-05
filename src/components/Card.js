import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const CardComp = styled.div`
  background-color: ${prop => prop.gatoDisponible ? "#1a75bc" : "#ccc"};
  margin: 20px;
  width: 500px;
  height: 180px;
  display: flex;
  overflow: hidden;
  color: #fff;
  transition: background-color 0.5s;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

    &:hover {
      background-color: #fed201;
      color: #000;

      button {
        color: #1a75bc;
        border: 1px solid #1a75bc;
      }

      h3 {
        color: #1a75bc;
      }

      img {
        transform: scale(2)
      }
    }
  `;

const DivImagen = styled.div`
  flex: 1;
  overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: all 1s;
    }
`;

const DivTexto = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 20px;
  font-size: 14px;
    h3 {
      margin: 0;
    }
`;

const Card = ({name, shortDesc, img, isAvailable}) => {

  return(
    <CardComp gatoDisponible={isAvailable}>
    <DivImagen>
      <img alt={name} src={img} />
    </DivImagen>
    <DivTexto>
      <h3>{name}</h3>
      <p>
        {shortDesc}
      </p>
      <Button mensaje={isAvailable ? 'Ver mas' : 'No disponible'} estilo={"cardButton"} />
    </DivTexto>
  </CardComp>
  )
};

export default Card;