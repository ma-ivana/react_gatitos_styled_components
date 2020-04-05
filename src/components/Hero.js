import React from 'react';
import gatito10 from '../img/gatito10.jpg';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    justify-content: center;   
    margin-top: 15px;
    margin-bottom: 25px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    div {
      width: 70%;
      height: 350px;
      box-sizing: border-box;
      background-color: rgb(245, 217, 60);
      display: flex;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

const DivUno = styled.div`
        width: 55%;
        padding: 3%;
        display: flex;
        flex-direction: column;
        h1 {
          color: #1A75BC;
          margin-top: 0;
        }
        h5 {
          color: grey;
          margin: 0;
        }
        p {
          color: black;
          font-size: 16px;
        }
`;

const DivDos = styled.div`
  width: 55%;
    img {
    width: 100%;
    height: 100%;
    }
`;

const Hero = () => {
  return (
    <>
      <Section>
        <div>
          <DivUno>
            <h1>Adopta un gatito</h1>
            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt unde esse laborum incidunt totam asperiores ipsum officiis id porro voluptate quasi consequuntur voluptatum corrupti ad laboriosam, consectetur eaque. Dolorem itaque laborum illo possimus fugit doloribus natus ullam quaerat at! Ipsa distinctio quisquam tempore? Fugiat debitis inventore excepturi totam obcaecati!</p>
          </DivUno>
        <DivDos>
          <img alt="imagen de gato" src={gatito10}/>
        </DivDos>
      </div>
    </Section>
    </>
  )
};



export default Hero;