import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Image as ImageIcon, AlertCircle } from 'lucide-react';

interface Message {
    id: string;
    sender: 'user' | 'bot';
    text: string;
    type?: 'text' | 'remedy' | 'emergency';
    timestamp: Date;
}

export const HealthAssistant = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            sender: 'bot',
            text: 'Hello Priya. I am listening. Tell me about the health concern.',
            timestamp: new Date(),
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: input,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Mock AI Response
        setTimeout(() => {
            let botResponse: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'bot',
                text: 'I understand. Could you tell me how long this has been happening?',
                timestamp: new Date(),
            };

            // Simple keyword matching for demo
            if (input.toLowerCase().includes('fever')) {
                botResponse.text = "I see. For a fever, it's important to keep track of the temperature. Have you measured it?";
            } else if (input.toLowerCase().includes('headache')) {
                botResponse = {
                    ...botResponse,
                    text: "Headaches can be caused by many things. Is it a throbbing pain or a dull ache? In the meantime, drinking water often helps.",
                    type: 'remedy'
                };
            } else if (input.toLowerCase().includes('chest') || input.toLowerCase().includes('pain')) {
                botResponse = {
                    ...botResponse,
                    text: "Chest pain can be serious. Is the person having trouble breathing?",
                    type: 'emergency'
                };
            }

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="chat-page">
            <div className="chat-container">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}>
                        {msg.sender === 'bot' && <div className="bot-avatar">🌿</div>}
                        <div className={`message-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'} ${msg.type === 'emergency' ? 'emergency-bubble' : ''}`}>
                            {msg.type === 'emergency' && (
                                <div className="severity-badge">
                                    <AlertCircle size={16} /> Possible Emergency
                                </div>
                            )}
                            <p>{msg.text}</p>
                            {msg.type === 'remedy' && (
                                <div className="remedy-card-mini">
                                    <strong>Tip:</strong> Hydration/Ginger Tea
                                </div>
                            )}
                            <span className="timestamp">
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="message-row bot-row">
                        <div className="bot-avatar">🌿</div>
                        <div className="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="input-area">
                <button className="icon-btn"><ImageIcon size={20} /></button>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Type or speak..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && handleSend()}
                    />
                    <button className="mic-btn"><Mic size={18} /></button>
                </div>
                <button className="send-btn" onClick={handleSend} disabled={!input.trim()}>
                    <Send size={20} />
                </button>
            </div>

            <style>{`
        .chat-page {
          height: calc(100vh - 140px); /* Adjust for header/nav */
          display: flex;
          flex-direction: column;
        }
        .chat-container {
          flex: 1;
          overflow-y: auto;
          padding-bottom: var(--spacing-4);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }
        .message-row {
          display: flex;
          gap: 8px;
          max-width: 85%;
        }
        .user-row {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .bot-row {
          align-self: flex-start;
        }
        .bot-avatar {
          width: 32px;
          height: 32px;
          background: var(--color-primary-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        .message-bubble {
          padding: 12px 16px;
          border-radius: 16px;
          position: relative;
          box-shadow: var(--shadow-sm);
        }
        .user-bubble {
          background: var(--color-primary);
          color: white;
          border-bottom-right-radius: 4px;
        }
        .bot-bubble {
          background: white;
          color: var(--color-text-main);
          border-bottom-left-radius: 4px;
          border: 1px solid var(--color-surface-dim);
        }
        .emergency-bubble {
          border: 2px solid var(--color-emergency);
          background: #FEF2F2;
        }
        .severity-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--color-emergency);
          font-weight: 700;
          font-size: 0.75rem;
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        .remedy-card-mini {
          margin-top: 8px;
          background: var(--color-surface-dim);
          padding: 8px;
          border-radius: 8px;
          font-size: 0.85rem;
          border-left: 3px solid var(--color-accent);
        }
        .timestamp {
          display: block;
          font-size: 0.65rem;
          margin-top: 4px;
          opacity: 0.7;
          text-align: right;
        }
        
        .input-area {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          background: white;
          border-top: 1px solid var(--color-surface-dim);
        }
        .input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          background: var(--color-surface-dim);
          border-radius: 24px;
          padding: 8px 16px;
        }
        .input-wrapper input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          font-size: 1rem;
        }
        .icon-btn, .send-btn {
          border: none;
          background: none;
          cursor: pointer;
          color: var(--color-text-muted);
          padding: 8px;
        }
        .send-btn {
          color: var(--color-primary);
        }
        .mic-btn {
          border: none;
          background: none;
          color: var(--color-primary);
        }
        
        .typing-indicator span {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--color-text-muted);
          border-radius: 50%;
          margin-right: 4px;
          animation: typing 1s infinite;
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
        </div>
    );
};
