import styled from 'styled-components'

function getWidthStrings(span){
    if(!span) return ;

    let width=span/12*100;
    return `width: ${width}%`;
}

export const Grid = styled.div`
    display: flex;
`

export const RowCenter = styled.div`
	margin: auto;
	width: 50%;
`

export const Col = styled.div`
    flex:1;
`

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
    @media only screen and (min-width: 768px) {
        ${({ md }) => (md && getWidthStrings(md) )};
    }
    @media only screen and (min-width: 768px) {
        ${({ lg }) => (lg && getWidthStrings(lg) )};
    }
`
export const Bordered = styled.div`
    border: 1px solid black;
`