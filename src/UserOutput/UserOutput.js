import React from 'react';

const userOutput = (props) => {
    const style = {
        'background-color': '#eee',
        width: '40%',
        margin: '10px auto',
        border: '1px solid #ccc',
        padding: '10px'
      }
    return(
        <div style={style}>
            <p>My name is {props.username}</p>
            <p>UserOutput Component</p>
        </div>

    )
}

export default userOutput;