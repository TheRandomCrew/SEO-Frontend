import React, { Fragment } from 'react'
import InfoButtons from './InfoButtons';
import { Row, Column } from 'styles/GridStyled';
import Article from 'containers/Home/EditorColumn/Article';

const UpperRow = () => {
    return (
        <Fragment>
            <Row>
                <Column sm={12} md={10} lg={10}>
                    <Article/>
                </Column>
                <Column sm={12} md={2} lg={2}>
                    <InfoButtons />
                </Column>
            </Row>
        </Fragment>
    )
}

export default UpperRow;