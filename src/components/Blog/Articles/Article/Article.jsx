import classes from './Article.module.css';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import { useParams } from 'react-router';

const Article = ( {searchByID } ) => {

    let [article, setArticle] = useState({
        title : '',
        description : '',
        createdAt : ''
    })

    
    const { articleId } = useParams();
    console.log("Article Id === [ Article ]", articleId)

    useEffect(() => {
        article = searchByID(articleId);
        setArticle(article);
        // console.log("Article", article);
    }, [])

    return ( 
        <>
            <div data-testid="MarkdownContainer" className={classes.Container}>
                <p data-testid="ArticleTitle" className={classes.Title}>{article.title}</p>
                <hr className={classes.HrLine}/>
                <p data-testid="CreatedAt" className={classes.CreatedAt}  >created At <span>{article.createdAt}</span></p>
                <ReactMarkdown remarkPlugins={[gfm]} children={article.description} />
            </div>
        </>
     );
}
 
export default Article;