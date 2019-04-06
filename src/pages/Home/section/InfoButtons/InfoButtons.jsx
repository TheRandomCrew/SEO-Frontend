import React from 'react'
import Grid from 'styled-components-grid';
import ArticleToPDF from './ArticleToPDF';
import SaveArticle from './SaveArticle';
import Plagiarism from './Plagiarism';
import SEORank from './SEORank';
import Readability from './Readability';

const InfoButtons = () => {
  return (
    <Grid halign="right">
      <Grid.Unit size={{ mobile: 0.5, tablet: 0.2, desktop: 1 }}>
        <SaveArticle />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 0.5, tablet: 0.2, desktop: 1 }}>
        <ArticleToPDF />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 0.3, tablet: 0.2, desktop: 1 }}>
        <SEORank />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 0.3, tablet: 0.2, desktop: 1 }}>
        <Readability />
      </Grid.Unit>
      <Grid.Unit size={{ mobile: 0.3, tablet: 0.2, desktop: 1 }}>
        <Plagiarism />
      </Grid.Unit>
    </Grid>
  )
}

export default InfoButtons
