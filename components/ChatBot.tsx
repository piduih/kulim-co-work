import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, MessageSquare, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Yo! Kai di sini. Nak tahu macam mana nak produktif 10x ganda di Kulim? Tanya je.",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMsg: Message = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center border-2 border-black shadow-neo-lg transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
          isOpen ? 'bg-red-500 text-white' : 'bg-neo-bg text-black'
        }`}
      >
        {isOpen ? <X size={28} strokeWidth={3} /> : <MessageSquare size={28} strokeWidth={3} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 flex h-[500px] w-[90vw] flex-col overflow-hidden border-2 border-black bg-white shadow-neo-lg sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-black bg-neo-accent p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border-2 border-black bg-white text-black">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="text-base font-black uppercase">Kai_Bot.exe</h3>
                <p className="font-mono text-xs">● Ready To Serve</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-black">
                <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-100 p-4 scrollbar-hide" style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] border-2 border-black p-3 text-sm font-medium shadow-neo-sm ${
                      msg.role === 'user'
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[85%] items-center gap-2 border-2 border-black bg-white px-4 py-3 text-sm font-bold shadow-neo-sm">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="font-mono text-xs">AI SEDANG BERFIKIR...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t-2 border-black bg-white p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Tanya pasal harga/tempat..."
                className="flex-1 border-2 border-black bg-gray-50 px-3 py-2 text-sm font-bold outline-none focus:bg-yellow-100 placeholder:font-mono"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="border-2 border-black bg-neo-green p-2 text-black shadow-neo-sm hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              >
                <Send size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};