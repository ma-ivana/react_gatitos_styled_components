import React from 'react';
import Card from './Card'
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const ContenedorDeTarjetas = ({gatos}) => {

  return(
    <Div className="cardContainer">
    {
      gatos.map((gato, i) => 
      <Card 
        key={i} 
        name={gato.name}
        shortDesc={gato.shortDesc}
        img={gato.img}
        isAvailable={gato.disponible}/>)
    }
  </Div>
  )
};

export default ContenedorDeTarjetas;
