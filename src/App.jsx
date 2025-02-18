import React, { useState } from 'react';
import './index.css';
import notificationSound from './assets/notification.mp3';

function App() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const fetchGreeting = async () => {
        if (!name.trim()) {
            setMessage("Name is required.");
            return;
        }
        try {
            const response = await fetch(`https://tusharrajput-greeting-app.onrender.com/api/greet?name=${name}`);
            const data = await response.json();
            setMessage(data.message || data.error);
            
            const audio = new Audio(notificationSound);
            audio.play();
        } catch (error) {
            setMessage("Error fetching greeting.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-900 w-96 text-center">
                <h1 className="text-4xl font-extrabold mb-6">Greeting App</h1>
                <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full border border-gray-300 rounded p-3 mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={fetchGreeting} 
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                    Get Greeting
                </button>
                <p className="mt-6 text-xl font-medium text-gray-700">{message}</p>
            </div>
        </div>
    );
}

export default App;