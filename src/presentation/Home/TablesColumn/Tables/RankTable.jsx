import React, { Fragment } from 'react';
import { Row, Column, RowCenter } from 'styles/GridStyled';
import 'styles/spinner.css';
import FacebookCell from 'containers/Home/TablesColumn/FacebookCell';
import PDACell from 'containers/Home/TablesColumn/PDACell';

const RankTable = ({ rankData = [] }) => {
    return (
        <Fragment>
            {rankData.length > 2 ?
                <Row>
                    <Column md={1} lg={1}>
                        Rank ing
                    </Column>
                    <Column md={4} lg={4}>
                        Titulo
                    </Column>
                    <Column md={2} lg={2}>
                        PDA
                    </Column>
                    <Column md={2} lg={2}>
                        FB
                    </Column>
                    <Column md={3} lg={3}>
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
                            <Column md={2} lg={2}>
                                <PDACell
                                    url={row.pda}
                                />
                            </Column>
                            <Column md={2} lg={2}>
                                <FacebookCell
                                    url={row.shares}
                                />
                            </Column>
                            <Column md={3} lg={3}>
                                <a href={row.url} target="_blank" rel="noopener noreferrer">
                                    {row.url}
                                </a>
                            </Column>
                        </Row>
                    )
                })
            }
        </Fragment>
    )
}

export default RankTable
