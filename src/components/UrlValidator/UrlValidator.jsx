import React, { useState } from 'react';
import classes from './UrlValidator.module.css';
import { makeHttpRequestUrl, testValidateURL } from './utility'

const UrlValidator = ( props ) => {


    const [show, setShow] = useState(true);
    const [method, setMethod] = useState('GET');

    const [message, setMessage] = useState({
        status : 'none',
        message : ''
    });

    const checkValidity = (url, path = '', body = {}) => {
        
        const result = makeHttpRequestUrl(url, path, method, body);
        console.log(result);
        const finalResult = testValidateURL(result);
        console.log('Final = ' + finalResult);

        if(finalResult) {
            setMessage({status : 'success', message: result})
            setTimeout(() => {
                setMessage({status : 'none', message: ''})
            }, 1500)
        } else {
            setMessage({status : 'fail', message: 'Invalid URL! Please recheck your URL'})
            setTimeout(() => {
                setMessage({status : 'none', message: ''})
            }, 1500);
        }


    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let domain = e.target[0].value;
        let path = e.target[1].value;
        let body = {}

        if(!['DELETE', 'GET'].includes(method)) {
            try {
                console.log("Inside GELETE GET");
                body = JSON.parse(e.target[3].value);
                checkValidity(domain, path, body);
            } catch(err) {
                setMessage({status : 'fail', message: 'Error in the Body'})
                setTimeout(() => {
                    setMessage({status : 'none', message: ''})
                }, 1500)
            }
        } else if (method === 'GET') {
            try {
                if(e.target[3].value === '')
                    checkValidity(domain, path, {}); 
                else {
                    body = JSON.parse(e.target[3].value);
                    checkValidity(domain, path, body); 
                }
                    
            } catch(err) {
                console.log(err);
                setMessage({status : 'fail', message: 'Error in the Body of the Query Params'})
                setTimeout(() => {
                    setMessage({status : 'none', message: ''})
                }, 1500)
            }
        }  else if (method === 'DELETE') {
            try {
                if(e.target[3].value === '')
                    checkValidity(domain, path, {}); 
                else {
                    body = JSON.parse(e.target[3].value);
                    checkValidity(domain, path, body); 
                }
                    
            } catch(err) {
                console.log(err);
                setMessage({status : 'fail', message: 'Error in the Body'})
                setTimeout(() => {
                    setMessage({status : 'none', message: ''})
                }, 1500)
            }
        }
        console.log(body);
        // console.log(finalURL);
        // checkValidity(finalURL)

    }

    const onChangeDropDown = (e) => {
        let methodName = e.target.value;

        if(['PUT', 'POST', 'GET'].includes(methodName)) {
            setShow(true);
        } else {
            setShow(false);
        }
        setMethod(methodName);
    }



    const bodyElement = (
        show && 
        <>
            <label className={classes.Label} htmlFor="label">Body</label>
            <textarea data-testid="body" required={ method === 'GET' ? false :  ['POST', 'PUT'].includes(method) } className={classes.TextArea} rows="4" cols="10" placeholder={method === 'GET' ? "Enter the Query Params as an Object" : "Enter the body to send with the request"} ></textarea>
        </>
    );

    const AlertElement = (
                message.status !== 'none' &&
                <div data-testid="message" className={`${classes.Message} ${message.status === 'success' ? classes.Green : classes.Red}`}>
                    {message.message}
                </div>
    )


    return ( 
        <>
            <h2>Url Validator</h2>
            
            <form data-testid="submit" className={classes.Container} onSubmit={onSubmitHandler}>
                
                {AlertElement}

                <label className={classes.Label} htmlFor="label">Domain</label>
                <input data-testid="domain" required className={ classes.Input } type="text" placeholder="Enter the Domain URL"/>
                <label className={classes.Label} htmlFor="label">Path</label>
                <input data-testid="path" className={ classes.Input } type="text" placeholder="Enter the path variables separated by comma"/>


                <label className={classes.Label} htmlFor="label">Method</label>
                <select data-testid="method" className={classes.Dropdown} onChange={onChangeDropDown} defaultValue={method} >
                    <option selected className={classes.Option} defaultValue="GET">GET</option>
                    <option className={classes.Option} defaultValue="POST">POST</option>
                    <option className={classes.Option} defaultValue="PUT">PUT</option>
                    <option className={classes.Option} defaultValue="DELETE">DELETE</option>
                </select>

                {bodyElement}
                <button data-testid="validate" type="submit" className={classes.Button}>Validate</button>
            </form>
        </>
     );
}
 
export default UrlValidator;