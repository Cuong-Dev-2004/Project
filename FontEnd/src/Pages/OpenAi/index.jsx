import styles from './OpenAi.module.scss';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import { useState, useRef, useEffect } from 'react';

function OpenAi() {
    const [messages, setMessages] = useState([]);
    const chatRef = useRef(null);
    { console.log(messages) }
    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = document.getElementById('userInput');
        const prompt = input.value.trim();
        if (!prompt) return;

        setMessages(prev => [...prev, { type: 'user', text: prompt }]);
        input.value = '';

        try {
            const res = await axios.post('http://localhost:3000/v1/ServerAi/OpenAi', { prompt });
            const data = res.data;
            setMessages(prev => [...prev, { type: 'bot', text: data.reply }]);
        } catch (err) {
            console.error(' Lỗi khi gọi API:', err);
            setMessages(prev => [...prev, { type: 'bot', text: " Đã xảy ra lỗi!" }]);
        }
    };

    return (
        <div className={styles.OpenAi}>
            <div className={styles.OpenAi_container} ref={chatRef}>
                {messages.map((msg, i) => (
                    <div key={i} className={`message ${styles[msg.type]}`}>
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                ))}
            </div>
            <form id="chatForm" onSubmit={handleSubmit}>
                <input type="text" id="userInput" placeholder="Nhập câu hỏi..." autoComplete="off" />
                <button type="submit">Gửi</button>
            </form>
        </div>
    );
}

export default OpenAi;
