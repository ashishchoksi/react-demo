import React from 'react';

// we need React it automatic convert below html to bebel
const person = (props) => {
    return <div>
        <p onClick={props.click}>I am {props.name} my age is {props.age}</p>
        <input value={props.name} onChange={props.changed} type="text" />
    </div>
};

export default person;