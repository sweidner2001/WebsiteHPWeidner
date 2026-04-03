'use client';
import React from 'react';
import Link from 'next/link';

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
                    <h1 className="text-3xl font-light text-gray-800 mb-8">Datenschutzerklärung</h1>
                    <div className="w-12 h-px bg-[#2d6a4f] mb-10"></div>

                    {/* 1. Datenschutz auf einen Blick */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">1. Datenschutz auf einen Blick</h2>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Allgemeine Hinweise</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                            Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                            denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
                            Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            <span className="font-normal">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</span><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                            können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                        </p>

                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Wie erfassen wir Ihre Daten?</span><br />
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                            sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                            unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                            Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                            automatisch, sobald Sie diese Website betreten.
                        </p>

                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Wofür nutzen wir Ihre Daten?</span><br />
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>

                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Welche Rechte haben Sie bezüglich Ihrer Daten?</span><br />
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                            Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                            Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                            widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
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
                            erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.&nbsp;a.
                            um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                            Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
                            und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                            schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen
                            Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Hosting-Anbieter:</span> [Name und Adresse des Hosting-Anbieters eintragen]
                        </p>
                    </section>

                    {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>

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
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation
                            per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                            Zugriff durch Dritte ist nicht möglich.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Naturheilpraxis Carola Weidner<br />
                            Carola Weidner<br />
                            Pfaffenreuth 22<br />
                            92715 Püchersreuth
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            <span className="font-normal">Telefon:</span> 09681 / 8170<br />
                            <span className="font-normal">E-Mail:</span> CarolaWeidner@gmx.de
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                            mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                            (z.&nbsp;B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Speicherdauer</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                            verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
                            entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
                            Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
                            zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer-
                            oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung
                            nach Fortfall dieser Gründe.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
                            Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
                            besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
                            ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt
                            die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in
                            die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
                            (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
                            zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                            Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der
                            bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                            haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                            gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Die jeweilige
                            Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung.
                            Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr
                            verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
                            nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient
                            der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
                            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Recht auf Datenübertragbarkeit</h3>
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
                        <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed mt-2 space-y-1">
                            <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten.</li>
                            <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht und
                                Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                            <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                                Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen.</li>
                            <li>Wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht,
                                ob unsere berechtigten Gründe gegenüber Ihren überwiegen.</li>
                        </ul>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
                            wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                            SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                            Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in
                            Ihrer Browserzeile.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                            übermitteln, nicht von Dritten mitgelesen werden.
                        </p>
                    </section>

                    {/* 4. Datenerfassung auf dieser Website */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">4. Datenerfassung auf dieser Website</h2>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Server-Log-Dateien</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed mt-2 space-y-1">
                            <li>Browsertyp und Browserversion</li>
                            <li>Verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
                            Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                            Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
                            und der Optimierung seiner Website – hierzu müssen die Server-Log-Dateien erfasst werden.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Kontaktformular</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                            wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                            Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
                            auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                            Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                            DSGVO), sofern diese abgefragt wurde.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
                            Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                            Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
                            Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                        </p>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Anfrage per E-Mail oder Telefon</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
                            hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
                            Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
                            Einwilligung weiter.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                            Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
                            auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                            Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                            DSGVO), sofern diese abgefragt wurde.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns
                            zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                            Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens).
                            Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
                            unberührt.
                        </p>
                    </section>

                    {/* 5. Plugins und Tools */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">5. Plugins und Tools</h2>

                        <h3 className="text-base font-medium text-gray-800 mt-4 mb-2">Google Maps</h3>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
                            („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
                            Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und
                            dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
                            Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen
                            Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                            Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
                            widerrufbar.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                            Google:{' '}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 underline"
                            >
                                https://policies.google.com/privacy
                            </a>
                        </p>
                    </section>

                    {/* 6. Hinweis zur Datenverarbeitung im Rahmen der Heilpraktikertätigkeit */}
                    <section className="mb-8">
                        <h2 className="text-lg font-medium text-gray-800 mb-3">6. Hinweis zur Datenverarbeitung im Rahmen der Heilpraktikertätigkeit</h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Im Rahmen der Heilpraktikertätigkeit erheben und verarbeiten wir Gesundheitsdaten unserer
                            Patienten. Diese besondere Kategorie personenbezogener Daten wird auf Grundlage von
                            Art. 9 Abs. 2 lit. h DSGVO i.&nbsp;V.&nbsp;m. § 22 Abs. 1 Nr. 1 lit. b BDSG verarbeitet,
                            soweit dies für Zwecke der Gesundheitsvorsorge oder der Arbeitsmedizin, für die Beurteilung
                            der Arbeitsfähigkeit des Beschäftigten, für die medizinische Diagnostik, die Versorgung oder
                            Behandlung im Gesundheits- oder Sozialbereich oder für die Verwaltung von Systemen und
                            Diensten im Gesundheitsbereich erforderlich ist.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Wir unterliegen als Heilpraktiker der Schweigepflicht gemäß § 203 StGB. Ihre Daten werden
                            vertraulich behandelt und nicht ohne Ihre ausdrückliche Einwilligung an Dritte weitergegeben,
                            es sei denn, eine gesetzliche Verpflichtung besteht.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mt-2">
                            Patientendaten werden gemäß den gesetzlichen Aufbewahrungsfristen (in der Regel 10 Jahre nach
                            Abschluss der Behandlung) aufbewahrt und anschließend datenschutzgerecht vernichtet.
                        </p>
                    </section>

                    {/* Quelle */}
                    <section className="mb-8 border-t border-gray-200 pt-6">
                        <p className="text-gray-400 font-light text-sm leading-relaxed">
                            tetst.
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#0d9c42] py-8 border-t border-green-600">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-white font-light">&copy; {new Date().getFullYear()} Naturheilpraxis Carola Weidner.
                        Alle Rechte vorbehalten.</p>
                    <div className="mt-2">
                        <Link href="/datenschutz" className="text-white hover:text-green-200 text-sm font-light mx-2">Datenschutz</Link>
                        <Link href="/impressum" className="text-white hover:text-green-200 text-sm font-light mx-2">Impressum</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
