import React, { useState } from 'react';

//this component to hold our form for the user to search for desired ticker
const Form = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        setList([...list, input]);
        setInput('');
    };

    const handleDelete = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    const iStyle = {
        paddingTop: '10px',
    };

    return (
        <div>
            <h3>
                Enter the ticker of your choice below, to graphically see the stock price for:
            </h3>
            <div style={iStyle}>
                <input type="text" onChange={handleChange} value={input} />
                <button onClick={handleClick}>Add Item</button>
            </div>
            <ul>
                {list.map((item, index) => (
                    <li key={index} onClick={() => handleDelete(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Form;