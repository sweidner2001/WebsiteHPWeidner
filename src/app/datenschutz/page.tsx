'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/app/components/footer/Footer';

export default function Datenschutz() {
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
                    <h1 className="text-3xl font-light text-gray-800 mb-8">Datenschutz&shy;erklärung</h1>
                    <div className="w-12 h-px bg-[#2d6a4f] mb-10"></div>

                    {/* 1. Datenschutz auf einen Blick */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">1. Datenschutz auf einen Blick</h2>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Allgemeine Hinweise</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
                            sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                            Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                            Datenschutzerklärung.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Datenerfassung auf dieser Website</h3>

                        <h4 className="text-sm font-medium text-gray-700 mt-3 mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                            Kontaktdaten können Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in
                            dieser Datenschutzerklärung entnehmen.
                        </p>

                        <h4 className="text-sm font-medium text-gray-700 mt-3 mb-1">Wie erfassen wir Ihre Daten?</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                            sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                            unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                            Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                            automatisch, sobald Sie diese Website betreten.
                        </p>

                        <h4 className="text-sm font-medium text-gray-700 mt-3 mb-1">Wofür nutzen wir Ihre Daten?</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                            Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die
                            übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
                            verarbeitet.
                        </p>

                        <h4 className="text-sm font-medium text-gray-700 mt-3 mb-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                            Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                            Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                            widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
                            wenden.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Analyse-Tools und Tools von Dritt&shy;anbietern</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
                            geschieht vor allem mit sogenannten Analyseprogrammen.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                            Datenschutzerklärung.
                        </p>
                    </section>

                    {/* 2. Hosting */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">2. Hosting</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Externes Hosting</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
                            erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann
                            es sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
                            Website generiert werden, handeln.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
                            und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                            schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen
                            Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt
                            wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
                            und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff
                            auf Informationen im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des
                            TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur
                            Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf
                            diese Daten befolgen.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Wir setzen folgende(n) Hoster ein:
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Cloudflare, Inc.<br/>
                            101 Townsend St.<br/>
                            San Francisco, CA 94107<br/>
                            USA
                        </p>

                        <h4 className="text-sm font-medium text-gray-700 mt-3 mb-1">Auftragsverarbeitung</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten
                            Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich
                            vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten
                            unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
                            verarbeitet.
                        </p>
                    </section>

                    {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Datenschutz</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                            Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
                            nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
                            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
                            Daten vor dem Zugriff durch Dritte ist nicht möglich.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Naturheilpraxis Carola Weidner<br/>
                            Pfaffenreuth 22<br/>
                            92715 Püchersreuth
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Telefon:</span> 09681 9189483<br/>
                            <span className="font-normal">E-Mail:</span> info@naturheilpraxis-weidner.de
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                            mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                            (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Speicherdauer</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                            verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
                            entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
                            Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
                            zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B.
                            steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                            Löschung nach Fortfall dieser Gründe.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
                            personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
                            lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden.
                            Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in
                            Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
                            DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
                            Ihr Endgerät (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die
                            Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist
                            jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung
                            vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des
                            Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                            Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1
                            lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
                            Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall
                            einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser
                            Datenschutzerklärung informiert.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Empfänger von personenbezogenen Daten</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen
                            zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese
                            externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen
                            weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich
                            hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbehörden), wenn wir ein
                            berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn
                            eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
                            Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage
                            eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
                            Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                            Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der
                            bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                        <p className="text-gray-600 font-light leading-relaxed uppercase text-sm">
                            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                            haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                            ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies
                            gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
                            Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser
                            Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
                            personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
                            schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
                            Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder
                            Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed uppercase text-sm mt-2">
                            Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben
                            Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
                            personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das
                            Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen,
                            werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung
                            verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Beschwerde&shy;recht bei der zuständigen Aufsichts&shy;behörde</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
                            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Recht auf Daten&shy;übertrag&shy;barkeit</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
                            eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                            maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der
                            Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
                            machbar ist.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Auskunft, Berichtigung und Löschung</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                            Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
                            Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
                            können Sie sich jederzeit an uns wenden.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                            verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der
                            Verarbeitung besteht in folgenden Fällen:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed mt-2 space-y-2">
                            <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
                                benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                                Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                                verlangen.
                            </li>
                            <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                                können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                            </li>
                            <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                                Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht,
                                statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                                verlangen.
                            </li>
                            <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                                Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht
                                feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der
                                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                            </li>
                        </ul>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
                            Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
                            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte
                            einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen
                            öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                            Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                            senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                            daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf
                            &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                            übermitteln, nicht von Dritten mitgelesen werden.
                        </p>
                    </section>

                    {/* 4. Datenerfassung auf dieser Website */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">4. Datenerfassung auf dieser Website</h2>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Cookies</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine
                            Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder
                            vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente
                            Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
                            automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
                            diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog.
                            Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter
                            Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur
                            Abwicklung von Zahlungsdienstleistungen).
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da
                            bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.&nbsp;B. die
                            Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des
                            Nutzerverhaltens oder zu Werbezwecken verwendet werden.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
                            bestimmter, von Ihnen erwünschter Funktionen (z.&nbsp;B. für die Warenkorbfunktion) oder
                            zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des Webpublikums) erforderlich
                            sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                            gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat
                            ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch
                            fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
                            Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
                            erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1
                            lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                            werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle
                            oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des
                            Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser
                            Website eingeschränkt sein.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Sofern weitere Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dies
                            dieser Datenschutzerklärung entnehmen.
                        </p>
                    </section>

                    {/* 5. Plugins und Tools */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">5. Plugins und Tools</h2>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Font Awesome (lokales Hosting)</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font Awesome. Font Awesome
                            ist lokal installiert. Eine Verbindung zu Servern von Fonticons, Inc. findet dabei nicht
                            statt.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Weitere Informationen zu Font Awesome finden Sie in der Datenschutzerklärung für Font
                            Awesome unter:{' '}
                            <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer"
                               className="text-green-600 hover:text-green-700 underline">
                                https://fontawesome.com/privacy
                            </a>.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Google Analytics</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die
                            Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4,
                            Irland.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu
                            analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z.&nbsp;B.
                            Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese
                            Daten werden in einer User-ID zusammengefasst und dem jeweiligen Endgerät des
                            Websitebesuchers zugeordnet.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Des Weiteren können wir mit Google Analytics u.&nbsp;a. Ihre Maus- und Scrollbewegungen und
                            Klicks aufzeichnen. Ferner verwendet Google Analytics verschiedene Modellierungsansätze,
                            um die erfassten Datensätze zu ergänzen, und setzt Machine-Learning-Technologien bei der
                            Datenanalyse ein.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der
                            Analyse des Nutzerverhaltens ermöglichen (z.&nbsp;B. Cookies oder Device-Fingerprinting).
                            Die von Google erfassten Informationen über die Benutzung dieser Website werden in der
                            Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1
                            lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission
                            gestützt. Details finden Sie hier:{' '}
                            <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank"
                               rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline">
                                https://privacy.google.com/businesses/controllerterms/mccs/
                            </a>.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Das Unternehmen verfügt über eine Zertifizierung nach dem &bdquo;EU-US Data Privacy
                            Framework&ldquo; (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und
                            den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in
                            den USA gewährleisten soll. Weitere Informationen finden Sie unter:{' '}
                            <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank"
                               rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline">
                                https://www.dataprivacyframework.gov/participant/5780
                            </a>.
                        </p>

                        <h4 className="text-sm font-medium text-gray-700 mt-3 mb-1">IP-Anonymisierung</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die IP-Anonymisierungsfunktion ist bei Google Analytics aktiviert. Dadurch wird Ihre
                            IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung
                            in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
                            Google in den USA übertragen und dort gekürzt.
                        </p>

                        <h4 className="text-sm font-medium text-gray-700 mt-3 mb-1">Auftragsverarbeitung</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die
                            strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics
                            vollständig um.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Google Maps</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
                            (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland. Mit Hilfe dieses
                            Dienstes können wir Kartenmaterial auf unserer Website einbinden.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
                            Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen
                            und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
                            Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen
                            Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr
                            Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt
                            anzuzeigen.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
                            Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website
                            angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
                            DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit
                            die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
                            des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
                            Einwilligung ist jederzeit widerrufbar.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission
                            gestützt. Details finden Sie hier:{' '}
                            <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank"
                               rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline">
                                https://privacy.google.com/businesses/gdprcontrollerterms/
                            </a>{' '}und{' '}
                            <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank"
                               rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline">
                                https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                            </a>.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                            Google:{' '}
                            <a href="https://policies.google.com/privacy?hl=de" target="_blank"
                               rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline">
                                https://policies.google.com/privacy?hl=de
                            </a>.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Das Unternehmen verfügt über eine Zertifizierung nach dem &bdquo;EU-US Data Privacy
                            Framework&ldquo; (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und
                            den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in
                            den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich,
                            diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                            Anbieter unter folgendem Link:{' '}
                            <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank"
                               rel="noopener noreferrer" className="text-green-600 hover:text-green-700 underline">
                                https://www.dataprivacyframework.gov/participant/5780
                            </a>.
                        </p>
                    </section>

                    {/* Quelle */}
                    <section className="mb-8 border-t border-gray-200 pt-6">
                        <p className="text-gray-400 font-light text-sm leading-relaxed">
                            Quelle:{' '}
                            <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer"
                               className="hover:text-gray-500 underline">
                                https://www.e-recht24.de
                            </a>
                        </p>
                    </section>
                </div>



            </main>

            <Footer/>
        </div>
    );
}
