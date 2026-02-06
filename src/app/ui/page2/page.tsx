import React from 'react';
import Header3 from '../../components/header/Header_3';

export default function NaturheilpraxisWald() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Organische Hintergrund-Elemente - wie Lichtflecken im Wald */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-bl from-lime-100 to-green-50 rounded-full opacity-30 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-full opacity-35 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-tl from-green-100 to-lime-50 rounded-full opacity-25 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-50 to-transparent rounded-full opacity-20 blur-3xl"></div>
      </div>

      <Header3 />

      {/* Hero Section - Waldlichtung Gefühl */}
      <section id="home" className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Organische Titel-Umrandung */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-xl transform scale-150"></div>
            <h1 className="relative text-5xl md:text-7xl font-extralight text-gray-700 leading-relaxed">
              Natürlich
              <br />
              <span className="text-green-600 font-light">gesund werden</span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Wie ein sanfter Waldspaziergang führen wir Sie zurück zu Ihrer natürlichen Gesundheit. 
              Ohne Ecken und Kanten, im Einklang mit der Natur.
            </p>
          </div>

          {/* Organische Button-Gruppe */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-400 to-emerald-500 text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center space-x-3">
                <span>Ihre Reise beginnt hier</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">🌱</span>
              </span>
            </button>
            <button className="border-2 border-green-300 text-green-600 px-10 py-4 rounded-full hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
              Mehr erfahren
            </button>
          </div>
        </div>

        {/* Schwebende organische Elemente */}
        <div className="absolute top-32 left-20 w-4 h-4 bg-green-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-64 right-32 w-6 h-6 bg-emerald-200 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-lime-300 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Über uns - Organische Karten */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-emerald-100 rounded-full blur-2xl opacity-50 transform scale-150"></div>
              <h2 className="relative text-4xl md:text-5xl font-light text-gray-700 mb-6">Unser Weg der Heilung</h2>
            </div>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Inspiriert von der Weisheit des Waldes, wo jedes Element in harmonischem Einklang steht
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profilbereich mit organischen Formen */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-full p-12 border border-green-100/50">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-60 blur-sm"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tl from-lime-200 to-green-200 rounded-full opacity-40 blur-md"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                    👩‍⚕️
                  </div>
                  <h3 className="text-2xl font-light text-gray-700 mb-4">Dr. med. Maria Waldmann</h3>
                  <p className="text-gray-600 font-light">Heilpraktikerin & Naturheilkundeexpertin</p>
                </div>
              </div>
            </div>

            {/* Beschreibung mit organischen Elementen */}
            <div className="space-y-8">
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-green-100/30 shadow-lg">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-green-200 rounded-full opacity-50 blur-sm"></div>
                <h4 className="text-xl font-light text-gray-700 mb-4">🌱 Meine Philosophie</h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Wie ein Baum seine Wurzeln tief in die Erde senkt, um Kraft zu schöpfen, 
                  so verbinden wir uns mit den natürlichen Heilkräften Ihres Körpers.
                </p>
              </div>

              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100/30 shadow-lg">
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-200 rounded-full opacity-60 blur-sm"></div>
                <h4 className="text-xl font-light text-gray-700 mb-4">🍃 Qualifikationen</h4>
                <ul className="text-gray-600 font-light space-y-2 leading-relaxed">
                  <li>• Studium der Humanmedizin</li>
                  <li>• Heilpraktiker-Ausbildung</li>
                  <li>• 15+ Jahre Erfahrung in Naturheilkunde</li>
                  <li>• Spezialisierung auf Phytotherapie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapien - Waldlichtung Layout */}
      <section id="therapien" className="relative z-10 py-24 px-6 bg-gradient-to-b from-white to-green-25">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-60 transform scale-150"></div>
              <h2 className="relative text-4xl md:text-5xl font-light text-gray-700 mb-6">Therapien aus der Natur</h2>
            </div>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Jede Therapie ist wie ein Pfad durch den Wald - einzigartig und natürlich
            </p>
          </div>

          {/* Organisches Grid-Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Therapie-Karte 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-green-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl">
                  🌿
                </div>
                <h3 className="text-xl font-light text-gray-700 mb-4 text-center">Phytotherapie</h3>
                <p className="text-gray-600 font-light text-center leading-relaxed">
                  Die Heilkraft der Pflanzen, so alt wie der Wald selbst. 
                  Natürliche Wirkstoffe für sanfte Genesung.
                </p>
              </div>
            </div>

            {/* Therapie-Karte 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl">
                  ☯️
                </div>
                <h3 className="text-xl font-light text-gray-700 mb-4 text-center">Homöopathie</h3>
                <p className="text-gray-600 font-light text-center leading-relaxed">
                  Wie der sanfte Wind durch die Baumkronen - 
                  minimale Impulse für maximale Wirkung.
                </p>
              </div>
            </div>

            {/* Therapie-Karte 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-100 to-green-100 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-lime-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-200 to-green-300 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl">
                  🧘‍♀️
                </div>
                <h3 className="text-xl font-light text-gray-700 mb-4 text-center">Entspannungstherapie</h3>
                <p className="text-gray-600 font-light text-center leading-relaxed">
                  Finden Sie Ihre innere Waldruhe. 
                  Stress löst sich auf wie Morgentau.
                </p>
              </div>
            </div>

            {/* Therapie-Karte 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-teal-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl">
                  💧
                </div>
                <h3 className="text-xl font-light text-gray-700 mb-4 text-center">Hydrotherapie</h3>
                <p className="text-gray-600 font-light text-center leading-relaxed">
                  Wie ein klarer Waldbach reinigt und belebt 
                  das Wasser Körper und Geist.
                </p>
              </div>
            </div>

            {/* Therapie-Karte 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-yellow-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl">
                  🌞
                </div>
                <h3 className="text-xl font-light text-gray-700 mb-4 text-center">Lichttherapie</h3>
                <p className="text-gray-600 font-light text-center leading-relaxed">
                  Sonnenstrahlen durch das Blätterdach - 
                  natürliches Licht für Ihr Wohlbefinden.
                </p>
              </div>
            </div>

            {/* Therapie-Karte 6 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-purple-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl">
                  🎵
                </div>
                <h3 className="text-xl font-light text-gray-700 mb-4 text-center">Klangtherapie</h3>
                <p className="text-gray-600 font-light text-center leading-relaxed">
                  Wie das Rauschen der Blätter beruhigen 
                  heilsame Klänge Körper und Seele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsablauf - Organischer Pfad */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-6">Ihr Weg zur Gesundheit</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Wie ein Waldpfad führt Sie unser Behandlungsweg Schritt für Schritt zu neuer Vitalität
            </p>
          </div>

          {/* Organischer Behandlungspfad */}
          <div className="relative">
            {/* Verbindungslinie - organisch geschwungen */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-16 bottom-16 w-1 bg-gradient-to-b from-green-200 via-emerald-300 to-green-200 rounded-full opacity-40"></div>
            
            <div className="space-y-16">
              {/* Schritt 1 */}
              <div className="flex items-center justify-center">
                <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-green-200 max-w-md">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-60 blur-sm"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      🌱
                    </div>
                    <h3 className="text-xl font-light text-gray-700 mb-3">Erstgespräch</h3>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      Wie das erste Licht im Wald - wir erkunden gemeinsam Ihre Gesundheitsgeschichte
                    </p>
                  </div>
                </div>
              </div>

              {/* Schritt 2 */}
              <div className="flex items-center justify-center">
                <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-emerald-200 max-w-md ml-auto mr-16">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-bl from-emerald-200 to-teal-300 rounded-full opacity-60 blur-sm"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      🔍
                    </div>
                    <h3 className="text-xl font-light text-gray-700 mb-3">Diagnose</h3>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      Wie ein Förster den Wald liest, entdecken wir die Wurzeln Ihrer Beschwerden
                    </p>
                  </div>
                </div>
              </div>

              {/* Schritt 3 */}
              <div className="flex items-center justify-center">
                <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-lime-200 max-w-md mr-auto ml-16">
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-lime-200 to-green-300 rounded-full opacity-50 blur-md"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-lime-300 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      🌿
                    </div>
                    <h3 className="text-xl font-light text-gray-700 mb-3">Behandlung</h3>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      Sanft wie Waldluft wirken unsere Therapien in Ihrem natürlichen Rhythmus
                    </p>
                  </div>
                </div>
              </div>

              {/* Schritt 4 */}
              <div className="flex items-center justify-center">
                <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-teal-200 max-w-md">
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-bl from-teal-200 to-cyan-300 rounded-full opacity-70 blur-sm"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      ✨
                    </div>
                    <h3 className="text-xl font-light text-gray-700 mb-3">Nachsorge</h3>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      Wie ein starker Baum wächst Ihre Gesundheit mit kontinuierlicher Pflege
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt - Organische Form */}
      <section id="kontakt" className="relative z-10 py-24 px-6 bg-gradient-to-b from-white to-green-25">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-6">Kommen Sie zu uns</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Wie eine Waldlichtung öffnen wir unsere Türen für Ihren Weg zur Gesundheit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Kontaktinformationen mit organischen Formen */}
            <div className="space-y-8">
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-green-100/50 shadow-lg">
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-green-100 rounded-full opacity-60 blur-md"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-light text-gray-700 mb-6 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center mr-4 text-lg">📍</span>
                    Unsere Waldlichtung
                  </h3>
                  <div className="space-y-4 text-gray-600 font-light">
                    <p>Naturheilpraxis im Einklang</p>
                    <p>Waldweg 42</p>
                    <p>12345 Grüne Stadt</p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100/50 shadow-lg">
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-emerald-100 rounded-full opacity-70 blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-light text-gray-700 mb-6 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full flex items-center justify-center mr-4 text-lg">⏰</span>
                    Unsere Zeit für Sie
                  </h3>
                  <div className="space-y-2 text-gray-600 font-light">
                    <div className="flex justify-between">
                      <span>Montag - Donnerstag:</span>
                      <span>8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freitag:</span>
                      <span>8:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag:</span>
                      <span>Nach Vereinbarung</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-lime-100/50 shadow-lg">
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-lime-100 rounded-full opacity-80 blur-sm"></div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center text-gray-600 font-light">
                    <span className="w-10 h-10 bg-gradient-to-br from-lime-300 to-green-400 rounded-full flex items-center justify-center mr-4 text-lg">📞</span>
                    <span>+49 (0) 123 456789</span>
                  </div>
                  <div className="flex items-center text-gray-600 font-light">
                    <span className="w-10 h-10 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center mr-4 text-lg">✉️</span>
                    <span>kontakt@naturpraxis-einklang.de</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontaktformular mit organischen Formen */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl blur-xl opacity-60"></div>
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-green-100/50 shadow-2xl">
                <h3 className="text-2xl font-light text-gray-700 mb-8 text-center">Schreiben Sie uns</h3>
                <form className="space-y-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ihr Name" 
                      className="w-full p-4 border-2 border-green-100 rounded-2xl bg-white/70 focus:border-green-300 focus:outline-none transition-all duration-300 font-light placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Ihre E-Mail" 
                      className="w-full p-4 border-2 border-green-100 rounded-2xl bg-white/70 focus:border-green-300 focus:outline-none transition-all duration-300 font-light placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder="Ihre Telefonnummer" 
                      className="w-full p-4 border-2 border-green-100 rounded-2xl bg-white/70 focus:border-green-300 focus:outline-none transition-all duration-300 font-light placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <textarea 
                      placeholder="Ihre Nachricht - erzählen Sie uns von Ihrem Anliegen" 
                      rows={5}
                      className="w-full p-4 border-2 border-green-100 rounded-2xl bg-white/70 focus:border-green-300 focus:outline-none transition-all duration-300 font-light placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-4 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 font-light text-lg"
                  >
                    Nachricht in den Wald senden 🌿
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">


          <div className="relative">
            {/* Große organische Hauptkarte inspiriert vom Bild */}
            <div className="relative bg-white/70 backdrop-blur-md border-4 border-pink-200/50 shadow-2xl overflow-hidden" 
                 style={{ 
                   borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%', 
                   transform: 'rotate(-1deg)' 
                 }}>

              <div className="grid gap-0 min-h-[600px]">
                {/* Bildbereich - organische Form */}
                {/* <div className="relative"> */}
                  <div className="absolute inset-0"></div>
                  <img 
                    src="https://naturlichtbild.de/wp-content/uploads/sites/83/2019/08/eSrXuTdWnxgu.jpeg" 
                    alt="Naturheilpraxis im Wald" 
                    className="w-full h-full object-cover "
                  />
                {/* </div> */}

                
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer - Organisch */}
      <footer className="relative z-10 py-16 bg-gradient-to-b from-green-25 to-green-50 border-t border-green-100/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center text-2xl">
                🌿
              </div>
              <h3 className="text-2xl font-light text-gray-700">Naturheilpraxis im Einklang</h3>
            </div>
            <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Wie die Natur selbst arbeiten wir in Kreisläufen der Heilung und Erneuerung. 
              Ihr Weg zur Gesundheit ist unser gemeinsamer Pfad durch den Wald des Lebens.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-600 font-light">
            <a href="#impressum" className="hover:text-green-600 transition-colors duration-300">Impressum</a>
            <a href="#datenschutz" className="hover:text-green-600 transition-colors duration-300">Datenschutz</a>
            <a href="#agb" className="hover:text-green-600 transition-colors duration-300">AGB</a>
          </div>

          <div className="pt-8 border-t border-green-200/50">
            <p className="text-gray-500 font-light text-sm">
              © 2025 Naturheilpraxis im Einklang. Mit der Natur, für Ihre Gesundheit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
