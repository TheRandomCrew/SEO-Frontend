import React from 'react';
import { Row, Column, Bordered, Grid } from '../../../style/GridStyles';
import Analysis from './Analysis';
import Article from '../../../container/Home/ArticleColumn/Article';
import InfoButtons from './InfoButtons'

const ArticleColumn = () => {
    return (
        <Bordered>
            <Grid>
                <Row>
                    <Column sm={12} md={10} lg={10}>
                        <Article />
                    </Column>
                    <Column sm={12} md={2} lg={2}>
                        <InfoButtons />
                    </Column>
                </Row>
            </Grid>
            <Bordered>
                <Analysis />
            </Bordered>
        </Bordered>
    )
}

export default ArticleColumn
