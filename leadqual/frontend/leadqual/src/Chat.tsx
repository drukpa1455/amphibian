import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface Message {
    user: 'me' | 'bot';
    text: string;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

    const sendMessage = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/chat', {  // Updated port to 5001
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: input })
        });

        const data = await response.json();
        setMessages([...messages, { user: 'me', text: input }, { user: 'bot', text: data.response }]);
        setInput('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.user}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
