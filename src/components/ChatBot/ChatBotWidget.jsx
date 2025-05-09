import React, { useState, useRef, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const ChatbotWidget = ({ onResponse }) => {
    const [inputVisible, setInputVisible] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    const toggleInput = () => {
        setInputVisible(!inputVisible);
        setInput("");
    };

    useEffect(() => {
        if (inputVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputVisible]);

    const handleSend = async () => {
        if (!input.trim()) return;
        setLoading(true);

        try {
            const response = await axios.post(`${baseUrl}/api/chatbot/conversar/`, {
                pregunta: input,
            });

            onResponse({
                markdown: response.data.respuesta.markdown.replace(/\\n/g, '\n'),
                raw: response.data.respuesta.raw || null,
            });
        } catch (error) {
            onResponse({
                markdown: "**Error:** No se pudo obtener respuesta del servidor.",
                raw: null,
            });
        } finally {
            setLoading(false);
            setInputVisible(false);
        }
    };

    return (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-4/5 md:w-2/3 lg:w-1/2">
            {!inputVisible ? (
                <button
                    onClick={toggleInput}
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
                >
                    <MessageSquare />
                </button>
            ) : (
                <div className="flex items-center bg-white border shadow-xl rounded-xl px-4 py-2 gap-2 w-full">
                    <input
                        ref={inputRef}
                        type="text"
                        className="border rounded px-2 py-1 text-sm w-full"
                        placeholder="¿Qué deseas saber?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSend();
                            if (e.key === "Escape") setInputVisible(false);
                        }}
                        disabled={loading}
                    />
                    {!loading ? (
                        <button
                            onClick={handleSend}
                            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                        >
                            Enviar
                        </button>
                    ) : (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="animate-spin h-4 w-4 text-blue-600" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z" />
                            </svg>
                            Procesando...
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatbotWidget;
