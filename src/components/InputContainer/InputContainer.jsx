import React, { Component } from 'react';
import Input from '../Input/Input';

class InputContainer extends Component {
    state = { 
        inputList : [
            {
                type : "text",
                label : "Enter your username",
                placeholder : "your Username",
                datatestid : 'username'
            },
            {
                type : "email",
                label : "Enter your email",
                placeholder : "Your Email",
                datatestid : 'email',
            },
            {
                type : "password",
                label : "Enter your password",
                placeholder : "your Password",
                datatestid : 'password'
            },
        ]
     }
    render() {
        
        const containerStyles = {
            display : "flex",
            flexDirection : 'column',
            justifyContent : 'flex-end',
            padding : "5em 5em",
            width : "40%",
            margin : "0 auto",
            border : "1px solid #aaa",
            textAlign : 'left',
            borderRadius : "0.1rem 0.1rem 0.5rem 0.5rem",
            boxShadow : '0.5rem 0.5rem 0.3rem #ddd',
            backgroundColor : "#ffffee"
        }

        return ( 
            <div className="" style={{}}>
                <h1><center>Dynamic Form</center></h1>
                <div className="" style={containerStyles}>
                    {this.state.inputList.map(input => {
                        return <Input 
                            type={input.type}
                            label={input.label}
                            placeholder={input.placeholder}
                            datatestid = {input.datatestid}
                        />
                        })}
                </div>
            </div>
            
        );
    }
}
 
export default InputContainer;