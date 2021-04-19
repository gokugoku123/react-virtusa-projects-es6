import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import classes from './TaskList.module.css';

const TaskList = ( props ) => {

    const [open, setOpen] = useState(false);

    const [notStarted, setNotStarted] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);

    let tempDragValue;

    const addTask = (event) => {
        event.preventDefault();
        const taskValue = event.target[0].value;
        if(taskValue)
            setNotStarted(prevState => [...prevState, taskValue])
        setOpen(false);
    }

    const onDragStartHandler = (e, taskName) => {
        tempDragValue = {
            taskName,
            taskListId : e.target.getAttribute(['data-listnumber'])
        };

        // console.log(tempDragValue);
    }

    const onDragOverHandler = (e) => {
        e.preventDefault();
    }

    const onDropHandler = (e) => {
        // console.log(e.target);
        const dropContainerName = e.target.getAttribute('name');

        const dropContainerID = dropContainerName === 'notstarted' ? '1' : dropContainerName === 'inprogress' ? '2' : '3';

        if(dropContainerID == tempDragValue.taskListId)
            return;

        /*
        console.group();
            console.log("Drop done");
            console.log(`Con Name : ${dropContainerName} and Con ID : ${dropContainerID}`);
        console.groupEnd();
        */

        removeFromList(tempDragValue);
        AddToList(tempDragValue.taskName, dropContainerID);
    }

    const AddToList = (taskName, taskListId) => {

        /*
        console.group();
            console.log("Called Add to list");
            console.log(`${taskName} and addcontainer ${taskListId}`);
        console.groupEnd();
        */
        

        switch (taskListId) {
            case "1": {
                setNotStarted(prevState => [...prevState, taskName]);
                break;
            }
            case "2": {
                setInProgress(prevState => [...prevState, taskName]);
                break;
            }
            case "3": {
                setCompleted(prevState => [...prevState, taskName]);
                break;
            }   
            default:
                break;
        }

    }

    const removeFromList = ({taskName, taskListId}) => {
        /*
        console.log("Called");
        console.log(`${taskName} and ${taskListId}`);
        */

        switch (taskListId) {
            case "1": {
                setNotStarted(prevState => prevState.filter(item => item !== taskName));
                break;
            }
            case "2": {
                setInProgress(prevState => prevState.filter(item => item !== taskName));
                break;
            }
            case "3": {
                setCompleted(prevState => prevState.filter(item => item !== taskName));
                break;
            }   
            default:
                break;
        }

    }

    const displayList = (list = [], listId = '1') => {
        return list.map(task => (
                <li 
                    draggable 
                    className={listId == '1' ? classes.ListItem1 : listId == '2' ? classes.ListItem2 : classes.ListItem3} 
                    key={Math.random().toFixed(2) * Date.now()} 
                    onDragStart={(e) => onDragStartHandler(e, task)}
                    data-listnumber={listId}
                    data-testid={listId == '1' ? 'notCompletedListItem' : listId == 'inProgressListItem' ? classes.ListItem2 : "completedListItem"}
                >
                    {task}
                </li>
            )
        )
    }

    return ( 
        <>
            <h1>To Do List Application</h1>
            <button data-testid="add" onClick={() => setOpen(true)} className={classes.NewTask}>New Task +</button>

            <div className={classes.Container}>
                <div data-testid="notstarted" name="notstarted"  onDragOver={onDragOverHandler} onDrop={onDropHandler} className={classes.NotStarted}>
                   <h3>Not Started</h3>
                   {displayList(notStarted, "1")}
                </div>
                <div data-testid="inprogress" name="inprogress" onDragOver={onDragOverHandler} onDrop={onDropHandler} className={classes.InProgress}>
                    <h3>In Progress</h3>
                    {displayList(inProgress, "2")}
                </div>
                <div data-testid="completed" name="completed" onDragOver={onDragOverHandler} onDrop={onDropHandler} className={classes.Completed}>
                    <h3>Completed</h3>
                    {displayList(completed, "3")}
                </div>
            </div>
            <Modal open={open} addTask={addTask} setModal={setOpen} />
        </>
     );
}
 
export default TaskList;