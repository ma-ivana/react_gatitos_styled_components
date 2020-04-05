import React from 'react';
import facebook from '../img/icons8-facebook-nuevo-24.png';
import google from '../img/icons8-google-plus-24.png';
import twitter from '../img/icons8-twitter-circled-24.png';
import copyright from '../img/icons8-derechos-de-autor-24.png';
import styled from 'styled-components';

const FooterStyle = styled.div`
  background-color: rgb(245, 217, 60);
  height: 100px;
  padding: 25px 10px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;  
  justify-content: space-around;
  align-items: center;
  color: black;
`;

const DivContainerRedes = styled.div`
      img {          
          margin: 0px 15px;
      }
`;

const DivContainerCopyright = styled.div`
      img, p {
          margin: -3px 5px;
          color: black;
          display: inline-block;
          font-size: small;
      }
`;

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <DivContainerRedes>
          <img alt="imagen de facebook" src={facebook} className="fab"></img>
          <img alt="imagen de google plus" src={google} className="fab"></img>
          <img alt="imagen de twitter" src={twitter} className="fab"></img>
        </DivContainerRedes>
        <DivContainerCopyright>
          <img alt="imagen de copyright" src={copyright} className="fa"></img><p>  2020 | All rights reserved</p>
        </DivContainerCopyright>
      </FooterStyle>
    </>
  )
};

export default Footer;
