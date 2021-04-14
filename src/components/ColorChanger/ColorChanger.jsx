import React, { useEffect, useState } from 'react';
import DropDown from '../Dropdown/Dropdown';

const ColorChanger = props => {

    const optionsList = [
        {
            label : 'Lime',
            value : 'lime'
        },
        {
            label : 'Lavender',
            value : 'lavender'
        },
        {
            label : 'Crimson',
            value : 'crimson'
        },
        {
            label : 'Darkblue',
            value : 'darkblue'
        },
        {
            label : 'Teal',
            value : 'teal'
        },
        {
            label : 'Rebecca Purple',
            value : 'rebeccapurple'
        },
        {
            label : 'Ghost White',
            value : 'ghostwhite'
        },
        {
            label : 'Aqua Marine',
            value : 'aquamarine'
        },
        {
            label : 'Alice Blue',
            value : 'aliceblue'
        },
    ];

    const [ selectedOption, setSelectedOption] = useState(optionsList[0]);

    const divStyle = {
        backgroundColor : selectedOption.value,
        width: '70%',
        margin: '100px auto',
        borderRadius : '10px',
        height : '250px',
        border : '4px solid black',
        transition : "all 0.3s"
    }

    return (
        <>
            <h1><center>Color changer</center></h1>
            <DropDown selected={selectedOption} listedOptions={optionsList} onSelectOption={setSelectedOption} />
            <div className="ui container ">
                <div id="box" style={divStyle}></div>
            </div>
        </>
    )
}

export default ColorChanger;