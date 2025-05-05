import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import AlertasStockMargen from "./widgets/AlertasStockMargen";

const MainContent = ({ markdown, raw }) => {
    const renderVisual = () => {
        console.log(raw)
        if (!raw || !raw.tipo_visualizacion) return null;

        switch (raw.tipo_visualizacion) {
            case "alertas_stock_margen":
                return <AlertasStockMargen data={raw.data} />;
            default:
                return null;
        }
    };
    console.log("📦 RAW recibido:", raw);
    console.log("📦 Markdown recibido:", markdown);

    return (

        <div className="p-6 max-w-5xl mx-auto">
            {renderVisual()}
            {markdown ? (
                <article className="prose prose-lg prose-gray max-w-none mt-8">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkBreaks]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {markdown}
                    </ReactMarkdown>
                </article>
            ) : (
                <p className="text-gray-500 text-sm">Haz una pregunta para ver el resultado aquí...</p>
            )}
        </div>
    );
};

export default MainContent;
