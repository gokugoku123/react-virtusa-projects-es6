import React, { Component } from 'react';
import classes from "./Input.module.css"

class Input extends Component {
    state = { 
        value : '',
        error : false,
        focus : false,
        message : '',
        messageColor : 'none'
     }

     onFocusHandler = () => {
         if(this.state.value === '') {
            this.setState({focus : true, error : true})
            this.checkValidity()
         } else {
             this.setState({focus : true})
         }
         
     }

    validateEmail = (value = '') => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const testValue =  re.test(String(value).toLowerCase());

        if(!testValue) {
            this.setState({
                error : true,
                value,
                message : 'Invalid Email',
                messageColor : 'TEXT_RED'
            })
        } else {
            this.setState({
                 error : false,
                 value,
                 message : '',
                 messageColor : 'TEXT_GREEN'
            })
        }

    }

    CheckPasswordStrength = (password = '') => {
      
          //if textBox is empty
          if(password.length==0){
              this.setState({
                  error : true,
                  value : password,
                  message : 'Please Fill the password',
                  messageColor : 'TEXT_RED'
              })
              return;
          }
      
          //Regular Expressions
          var regex = new Array();
          regex.push("[A-Z]"); //For Uppercase Alphabet
          regex.push("[a-z]"); //For Lowercase Alphabet
          regex.push("[0-9]"); //For Numeric Digits
          regex.push("[$@$!%*#?&]"); //For Special Characters
      
          var passed = 0;
      
          //Validation for each Regular Expression
          for (var i = 0; i < regex.length; i++) {
              if((new RegExp (regex[i])).test(password)){
                  passed++;
              }
          }
      
          //Validation for Length of Password
          if(passed > 2 && password.length > 8){
              passed++;
          }
      
          //Display of Status
          let color = "";
          let passwordStrength = "";
          let errorPassword = false

          switch(passed){
              case 0:
                  break;
              case 1:
                  passwordStrength = "Password is Weak";
                  color = "TEXT_RED";
                  errorPassword = true;
                  break;
              case 2:
                  passwordStrength = "Password is Good";
                  color = "DARK_ORANGE";
                  break;
              case 3:
                      break;
              case 4:
                  passwordStrength = "Password is Strong";
                  color = "TEXT_GREEN";
                  break;
              case 5:
                  passwordStrength = "Password is Very Strong";
                  color = "TEXT_DARK_GREEN";
                  break;
          }

          this.setState({
            error : errorPassword,
            value : password,
            messageColor : color,
            message : passwordStrength
          })
      }

      CheckText = (value) => {
          if(value == '') {
              this.setState({
                  error : true,
                  value,
                  message : 'Please Fill the column',
                  messageColor : 'TEXT_RED'
              })
          } else {
            this.setState({
                error : false,
                value,
                message : '',
                messageColor : 'none'
            })
          }
      }



     checkValidity = (value = '') => {

        switch(this.props.type) {
            case 'email' : 
                this.validateEmail(value);
                break;
            case 'password' :
                this.CheckPasswordStrength(value);
                break;
            case 'text' :
                this.CheckText(value);

        }
     }

     messageRenderer = () => {

        let colorValue = [];

        if(this.state.message != '') {
            switch (this.state.messageColor) {
                case 'RED':
                    colorValue.push(classes.Red);
                    break;
                case 'TEXT_RED':
                    colorValue.push(classes.TextRed);
                    break;
                case 'TEXT_GREEN':
                    colorValue.push(classes.TextGreen);
                    break;
                case 'TEXT_DARK_GREEN':
                    colorValue.push(classes.TextDarkGreen);
                    break;
                case 'DARK_ORANGE':
                    colorValue.push(classes.TextDarkOrange);
                    break;
                default:
                    break;
            }

            return <p data-testid='message' className={colorValue.toString()}>{this.state.message}</p>
        }

     }


     onChangeHandler = (e) => {
        this.checkValidity(e.target.value)
     }
    render() { 

        const classList = [classes.Input];

        if(this.state.focus) {
            this.state.error ? classList.push(classes.Red) : classList.push(classes.Green);
        }

        return ( 
            <>
                <label htmlFor="input" className={classes.Label}>{this.props.label}</label>
                <input data-testid={this.props.datatestid} className={classList.join(' ')} type={this.props.type} onFocus={this.onFocusHandler} placeholder={this.props.placeholder} onchangeHandler value={this.props.value || this.state.value} onChange={this.props.change || this.onChangeHandler} />
                {this.messageRenderer()}
            </>
         );
    }
}
 
export default Input;