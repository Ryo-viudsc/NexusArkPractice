import styled, { css } from 'styled-components';


const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  font-family: 'Calibri';

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  font-family: 'Calibri';

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  font-size: 0.4em;
  font-family: 'Calibri';

  &:hover {
    background-color: black;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  
  width: 180px;
  height: 30px;
  letter-spacing: 0;
  margin: 15 15 15 15;
  font-size: 0.5em;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  font-family: 'Calibri';
  ${getButtonStyles} //calling javascript funcion here 
`;