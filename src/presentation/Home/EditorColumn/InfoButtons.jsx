import React from 'react';
import { Row } from 'styles/GridStyled';
import SaveArticle from './SaveArticle';
import ArticleToPDF from 'containers/Home/EditorColumn/ArticleToPDF';
import SEORank from 'containers/Home/EditorColumn/SEORank';
import Readability from 'containers/Home/EditorColumn/Readability';
import Plagiarism from 'containers/Home/EditorColumn/Plagiarism';

const InfoButtons = ({
    saveArticle,
    message,
    textHtml,
    serpData,
    rankData,
    article
}) => {
    return (
        <Row>
            <SaveArticle
                saveArticle={saveArticle}
                message={message}
            />
            <ArticleToPDF
                textHtml={textHtml} // TODO: change this to a mix of all
            />
            <SEORank
                textHtml={textHtml}
                serpData={serpData}
                rankData={rankData}
                article={article}
            />
            <Readability
                textHtml={textHtml}
            />
            <Plagiarism
                text={article.text}
            />
        </Row>
    )
}

export default InfoButtons;