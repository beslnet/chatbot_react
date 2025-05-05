import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ChatbotWidget from "./components/ChatBot/ChatBotWidget";

function App() {
    const [response, setResponse] = useState({ markdown: "", raw: null });

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 bg-gray-100 p-6 overflow-auto">
                    <MainContent markdown={response.markdown} raw={response.raw} />
                </main>
            </div>
            <ChatbotWidget onResponse={setResponse} />
        </div>
    );
}

export default App;
