import styled from 'styled-components'

function getWidthStrings(span){
    if(!span) return ;

    let width=span/12*100;
    return `width: ${width}%`;
}

export const Grid = styled.div`
    display: flex;
`;

export const Row = styled.div`
    &::after {
        content: '';
        clear: both;
        display: table;
    }
`

export const Column = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthStrings(xs) : 'width:100%')};
    @media only screen and (min-width: 768px) {
        ${({ sm }) => (sm && getWidthStrings(sm) )};
    }
    @media only screen and (min-width: 992px) {
        ${({ md }) => (md && getWidthStrings(md) )};
    }
    @media only screen and (min-width: 1200px) {
        ${({ lg }) => (lg && getWidthStrings(lg) )};
    }
`
export const Bordered = styled.div`
    border: 1px solid #999;
`

export const Main = styled.main`
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 40px;
`
export const RowCenter = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ExpandButton = styled.button`
    background: #2780e3;
    color: #fff;
    padding: 5px 5px;
    border: 2px solid blue;
    border-radius: 10px;
    margin-bottom: 5px;
    height: 40px;
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`;