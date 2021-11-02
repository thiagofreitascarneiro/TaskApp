import React from 'react'
import Button from './Button'

import { useParams } from 'react-router-dom'

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();

    console.log(params);

    return (
        <>
            <div className="back-button-container">
                <Button>back to page</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Loreim ipsun, bobbv asdfs\dfsadg dsagasg     
                </p>
            </div>
        </>
    );
};

export default TaskDetails;