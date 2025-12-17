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
      text: "Hi there! I'm Kai. Boring weekend? How can I help you get productive today in Kulim?",
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
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-900'
        } text-white`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[90vw] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center gap-2 border-b bg-brand-50 p-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-200 text-brand-800">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Kai (AI Manager)</h3>
              <p className="text-xs text-green-600">● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 scrollbar-hide">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 shadow-sm text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-2xl rounded-tr-none bg-brand-900 text-white'
                        : 'rounded-2xl rounded-tl-none bg-white text-gray-800 border border-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[85%] items-center gap-2 rounded-2xl rounded-tl-none bg-white px-4 py-3 text-sm text-gray-500 shadow-sm border border-gray-100">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-xs">Kai is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t bg-white p-3">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-100">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about pricing, hours..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-brand-900 hover:text-brand-600 disabled:opacity-30"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};