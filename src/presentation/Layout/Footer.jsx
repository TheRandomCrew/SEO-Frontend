import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <StFooter>
            <p>&copy; 2019 SERP</p>
        </StFooter>
    );
};

export default Footer;

const StFooter = styled.footer` // St because Styled, a short for Styled Footer
    float: left;
    text-align: right;
    position: fixed;
    bottom: 5px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #f5f5f5;
`