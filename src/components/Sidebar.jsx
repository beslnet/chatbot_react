import React from "react";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-xl font-bold mb-6">Mi Negocio</h2>
            <nav className="flex flex-col space-y-3">
                <a href="#" className="hover:bg-gray-700 p-2 rounded">Inicio</a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded">Chatbot</a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded">KPIs</a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded">Configuración</a>
            </nav>
        </div>
    );
}
