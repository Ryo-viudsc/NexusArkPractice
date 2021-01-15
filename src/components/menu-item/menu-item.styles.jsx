import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';



export const MenuItemContainer = styled.div`
    height : ${({size}) => (size ? '380px' : '240px')};
    min-width: 30%;
    overflow: hidden; 
    flex :1 1 auto; //TODO : watch the video of flex grow 
    display: flex; 
    align-items : center;
    justify-content: center;
    border :1px solid black;
    margin: 0 7.5px 15px;
    overflow : hidden; 

    &:hover {
        cursor : pointer;


        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

        }


        & .content {
          opacity: 0.5;
        }

    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
/* 
    export const BackgroundImageContainer 

 */



`;