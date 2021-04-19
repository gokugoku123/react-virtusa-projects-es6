import React from 'react'

const Component1 = (props) => {

    const styles = {
        padding : "2rem",
        backgroundColor : "lightgreen",
        margin : "2rem auto",
        borderRadius : "10px",
        width : "50%"
    }

    return ( 
        <h4 data-testid="component1" style={styles}>Component 1</h4>
     );
}
 
export default Component1;