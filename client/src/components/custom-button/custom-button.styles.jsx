import styled, { css } from 'styled-components';


const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  font-family: 'arial-black';

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

  &:hover {
    background-color: #357ae8;
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
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.1px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  margin: 0 10px 0 10px;
  font-size: 0.3em;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
   font-family: 'arial-black';

  ${getButtonStyles} //calling javascript funcion here 
`;