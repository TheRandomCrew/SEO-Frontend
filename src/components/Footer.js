import React from 'react';
import styled from 'styled-components'

const FooterView = () => {
    return (
        <StFooter>
            <p>&copy; 2019 SERP</p>
        </StFooter>
    );
};

export default FooterView;

const StFooter = styled.footer`
    position: fixed;
    bottom: 5px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #f5f5f5;
`