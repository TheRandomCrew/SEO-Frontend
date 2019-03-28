import React, { Fragment } from 'react';
import styled from 'styled-components';
import { SEOContext } from '../../store';
import { Row, Column, RowCenter } from '../../style/GridStyles';
import '../../style/ripple.css';
import PDACell from './PDACell';
import FacebookCell from './FacebookCell';

const RankTable = () => {
    const { state: { rankData } } = React.useContext(SEOContext);
    return (
        <Fragment>
            <span>TOP 10 DE LAS PALABRAS CLAVE PRINCIPAL</span>
            <OverflowY>
                {rankData.length > 2 ?
                    <Row>
                        <Column md={1} lg={1}>
                            Rank ing
                    </Column>
                        <Column md={4} lg={4}>
                            Titulo
                    </Column>
                        <Column md={1} lg={1}>
                            PDA
                    </Column>
                        <Column md={2} lg={2}>
                            FB
                    </Column>
                        <Column md={4} lg={4}>
                            URL
                    </Column>
                    </Row> :
                    <RowCenter>
                        <div className="lds-ripple">
                            <div></div><div></div>
                        </div>
                    </RowCenter>
                }
                {
                    rankData.map((row, id) => {
                        return (
                            <Row key={id} hidden={row.title === '-' ? true : false}>
                                <Column md={1} lg={1}>
                                    {row.pos}
                                </Column>
                                <Column md={4} lg={4}>
                                    {row.title}
                                </Column>
                                <Column md={1} lg={1}>
                                    <PDACell
                                        url={row.pda}
                                    />
                                </Column>
                                <Column md={2} lg={2}>
                                    <FacebookCell
                                        url={row.shares}
                                    />
                                </Column>
                                <Column md={4} lg={4}>
                                    <a href={row.url} target="_blank" rel="noopener noreferrer">
                                        {row.url}
                                    </a>
                                </Column>
                            </Row>
                        )
                    })
                }
            </OverflowY>
        </Fragment>
    )
}

export default RankTable;

const OverflowY = styled.div`
    height: 50vh;
    overflow-y: scroll;
`;
