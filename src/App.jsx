import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ChatbotWidget from "./components/ChatBot/ChatBotWidget";

function App() {
    const [response, setResponse] = useState({ markdown: "", raw: null });

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 bg-gray-100 p-2 lg:p-4 overflow-auto">
                <MainContent markdown={response.markdown} raw={response.raw} />
            </main>
            <div className="flex justify-center pb-4">
                <div className="w-4/5 md:w-2/3 lg:w-1/2">
                    <ChatbotWidget onResponse={setResponse} />
                </div>
            </div>
        </div>
    );
}

export default App;
