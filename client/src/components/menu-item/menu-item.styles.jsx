import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '580px' : '340px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
  border-radius: 2%;
	margin: 0 7.5px 15px;
  

	&:hover {
		cursor: pointer;
		/* & .background-image {
			transform: scale(1.4);
			transition: transform 9s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		} */
		& .content {
			opacity: 0.6;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  &:hover {
    opacity: 0.85;
  }
  
 // background-color: black;
 // background-image: url(${props => props.imageUrl});
`;
// const Content = styled.div`
//     background-image: url(${props => props.img});
// `;
// <Content img={ImagePath} />
//https://github.com/facebook/create-react-app/issues/3238

export const ContentContainer = styled.div`
  height: 100px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background-color: white;
  opacity: 0.8;
  position: absolute;

  


`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  font-family: "arial-black";
  color: black;
  font-size: 1.5em;
  display: flex;
  overflow: hidden;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;