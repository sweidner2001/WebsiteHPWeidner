import Image from "next/image";
import Header_1 from "./components/header/Header_1";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header_1 />

      {/* Hero Section */}
      <section id="start" className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Natürlich gesund werden
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Willkommen in unserer Naturheilpraxis. Mit ganzheitlichen Therapieansätzen 
                unterstützen wir Sie dabei, Ihre natürlichen Selbstheilungskräfte zu aktivieren 
                und nachhaltig gesund zu werden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Termin vereinbaren
                </button>
                <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
                  Mehr erfahren
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <span className="text-green-600 text-lg">Praxisbild / Foto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="uber-mich" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Über mich</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lernen Sie mich und meine Philosophie kennen
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <span className="text-blue-600 text-lg">Dr. Weidner Foto</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Dr. med. Maria Weidner</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Ausbildung & Qualifikationen:</strong><br/>
                  • Studium der Humanmedizin an der Universität München<br/>
                  • Facharzt für Allgemeinmedizin<br/>
                  • Zusatzausbildung in Naturheilverfahren<br/>
                  • Zertifiziert in Homöopathie und Akupunktur
                </p>
                <p>
                  <strong>Erfahrung:</strong><br/>
                  Über 15 Jahre Erfahrung in der ganzheitlichen Medizin
                </p>
                <p>
                  <strong>Meine Philosophie:</strong><br/>
                  &quot;Ich glaube an die Kraft der Natur und die Selbstheilungskräfte des Körpers.
                  Mein Ziel ist es, gemeinsam mit Ihnen die Ursachen Ihrer Beschwerden zu finden
                  und nachhaltige Heilung zu ermöglichen.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsmethoden */}
      <section id="behandlung" className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Behandlungsmethoden</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bewährte naturheilkundliche Verfahren für Ihre Gesundheit
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Homöopathie</h3>
              <p className="text-gray-600">
                Sanfte Heilung durch individuell abgestimmte homöopathische Mittel, 
                die Ihre Selbstheilungskräfte aktivieren.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🪡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Akupunktur</h3>
              <p className="text-gray-600">
                Traditionelle chinesische Medizin zur Harmonisierung des Energieflusses 
                und Linderung verschiedener Beschwerden.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Phytotherapie</h3>
              <p className="text-gray-600">
                Heilpflanzen und deren natürliche Wirkstoffe zur schonenden 
                Behandlung verschiedener Beschwerden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungsspektrum */}
      <section id="leistungen" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Leistungsspektrum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unsere Schwerpunkte für Ihre Gesundheit
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">💆‍♀️</div>
              <h3 className="font-bold text-gray-800 mb-2">Stressbewältigung</h3>
              <p className="text-gray-600 text-sm">Burnout-Prävention und Entspannungstherapie</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🤧</div>
              <h3 className="font-bold text-gray-800 mb-2">Allergien</h3>
              <p className="text-gray-600 text-sm">Natürliche Allergie-Behandlung</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="font-bold text-gray-800 mb-2">Chronische Beschwerden</h3>
              <p className="text-gray-600 text-sm">Ganzheitliche Therapie bei chronischen Leiden</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-bold text-gray-800 mb-2">Immunsystem</h3>
              <p className="text-gray-600 text-sm">Stärkung der körpereigenen Abwehr</p>
            </div>
          </div>
          <div className="mt-12 bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Behandlungsablauf</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                <h4 className="font-bold text-gray-800 mb-2">Erstgespräch</h4>
                <p className="text-gray-600 text-sm">Ausführliche Anamnese und Befunderhebung</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                <h4 className="font-bold text-gray-800 mb-2">Diagnose</h4>
                <p className="text-gray-600 text-sm">Ganzheitliche Diagnostik und Therapieplanung</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                <h4 className="font-bold text-gray-800 mb-2">Therapie</h4>
                <p className="text-gray-600 text-sm">Individuelle Behandlung und Nachsorge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praxis & Impressionen */}
      <section id="praxis" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Unsere Praxis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eine Wohlfühlatmosphäre für Ihre Gesundheit
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-48 rounded-xl flex items-center justify-center">
              <span className="text-blue-600">Wartezimmer</span>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 h-48 rounded-xl flex items-center justify-center">
              <span className="text-green-600">Behandlungsraum</span>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-48 rounded-xl flex items-center justify-center">
              <span className="text-purple-600">Entspannungsbereich</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unsere Praxis bietet eine ruhige, entspannte Atmosphäre, in der Sie sich wohlfühlen können. 
              Hygienische Standards und modernste Ausstattung sorgen für eine optimale Behandlungsumgebung.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt & Öffnungszeiten */}
      <section id="kontakt" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kontakt & Anfahrt</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vereinbaren Sie Ihren Termin
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Kontaktdaten</h3>
                  <div className="space-y-3">
                    <p className="flex items-center text-gray-600">
                      <span className="w-6">📍</span>
                      Musterstraße 123, 12345 Musterstadt
                    </p>
                    <p className="flex items-center text-gray-600">
                      <span className="w-6">📞</span>
                      +49 (0) 123 456789
                    </p>
                    <p className="flex items-center text-gray-600">
                      <span className="w-6">✉️</span>
                      praxis@dr-weidner.de
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Öffnungszeiten</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Montag - Donnerstag:</span>
                      <span>8:00 - 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freitag:</span>
                      <span>8:00 - 16:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag:</span>
                      <span>Nach Vereinbarung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Terminanfrage</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ihr Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Ihre E-Mail" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Ihre Telefonnummer" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <textarea 
                  placeholder="Ihre Nachricht" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Zusatzinfos */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Kosten & Abrechnung</h3>
              <p className="text-gray-600 text-sm mb-3">
                Wir rechnen als Privatpraxis ab. Viele Krankenkassen übernehmen anteilig die Kosten.
              </p>
              <p className="text-gray-600 text-sm">
                Erstberatung: 120€<br/>
                Folgebehandlung: 80€
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">⏱️ Behandlungsdauer</h3>
              <p className="text-gray-600 text-sm mb-3">
                Ersttermin: ca. 90 Minuten<br/>
                Folgetermine: ca. 60 Minuten
              </p>
              <p className="text-gray-600 text-sm">
                Wir nehmen uns ausreichend Zeit für Sie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Mitbringen</h3>
              <p className="text-gray-600 text-sm">
                • Vorhandene Befunde<br/>
                • Medikamentenliste<br/>
                • Versichertenkarte<br/>
                • Bequeme Kleidung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Naturheilpraxis Dr. Weidner</h3>
              <p className="text-gray-300 text-sm">
                Ihr Partner für ganzheitliche Gesundheit und natürliche Heilung.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#start" className="block text-gray-300 hover:text-white transition-colors">Start</a>
                <a href="#uber-mich" className="block text-gray-300 hover:text-white transition-colors">Über mich</a>
                <a href="#behandlung" className="block text-gray-300 hover:text-white transition-colors">Behandlung</a>
                <a href="#kontakt" className="block text-gray-300 hover:text-white transition-colors">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Rechtliches</h4>
              <div className="space-y-2 text-sm">
                <a href="#impressum" className="block text-gray-300 hover:text-white transition-colors">Impressum</a>
                <a href="#datenschutz" className="block text-gray-300 hover:text-white transition-colors">Datenschutz</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Naturheilpraxis Dr. Weidner. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
