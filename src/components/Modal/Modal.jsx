import React, { useState } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';


const Modal = ( { open, setModal, ...rest } ) => {

    if(! open )
        return null;


    return ( 
        ReactDOM.createPortal(
            <>
                <div data-testid="overlay" className={classes.Overlay} onClick={() => setModal(false)} ></div>
                <div data-testid="modalContainer" className={classes.Modalcontainer}>
                    <h4>Add an Item</h4>
                    <form data-testid="modalForm" action="/" onSubmit={rest.addTask}>
                        <input data-testid="modalInput" autoFocus className={classes.Input} type="text" placeholder="Type a task"/>
                        <button data-testid="modalAdd" type="submit" className={classes.AddButton} >Add</button>
                    </form>
                </div>
            </>,
            document.getElementById('portal')
        )
     );
}
 
export default Modal;