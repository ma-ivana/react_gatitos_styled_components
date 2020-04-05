import React from 'react';
import hamburger from '../img/bars.png';
import styled from 'styled-components';

const NavBar = styled.nav`
    background-color: 
    ${
      prop => prop.hayEmergenciaAdopteril
        ? 'red'
        : '#1A75BC'
    };
    padding: 20px;
    padding-bottom: 20px;
    color:white;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
   
  h3 {
    margin: 10px 0px;
    color: white;
  }
      
  div {
    width: 50px;
    height: 50px;
  
    img {
      width: 100%;
    }
  }
`;

const Nav = () => {
  return (
    <>
      <NavBar hayEmergenciaAdopteril={false}>
        <div>
          <h3>#AdoptAdas</h3>
        </div>
        <div className="hamburguesa">
          <img alt="hamburger" src={hamburger} className="hamburger"></img>
        </div>
      </NavBar>
    </>
  )
};

export default Nav;