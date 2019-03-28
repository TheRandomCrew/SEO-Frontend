import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; 2019 SERP</p>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    float: left;
    text-align: right;
    position: fixed;
    bottom: 5px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #f5f5f5;
`