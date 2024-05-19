import React from 'react';
import Chat from './Chat';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Lead Qualification Chatbot</h1>
                <Chat />
            </header>
        </div>
    );
};

export default App;
