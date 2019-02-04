// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Create a React Component
const App = () => {
    const buttonText = { text: 'Click me'};
    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    );
};
ReactDOM.render(
    <App />,
    document.querySelector('#root')
) 

// Take the react component and display