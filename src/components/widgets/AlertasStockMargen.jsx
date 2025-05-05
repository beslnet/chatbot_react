import React from "react";

const AlertasStockMargen = ({ data }) => {
    console.log(data);
    const alertas = data?.alertas || [];

    const stock_bajo = alertas
        .filter((item) => item.tipo === "stock_bajo")
        .map((item) => ({
            nombre: item.producto,
            stock_actual: item.stock_actual,
            stock_minimo: item.stock_minimo,
        }));

    const margen_critico = alertas
        .filter((item) => item.tipo === "margen_critico")
        .map((item) => ({
            nombre: item.producto,
            precio_venta: item.precio_venta,
            precio_costo: item.precio_costo_estimado,
            margen: item.margen_estimado,
        }));

    return (
        <div className="space-y-8">
            {stock_bajo.length > 0 && (
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-red-700">Productos con Stock Bajo</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {stock_bajo.map((item, index) => (
                            <div
                                key={index}
                                className="border border-red-300 bg-red-50 p-4 rounded-lg shadow-sm"
                            >
                                <h4 className="font-bold text-lg">{item.nombre}</h4>
                                <p className="text-sm text-gray-700">
                                    <strong>Stock actual:</strong> {item.stock_actual}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Stock mínimo:</strong> {item.stock_minimo}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {margen_critico.length > 0 && (
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-700">Productos con Margen Crítico</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {margen_critico.map((item, index) => (
                            <div
                                key={index}
                                className="border border-yellow-300 bg-yellow-50 p-4 rounded-lg shadow-sm"
                            >
                                <h4 className="font-bold text-lg">{item.nombre}</h4>
                                <p className="text-sm text-gray-700">
                                    <strong>Precio venta:</strong> ${item.precio_venta}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Costo estimado:</strong> ${item.precio_costo}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Margen:</strong>{" "}
                                    <span className="font-semibold text-red-600">{item.margen}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlertasStockMargen;
