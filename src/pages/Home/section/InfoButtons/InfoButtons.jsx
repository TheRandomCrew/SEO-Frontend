import React from 'react'
import { Row } from '../../style/GridStyles';
import ArticleToPDF from './ArticleToPDF';
import SaveArticle from './SaveArticle';
import Plagiarism from './Plagiarism';
import SEORank from './SEORank';
import Readability from './Readability';

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
