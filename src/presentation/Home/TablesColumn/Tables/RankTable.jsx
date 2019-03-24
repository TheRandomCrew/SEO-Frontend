import React, { Fragment } from 'react';
import { Row, Column } from 'styles/GridStyled';

const RankTable = ({ rankData }) => {
    return (
        <Fragment>
            {
                rankData.map((row, id) => {
                    return (
                        <Row key={id}>
                            <Column md={1} lg={1}>
                                {row.pos}
                            </Column>
                            <Column md={4} lg={4}>
                                {row.title}
                            </Column>
                            <Column md={2} lg={2}>
                                {row.pda}
                            </Column>
                            <Column md={2} lg={2}>
                                {row.shares}
                            </Column>
                            <Column md={3} lg={3}>
                                {row.url}
                            </Column>
                        </Row>
                    )
                })
            }
        </Fragment>
    )
}

export default RankTable
