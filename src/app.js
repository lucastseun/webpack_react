import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="App">
            learn react
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
);