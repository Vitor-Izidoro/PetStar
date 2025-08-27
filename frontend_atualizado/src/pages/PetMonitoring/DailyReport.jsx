import React from "react";
import { FaDownload } from "react-icons/fa";

export default function DailyReport({ report }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h4 className="font-bold mb-4 text-lg">Relatório Diário</h4>

      <div className="space-y-2 text-gray-700">
        <div><strong>Alimentação:</strong> <span className="text-green-600">{report.food}</span></div>
        <div><strong>Hidratação:</strong> <span className="text-green-600">{report.water}</span></div>
        <div><strong>Exercício:</strong> <span className="text-green-600">{report.exercise}</span></div>
        <div><strong>Comportamento:</strong> <span className="text-green-600">{report.behavior}</span></div>
        <div><strong>Medicamentos:</strong> <span className="text-green-600">{report.medications}</span></div>
      </div>

      <div className="mt-4 text-center">
        <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg flex items-center justify-center gap-2 mx-auto hover:bg-indigo-500 transition">
          <FaDownload /> Baixar Relatório Completo
        </button>
      </div>
    </div>
  );
}
