import React from 'react';
import { Row } from 'styles/GridStyled';
import ArticleToPDF from 'containers/Home/EditorColumn/ArticleToPDF';
import SEORank from 'containers/Home/EditorColumn/SEORank';
import Readability from 'containers/Home/EditorColumn/Readability';
import Plagiarism from 'containers/Home/EditorColumn/Plagiarism';
import SaveArticle from 'containers/Home/EditorColumn/SaveArticle';

const InfoButtons = ({
    textHtml,
    serpData,
    rankData,
    article
}) => {
    return (
        <Row>
            <SaveArticle
                article={article}
            />
            <ArticleToPDF
                textHtml={article.textHtml} // TODO: change this to a mix of all
            />
            <SEORank
                textHtml={textHtml}
                serpData={serpData}
                rankData={rankData}
                article={article}
            />
            <Readability
                text={article.text}
            />
            <Plagiarism
                text={article.text}
            />
        </Row>
    )
}

export default InfoButtons;