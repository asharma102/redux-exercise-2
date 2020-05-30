import React, { useState } from 'react';

import './AddPerson.css';
//import { render } from 'react-dom';

const addPerson = (props) => {
    const [personsNameState, setPersonsNameState] = useState({
        name: '',
        id: ''
    });
    const [personsAgeState, setPersonsAgeState] = useState({
        age: '',
    });

    const onAddPersonName = (event) => {

        setPersonsNameState({
            name: event.target.value,
        })
        //console.log(personsState)
    }
    const onAddPersonAge = (event) => {
        setPersonsAgeState({
            age: event.target.value
        })
    }

    return (
        <div className="AddPerson">
            <input type="text" placeholder="Name" onChange={(event) => onAddPersonName(event)} />
            <input type="text" placeholder="Age" onChange={(event) => onAddPersonAge(event)} />

            <button onClick={() => props.personAdded(personsNameState.name, personsAgeState.age, Math.random())}>Add Person</button>
        </div>
    );
};

export default addPerson;