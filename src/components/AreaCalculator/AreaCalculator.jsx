import React, { Component } from 'react';
import classes from './AreaCalculator.module.css';
import { getAreaOfCircle } from './utility';

class AreaCalculator extends Component {
    
    state = {
        radius : "",
        answer : "",
      }
    
      changeRadiusHandler = (event) => {
        let answer = getAreaOfCircle(event.target.value)
        this.setState({answer : answer, radius : event.target.value});
      }
    
      
    
      resetHandler = (event) => {
        this.setState({
          radius : 0,
          answer : ""
        })
      }
    
    
      render() {
         return (
          <div className={classes.Container}>
            <h1> Area Calculator </h1>
            <label className={classes.label} htmlFor="radius">Enter the radius of a circle : </label>
            <input data-testid="input" className={classes.Input} type="number" onChange={this.changeRadiusHandler} id="radius" value={this.state.radius} />
            {(this.state.radius !== "" ) && <h3 data-testid="result" className={classes.Answer}>The area of circle with radius {this.state.radius} is {this.state.answer}</h3>}
        </div>)
      }
}

 
export default AreaCalculator;