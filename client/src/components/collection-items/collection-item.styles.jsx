import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border: 1px solid black;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 55%;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 80%;
  height: 80%;
  background-size: cover;
  background-position: center;
  //margin-bottom: 5px;

  margin: 10 0 10 0;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 80%;
  height: 8%;
  display: flex;
  justify-content: space-around;
  font-size: 1.3em;
 
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
  font-size: 0.9em; 
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
  margin: 0 10 0 0;
`;