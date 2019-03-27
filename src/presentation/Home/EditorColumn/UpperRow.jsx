import React, { Fragment } from 'react'
import InfoButtons from './InfoButtons';
import { Row, Column } from 'styles/GridStyled';
import ArticleStorage from 'containers/Home/EditorColumn/ArticleStorage';

const UpperRow = ({
    setPair,
    serpData,
    rankData,
    article
}) => {
    return (
        <Fragment>
            <Row>
                <Column sm={12} md={10} lg={10}>
                    <ArticleStorage />
                </Column>
                <Column sm={12} md={2} lg={2}>
                    <InfoButtons
                        set={setPair}
                        textHtml={article.textHtml}
                        serpData={serpData}
                        rankData={rankData}
                        article={article}
                    />
                </Column>
            </Row>
        </Fragment>
    )
}

export default UpperRow;