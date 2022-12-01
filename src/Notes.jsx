import {useState, useEffect} from 'react';
import axios from 'axios';


import React from 'react';
import classes from './Notes.module.css';



const Notes = () => {

    const [data, setData]= useState([]);

    useEffect(()=> {
        axios.get('http://localhost:3001/notes').then((res) => setData(res.data));
    },[])
    return (
        <div className={classes.notes}>
            <h2>Notes</h2>
            <ul >
                {data.map((note) =>(
                    <li key={note.id} >
                        {note.firstName},{note.lastName},{note.phone},{note.role},{note.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;