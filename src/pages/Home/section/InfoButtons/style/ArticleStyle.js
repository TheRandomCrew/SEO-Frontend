import styled from 'styled-components';

export const Button = styled.button`
    background: #2780e3;
    color: #fff;
    padding: 0px 10px;
    border: 2px solid blue;
    border-radius: 10px;
    box-shadow: 1px 20px 3px 20px;
    box-shadow: 1px 7px #888888;
    margin: auto;
`;

export const RoundedButton = styled.button`
    border-radius: 50%;
    padding: 15px;
    display: block;
    background: #2780e3;
    color: #fff;
    border: 2px solid blue;
    box-shadow: 1px 7px #888888;
    @media (min-width: 600px) and (max-width: 800px) {
        padding: 5px;
    }
`