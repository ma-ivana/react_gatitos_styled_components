import React from 'react';
import styled from 'styled-components';

const DivForm = styled.div`
  display: flex;
  justify-content: center;
    form {
      background-color: #1A75BC;
      width: 50%;
      height: 200px;
      padding: 25px 25px 25px 50px;
      color: white;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

        input[type="number"] {
          width: 300px;
          height: 25px;
          padding-left: 5px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0,0,0,0.23);
        }

        button {
        width: 100px;
        height: 30px;
        background-color: grey;
        color: white;
        border: none;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
      }
`;

const DivTextForm = styled.div`
  width: 45%;
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
    input[type='text'] {
      width: 200px;
      height: 25px;
      padding-left: 5px;
      box-shadow: $boxShadowForm;
    }
`;

const Span = styled.span`
  font-weight: bold;
  line-height: 35px;
`;

const Form = () => {
  return (
    <>
      <DivForm>
      <form action="testURL.com" method="post">
        <label><Span>Pelaje</Span><br/>
          <input type="checkbox" name="pelaje" value="negro"/>Negro<br/>
          <input type="checkbox" name="pelaje" value="blanco"/>Blanco<br/>
          <input type="checkbox" name="pelaje" value="gris"/>Gris<br/>
          <input type="checkbox" name="pelaje" value="naranja"/>Naranja<br/>
          <input type="checkbox" name="pelaje" value="amarillo"/>Amarillo<br/>
          <input type="checkbox" name="pelaje" value="rayado"/>Rayado<br/>
        </label>
        <label><Span>Sexo</Span><br/>
        <div>
          <input type="radio" name="sexo" value="macho"/>Macho<br/>
          <input type="radio" name="sexo" value="hembra"/>Hembra<br/>
          <input type="radio" name="sexo" value="indif"/>Indiferente<br/>
        </div>
        </label>
        <DivTextForm>
          <div className="textoForm1">
            <label>Nombre<br/>
              <input type="text" id="username" required placeholder="Escribí tu nombre de usuario" name="username"/>
            </label>
          </div>
          <div className="textoForm2">
            <label>Teléfono de contacto<br/>
              <input type="number" id="telefono" required placeholder="Escribí un teléfono de contacto" name="telefono"/>
            </label>
          </div>
          <div className="textoForm3">
            <button type="submit">Enviar</button>
          </div>
        </DivTextForm>
    </form>
    </DivForm>
    </>
  )
};
  
export default Form;