import React from 'react';
import { SEOContext, DnDContext } from '../store';
import {default as ArticleModule} from '../Article/Article';

const Article = () => {
    const { state:
        { DnDTitle, DnDMeta, DnDEditor }
    } = React.useContext(DnDContext);

    const { actions: { setPair } } = React.useContext(SEOContext);

    return (
        <ArticleModule
            DnDTitle={DnDTitle}
            DnDMeta={DnDMeta}
            DnDEditor={DnDEditor}
            setPair={setPair}
        />
    )
}

export default Article
