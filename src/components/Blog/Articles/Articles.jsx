import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Articles.module.css';

const Articles = ( { articles = [], deleteByID } ) => {

    const onClickDeleteHandler = (articleID = '') => {
        deleteByID(articleID);
    }

    const displayArticles = () => {
        return articles.map(article => {
            return (
                <div key={article.id} data-articleid={article.id} data-testid="blogArticle" className={classes.ArticleContainer}>
                    <h3>{article.title}</h3>
                    <p>Created At <span>{article.createdAt}</span></p>
                    <div className={classes.ButtonContainer}>
                        <NavLink to={`/posts/${article.id}`} className={classes.ReadMore} >Read More</NavLink>
                        <button data-testid="deleteArticle" onClick={() => onClickDeleteHandler(article.id)} className={classes.DeleteArticle}>Delete</button>
                    </div>
                </div>
            )
        })
    }

    const articleContainerContents = articles.length === 0 ? <h2 className={classes.ArticleContainerTitle}><center>No Articles Found</center></h2> : (
        <>
            <h2 className={classes.ArticleContainerTitle}>All articles</h2>
            <div className={classes.Container}>
                {displayArticles()}
            </div>
        </>
    )

    return ( 
        <>
            <div data-testid="AllArticlesContainer" className={classes.Articles}>
                {articleContainerContents}
            </div>
        </>
     );
}
 
export default Articles;