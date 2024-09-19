

import React, { useState, useEffect } from 'react';
import './Chatwithcharli.scss';
import axios from 'axios';

function Bank() {
    const [responses, setResponses] = useState([]); // Changed to array to store multiple responses
    const [question, setQuestion] = useState('');
    const [userEmail, setUserEmail] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch current user's email from localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUserEmail(parsedUser.email);
        }
    }, []);

    const handleStart = async () => {
        if (!question.trim()) return; // Avoid sending empty questions
        setLoading(true); // Show loader
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/chat`, {
                email: userEmail,
                questions: [question],
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = response.data;
            setResponses([...responses, { question, response: data.responses[0] }]); // Append new question and response
            setQuestion(''); // Clear the input field
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Hide loader
        }
    };

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleClearChat = () => {
        setResponses([]); // Clear all responses
    };

    return (
        <div className="messageBox">
            <span className='logo'>AI</span>
            <h4>How can I help you today?</h4>
            <div className="responses-container">
                {responses.map((res, index) => (
                    <div key={index}>
                        <div className="response user">
                            <div className="chat-message">
                                <div className="chat-message-inner">
                                    <p>{res.question}</p>
                                </div>
                            </div>
                        </div>
                        <div className="response ai">
                            <div className="chat-message">
                                <div className="chat-message-inner">
                                    <p>{res.response}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="response ai">
                        <div className="chat-message">
                            <div className="chat-message-inner">
                                <p>Loading...</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="cards">
                {/* Your existing mini-cards */}
            </div>
            <div className="input-group">
                <input type="text" placeholder='Message AI....' value={question} onChange={handleChange} />
                <div className="button-group">
                    <button className="start" onClick={handleStart}><img src="/images/arrow-up.svg" alt="arrow-up" /></button>
                    <button className="clear-chat" onClick={handleClearChat}>Clear Chat</button>
                </div>
            </div>
            <p className='info'>AI can make mistakes. Consider checking important information</p>
        </div>
    );
}

export default Bank;
