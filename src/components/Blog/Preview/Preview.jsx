import classes from './Preview.module.css';
import React, { useState } from 'react';
import Markdown from 'react-textarea-markdown';

const Preview = ( props ) => {

    const [viewTextArea, setViewTextArea] = useState(false);

    const onClickHandler = (event) => {
        console.log(event.target.value)
        setViewTextArea(prevState => !prevState);
    }

    return ( 
        <div data-testid="previewContainer" className={classes.PreviewContainer}>
            <div className={classes.PreviewHeading}>
                <h4>Preview Editor</h4>
                {/* <div className={classes.CustomInput}>

                    <input type="checkbox" onChange={onChangeHandler} name="checkbox" id="checkbox" value="true"/>
                    <label htmlFor="checkbox">Show custom input</label>
                </div> */}
                <button 
                    data-testid="previewTextAreaToggler"
                    className={classes.PreviewButton} 
                    onClick={onClickHandler}
                > {viewTextArea ? 'Hide custom input' : 'Show custom input '} </button>
            </div>
            
            <div className={classes.MarkdownContainer}>
                <Markdown textarea={viewTextArea} customWidth={[50,50]} callback={(e) => {props.setBlogText(e)}} source={props.value || ''}/>
            </div>
        </div>
     );
}
 
export default Preview;