import React from 'react'
import { Row } from '../../../style/GridStyles';
import ArticleToPDF from '../../../container/Home/ArticleColumn/ArticleToPDF';
import SaveArticle from './SaveArticle';
import Plagiarism from '../../../container/Home/ArticleColumn/Plagiarism';
import SEORank from './SEORank';
import Readability from '../../../container/Home/ArticleColumn/Readability';

const InfoButtons = () => {
  return (
    <>
      <Row>
        <SaveArticle />
      </Row>
      <Row>
        <ArticleToPDF />
      </Row>
      <Row>
        <SEORank />
      </Row>
      <Row>
        <Readability />
      </Row>
      <Row>
        <Plagiarism />
      </Row>
    </>
  )
}

export default InfoButtons
