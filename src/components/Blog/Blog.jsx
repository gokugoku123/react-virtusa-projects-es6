import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Article from './Articles/Article/Article';
import Articles from './Articles/Articles';
import Editor from './Editor/Editor';
import Header from './Header/Header';
import Preview from './Preview/Preview';


const Blog = () => {

    const [preview, showPreview] = useState(false);

    const [blogText, setBlogText] = useState('Type Something');
    const [blogList, setBlogList] = useState([]);

    const addToBlogList = (article) => {
        article.id = Math.floor(Math.random() * 100 * Date.now());
        article.createdAt = new Date().toLocaleDateString();
        setBlogList([...blogList, article]);
        localStorage.setItem('blogList', blogList);
    }

    const deleteFromBlogList = (articleId) => {
        const newbloglist = blogList.filter(article => article.id !== articleId);
        setBlogList(newbloglist);
        localStorage.setItem('blogList', blogList);
    }

    const getArticleDetails = (articleID = '') => {
        // console.log(articleID);
        // console.log(blogList);
        const filteredArticle = blogList.filter(article => article.id == articleID);
        // console.log("Fil ", filteredArticle);
        if(filteredArticle.length === 1 )
            return filteredArticle[0];
        return {};
    }



    return ( 
        <>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Articles articles={blogList} deleteByID={deleteFromBlogList} />
                </Route>
                <Route path="/compose">
                    <>
                        {preview && <Preview setBlogText={setBlogText } value={blogText} />}
                        <Editor preview={preview} value={blogText} showPreview={showPreview} addArticle={addToBlogList} setBlogText={setBlogText }  />
                    </>
                </Route>
                <Route path="/posts/:articleId">
                    <Article searchByID={getArticleDetails} />
                </Route>
            </Switch>
        </>
     );
}
 
export default Blog;