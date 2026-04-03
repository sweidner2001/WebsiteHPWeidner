'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/app/components/footer/Footer';

export default function Impressum() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Header */}
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 font-semibold">NH</span>
                        </div>
                        <span className="text-xl font-light text-gray-700">Naturheilpraxis Carola Weidner</span>
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-light text-green-600 hover:text-green-700 transition-colors"
                    >
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </nav>

            {/* Inhalt */}
            <main className="pt-28 pb-20 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-light text-gray-800 mb-8">Impressum</h1>
                    <div className="w-12 h-px bg-[#2d6a4f] mb-10"></div>

                    {/* Angaben gemäß § 5 DDG */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Angaben gemäß § 5 DDG</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Naturheilpraxis Carola Weidner<br />
                            Carola Weidner<br />
                            Pfaffenreuth 22<br />
                            92715 Püchersreuth
                        </p>
                    </section>

                    {/* Kontakt */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Kontakt</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            <span className="font-normal">Telefon:</span> 09681 / 8170<br />
                            <span className="font-normal">E-Mail:</span> CarolaWeidner@gmx.de
                        </p>
                    </section>

                    {/* Berufsbezeichnung */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            <span className="font-normal">Berufsbezeichnung:</span> Heilpraktikerin<br />
                            <span className="font-normal">Verliehen in:</span> Deutschland<br />
                            <span className="font-normal">Heilpraktikererlaubnis:</span> In Deutschland erteilt am 00.00.0000 durch das Gesundheitsamt A-Stadt<br />
                            <span className="font-normal">Zuständige Aufsichtsbehörde: </span>
                            Gesundheitsamt im Landkreis Neustadt a.d.Waldnaab <br />
                            <p className="font-normal">Kontaktdaten Gesundheitsamt:</p>
                            <p className='pb-2'>
                            Maistraße 7 – 9<br />
                            92637 Weiden i.d.OPf.<br />
                            </p>
                            <p className='pb-4'>
                            Telefon: 09602 / 79-6210<br />
                            Fax: 09602 / 796055<br />
                            E-Mail:{' '}
                            <a href="mailto:gesundheitsamt@neustadt.de" className="text-green-600 hover:text-green-700 underline">
                                gesundheitsamt@neustadt.de
                            </a><br />
                            </p>


                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Es gelten folgende berufsrechtliche Regelungen:</span><br />
                            Gesetz über die berufsmäßige Ausübung der Heilkunde ohne Bestallung (Heilpraktikergesetz)<br />
                            Einsehbar unter:{' '}
                            <a href="https://www.gesetze-im-internet.de/heilprg/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline">
                                www.gesetze-im-internet.de/heilprg
                            </a>
                        </p>
                    </section>

                    {/* Ergänzende Angaben */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Ergänzende Angaben</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            <span className="font-normal">Berufsverbandsmitgliedschaft in:</span> Bund Deutscher Heilpraktiker BDH e.V.<br />
                            <span className="font-normal">Mitgliedsnummer Berufsverband:</span> xxxx
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Berufsordnung für Heilpraktiker (BOH):</span> Nachzulesen im Internet unter{' '}
                            <a
                                href="https://www.bdh-online.de/wp-content/uploads/2015/08/Berufsordnung-Heilpraktiker_2015_210x297_20150814.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline break-all"
                            >
                                https://www.bdh-online.de/.../Berufsordnung-Heilpraktiker_2015.pdf
                            </a>
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Rechtsgrundlage der Heilpraktikertätigkeit, Heilpraktikergesetz und Durchführungsverordnung:</span> Nachzulesen im Internet unter{' '}
                            <a
                                href="http://www.gesetze-im-internet.de/heilprg/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline"
                            >
                                gesetze-im-internet.de/heilprg
                            </a>
                            {' '}und{' '}
                            <a
                                href="http://www.gesetze-im-internet.de/heilprgdv_1/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline"
                            >
                                gesetze-im-internet.de/heilprgdv_1
                            </a>
                        </p>
                    </section>

                    {/* Berufshaftpflichtversicherung */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Berufshaftpflichtversicherung</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            xxxxxx
                            Continentale Sachversicherung a.G.<br />
                            Continentale-Allee 1, 44269 Dortmund, Deutschland<br />
                            <span className="font-normal">Geltungsbereich der Versicherung:</span> Bundesweit (Deutschland)
                        </p>
                    </section>

                    {/* Umsatzsteuer */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Umsatzsteuer-ID</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Umsatzsteuerbefreit nach § 4 Nr. 14 UStG (Heilbehandlungen im Bereich der Humanmedizin).
                        </p>
                    </section>

                    {/* Streitschlichtung */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">EU-Streitschlichtung</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                            <a
                                href="https://ec.europa.eu/consumers/odr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline"
                            >
                                https://ec.europa.eu/consumers/odr/
                            </a>
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>



                    {/* Urheberrecht */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Urheberrecht</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                            werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </section>

                    {/* Haftung für fremde Inhalte */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Haftung für fremde Inhalte</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Soweit diese Seiten direkte oder indirekte Verweise auf fremde Inhalte enthalten, macht sich
                            der Anbieter diese Inhalte nicht zu eigen. Grundsätzlich ist der Fremdanbieter für illegale
                            oder fehlerhafte Inhalte selbst verantwortlich. Gleichwohl werden Fremdinhalte, auf die
                            verwiesen wird, durch den Anbieter sorgfältig überprüft und regelmäßig kontrolliert. Erhält
                            der Anbieter Kenntnis, dass Fremdinhalte illegal oder fehlerhaft sind, werden entsprechende
                            Verweise sofort entfernt.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
