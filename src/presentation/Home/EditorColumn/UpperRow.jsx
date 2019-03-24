import React, { Fragment } from 'react'
import InfoButtons from './InfoButtons';
import { Row, Column } from 'styles/GridStyled';
import Article from 'containers/Home/EditorColumn/Article';

const UpperRow = ({
    set,
    title,
    meta,
    text,
    textHtml,
    serpData,
    rankData,
    article
}) => {
    return (
        <Fragment>
            <Row>
                <Column sm={12} md={10} lg={10}>
                    <Article
                        set={set}
                        title={title}
                        meta={meta}
                        text={text}
                    />
                </Column>
                <Column sm={12} md={2} lg={2}>
                    <InfoButtons
                        set={set}
                        serpData={serpData}
                        rankData={rankData}
                        textHtml={textHtml}
                        article={article}
                    />
                </Column>
            </Row>
        </Fragment>
    )
}

export default UpperRow;