import React from 'react';

const person = (props) => {
    return (
        <div>
            <p className="blue">Hello Person {props.name} and {props.age}</p>
            {props.change ? <input type="text" onChange={props.change} value={props.name}/> : null}
            {props.click ? <button onClick={props.click}>Delete Person</button> : null}
        </div>
    )
};

export default person;