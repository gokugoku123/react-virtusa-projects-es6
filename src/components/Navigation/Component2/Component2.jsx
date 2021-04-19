import React from 'react'

const Component2 = (props) => {

    const styles = {
        padding : "2rem",
        backgroundColor : "lightblue",
        margin : "2rem auto",
        borderRadius : "10px",
        width : "50%"
    }

    return ( 
        <h4 data-testid="component2" style={styles}>Component 2</h4>
     );
}
 
export default Component2;