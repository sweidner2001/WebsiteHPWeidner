'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/app/components/footer/Footer';
import HeaderHeadingNP from "@/app/components/header/HeaderHeadingNP";
import {Header_2} from "@/app/components/header/Header_2";

export default function Impressum() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Header */}
            <Header_2 />

            {/* Inhalt */}
            <main className="pt-28 pb-20 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-light text-gray-800 mb-8">Impressum</h1>
                    <div className="w-12 h-px bg-[#2d6a4f] mb-10"></div>

                    {/* Angaben gemäß § 5 DDG */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Angaben gemäß § 5 DDG</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Carola Weidner<br />
                            Heilpraktikerin<br />
                            Pfaffenreuth 22<br />
                            92715 Püchersreuth
                        </p>
                    </section>

                    {/* Kontakt */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Kontakt</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            <span className="font-normal">Telefon:</span> 09681 / 9189483<br />
                            <span className="font-normal">E-Mail:</span> info@naturheilpraxis-weidner.de
                        </p>
                    </section>

                    {/* Berufsbezeichnung */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                        <div className="text-gray-600 font-light leading-relaxed">
                            <div>
                                <span className="font-normal">Gesetzliche Berufsbezeichnung:</span> Heilpraktikerin<br/>
                                <span className="font-normal">Verliehen in:</span> Deutschland<br/>
                                {/*<span className="font-normal">Heilpraktikererlaubnis:</span> In Deutschland erteilt am 00.00.0000 durch das Gesundheitsamt A-Stadt<br />*/}
                                <span className="font-normal">Zuständige Aufsichtsbehörde: </span>
                                <div className="ml-4">
                                    <p>Landratsamt Neustadt/WN</p>
                                    <p>Abteilung Gesundheitswesen</p>
                                    <p>Maistraße 7 – 9</p>
                                    <p>92637 Weiden</p>
                                </div>
                            </div>
                        </div>

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
                            <span className="font-normal">Berufsverbandsmitgliedschaft in:</span> Fachverband Deutscher Heilpraktiker e.V.<br />
                            {/*<span className="font-normal">Mitgliedsnummer Berufsverband:</span> xxxx*/}
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
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Angaben zur Berufshaftpflichtversicherung</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Continentale<br />
                            Ruhrallee 92<br />
                            44269 Dortmund2<br />
                            {/*<span className="font-normal">Geltungsbereich der Versicherung:</span> Bundesweit (Deutschland)*/}
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
                        <h2 className="text-lg font-medium text-gray-800 mb-3">Streitschlichtung</h2>
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
