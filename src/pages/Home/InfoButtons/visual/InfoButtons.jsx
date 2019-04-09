import React from 'react'
import Grid from 'styled-components-grid';
import ArticleToPDF from '../logic/ArticleToPDF';
import SaveArticle from '../logic/SaveArticle';
import Plagiarism from '../logic/Plagiarism';
import SEORank from './SEORank';
import Readability from '../logic/Readability';

const InfoButtons = ({ userID, title, meta, text, textHtml }) => {
  return (
    <Grid halign="right">
      <Grid.Unit size={{ mobile: 0.5, tablet: 0.2, desktop: 1 }}>
        <SaveArticle 
          userID={userID}
          title={title}
          meta={meta}
          text={text}
        />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 0.5, tablet: 0.2, desktop: 1 }}>
        <ArticleToPDF
          title={title}
          meta={meta}
          textHtml={textHtml}
        />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 0.3, tablet: 0.2, desktop: 1 }}>
        <SEORank />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 0.3, tablet: 0.2, desktop: 1 }}>
        <Readability 
          text={text}
          />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 0.3, tablet: 0.2, desktop: 1 }}>
        <Plagiarism 
          text={text}
        />
      </Grid.Unit>
    </Grid>
  )
}

export default InfoButtons
