import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AdviceDiv = styled.div`
    padding-bottom: 25px;
    text-align: justify;
    font-size: 16px;
    font-weight: 10px
`;

export const BadgeIcon = styled(FontAwesomeIcon)`
  color: ${props =>
    (props.color === 'success' && 'blue') || 
    (props.color === 'danger' && 'red') ||
    (props.color === 'warning' && 'yellow') ||
    (props.color === 'error' && 'purple')
  }
`;
//export const Thing = styled.button`
//   color: blue;

//   ::before {
//     content: '🚀';
//   }

//   :hover {
//     color: red;
//   }
// `

export const H2 = styled.h2`
    color: ${ props => props.theme.text};
    font-family: "kotori_rosebold";
    font-size: 40px;
    line-height: 30px;
    margin-bottom: 5px;
    padding: 0;

    @media (max-width: 576px) {
        font-size: 40px;
    }
`;

export const  H3 = styled.div`
  	color: ${props => props.theme.text};
  	font-family: "kotori_roseregular";
  	font-size: 15px;
  	font-weight: normal;
  	letter-spacing: 2px;
  	margin: 30px 0 0;
  	padding: 0;
  	text-transform: uppercase;

  	@media (max-width: 576px) {
    	font-size: 13px;
    	letter-spacing: 0px;
    	margin: 10px 0 0;
  	}
`;