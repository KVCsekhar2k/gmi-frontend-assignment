import React, { useState } from 'react';
import { chatQuery } from '../api';

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi — ask me about the dataset (e.g., "Show total for Asia in 2022").' }]);
  const [input, setInput] = useState('');

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(m => [...m, userMsg]);
    setInput('');
    try {
      const res = await chatQuery(input);
      const botText = res.reply || JSON.stringify(res);
      setMessages(m => [...m, { from: 'bot', text: botText }]);
    } catch (e) {
      setMessages(m => [...m, { from: 'bot', text: 'Error processing query.' }]);
    }
  };

  return (
    <div className={`chat-widget ${open ? 'open' : 'closed'}`}>
      <div className="chat-header" onClick={() => setOpen(!open)}>AI Assistant</div>
      {open && <div className="chat-body">
        <div className="messages">
          {messages.map((m, i) => <div key={i} className={`msg ${m.from}`}>{m.text}</div>)}
        </div>
        <div className="chat-input">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about the data..." />
          <button onClick={send}>Send</button>
        </div>
      </div>}
    </div>
  );
}
