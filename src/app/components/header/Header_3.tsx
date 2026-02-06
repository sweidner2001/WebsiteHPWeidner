import React from 'react';

export default function Header3() {
  return (
    <nav className="relative z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-green-100/50">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h1 className="text-2xl font-light text-gray-700">Naturheilpraxis im Einklang</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-light">Willkommen</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-light">Über uns</a>
              <a href="#therapien" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-light">Therapien</a>
              <a href="#kontakt" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-light">Kontakt</a>
            </div>
            <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
