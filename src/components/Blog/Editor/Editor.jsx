import classes from './Editor.module.css';
import React from 'react';
import { useHistory } from 'react-router';

const Editor = (props) => {

    const history = useHistory();

    const onChangeHandler= (e) => {
        props.setBlogText(e.target.value);
    }

    const onClickePreviewHandler = () => {
        props.showPreview(prevState => !prevState);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const [title, description] = [e.target[0].value, e.target[1].value];

        const article = {
            title,
            description
        }
        props.addArticle(article);
        history.push('/');

    }

    return ( 
        <div data-testid="editorContainer" className={classes.EditorContainer}>
            <div className={classes.EditorHeading}>
                <h4>Editor</h4>
                <div className={classes.PreviewHeading}>
                    <button 
                        data-testid="editorPreviewToggler"
                        className={classes.PreviewButton} 
                        onClick={onClickePreviewHandler}
                    > {props.preview ? 'Hide Preview' : 'Show Preview'} </button>
                </div>
            </div>
            <form data-testid="editorForm" className={classes.EditorForm} onSubmit={onSubmitHandler} action="/" method="post">
                <input data-testid="inputArticleName" name="title" id="title" required type="text" placeholder="Title of the article"/>
                <textarea data-testid="inputArticleDescription" name="description" id="description" value={props.value} onChange={onChangeHandler} cols="30" rows="10">
                    # Start typing ( Markdown);
                </textarea>
                <button data-testid="editorSubmit" disabled={props.value == '' ? true : false} type="submit">Save + </button>
            </form>
        </div>
     );
}
 
export default Editor;