import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-surface-page">
      <Container narrow className="py-16 md:py-24">
        <Eyebrow className="desktop:text-[13.5px]!">Rechtliches</Eyebrow>
        <h1 className="mt-4 font-display text-2xl font-medium text-navy-900 md:text-[2rem] desktop:text-[2.5rem]!">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">1. Verantwortliche</h2>
            <p className="mt-2">
              Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="mt-2">
              Natalia Saslawski – Executive Search &amp; Talent Advisory
              <br />
              Natalia Saslawski
              <br />
              Römischer Ring 48
              <br />
              60486 Frankfurt am Main
              <br />
              Deutschland
              <br />
              Telefon: +49 176 43983941
              <br />
              E-Mail: kontakt@natalia-saslawski.de
              <br />
              Website: www.natalia-saslawski.de
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              2. Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <p className="mt-2">
              Der Schutz personenbezogener Daten ist mir wichtig. Ich verarbeite
              personenbezogene Daten ausschließlich im Rahmen der geltenden
              datenschutzrechtlichen Vorschriften, insbesondere der
              Datenschutz-Grundverordnung (DSGVO).
            </p>
            <p className="mt-2">
              Personenbezogene Daten sind alle Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person beziehen.
            </p>
            <p className="mt-2">
              Im Rahmen meiner Tätigkeit können personenbezogene Daten insbesondere bei
              der Nutzung dieser Website, bei der Kontaktaufnahme, im Zusammenhang mit
              Beratungsleistungen sowie bei der Durchführung von Executive- und
              Professional-Search-Projekten verarbeitet werden.
            </p>
            <p className="mt-2">
              Die Verarbeitung erfolgt nur, soweit sie zur Erbringung meiner
              Leistungen, zur Kommunikation mit Interessent:innen, Kandidat:innen,
              Kund:innen und Geschäftspartner:innen, zur Durchführung vorvertraglicher
              Maßnahmen oder zur Erfüllung rechtlicher Verpflichtungen erforderlich ist
              oder eine entsprechende Einwilligung vorliegt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              3. Besuch dieser Website
            </h2>
            <p className="mt-2">
              Beim Aufruf dieser Website können durch den Hosting-Anbieter technisch
              erforderliche Informationen verarbeitet werden. Hierzu können
              insbesondere gehören:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite bzw. Datei</li>
              <li>Referrer-URL</li>
              <li>verwendeter Browser</li>
              <li>Betriebssystem</li>
              <li>Gerätetyp</li>
            </ul>
            <p className="mt-2">
              Die Verarbeitung erfolgt insbesondere zur sicheren und störungsfreien
              Bereitstellung der Website sowie zur Gewährleistung der IT-Sicherheit.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes
              Interesse liegt in der sicheren, technisch funktionsfähigen und
              nutzerfreundlichen Bereitstellung meiner Website.
            </p>
            <p className="mt-2">
              Diese Website wird bei Netlify, Inc. gehostet. Nähere Informationen zur
              Verarbeitung durch Netlify, einschließlich der Speicherdauer von
              Server-Logfiles, können den{" "}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Datenschutzhinweisen von Netlify
              </a>{" "}
              entnommen werden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              4. Kontaktaufnahme
            </h2>
            <p className="mt-2">
              Wenn Sie mich per E-Mail, Telefon, Kontaktformular oder auf anderem Wege
              kontaktieren, verarbeite ich die von Ihnen mitgeteilten Daten, soweit
              dies für die Bearbeitung Ihrer Anfrage erforderlich ist.
            </p>
            <p className="mt-2">Hierzu können insbesondere gehören:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>Unternehmen und Position</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Inhalt Ihrer Nachricht</li>
              <li>weitere von Ihnen freiwillig übermittelte Informationen</li>
            </ul>
            <p className="mt-2">
              Die Verarbeitung erfolgt je nach Anlass der Kontaktaufnahme auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung
              vorvertraglicher Maßnahmen bzw. zur Erfüllung eines Vertrags oder auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund meines berechtigten
              Interesses an einer sachgerechten Bearbeitung Ihrer Anfrage.
            </p>
            <p className="mt-2">
              Die Bereitstellung dieser Daten ist freiwillig; ohne die mit * markierten
              Pflichtangaben im Kontaktformular kann Ihre Anfrage jedoch nicht
              bearbeitet werden.
            </p>
            <p className="mt-2">
              Die Daten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr
              erforderlich sind und keine gesetzlichen Aufbewahrungspflichten oder
              sonstigen berechtigten Gründe für eine weitere Speicherung bestehen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              5. Executive Search und Professional Search
            </h2>
            <p className="mt-2">
              Im Rahmen meiner Leistungen im Bereich Executive Search und Professional
              Search verarbeite ich personenbezogene Daten von Kandidat:innen.
            </p>
            <p className="mt-2">Dabei können insbesondere folgende Daten verarbeitet werden:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Name und Kontaktdaten</li>
              <li>aktuelle und frühere berufliche Positionen</li>
              <li>beruflicher Werdegang und Berufserfahrung</li>
              <li>Ausbildung und Qualifikationen</li>
              <li>Fach- und Führungserfahrung</li>
              <li>Unternehmens- und Branchenzugehörigkeit</li>
              <li>öffentlich zugängliche berufliche Informationen</li>
              <li>Angaben zu beruflichen Interessen und Vorstellungen</li>
              <li>Verfügbarkeit und Wechselmotivation</li>
              <li>Gehalts- bzw. Vergütungsvorstellungen, soweit relevant</li>
              <li>Inhalte aus Gesprächen und Korrespondenz</li>
              <li>Lebenslauf und sonstige freiwillig übermittelte Unterlagen</li>
            </ul>
            <p className="mt-2">
              Die Daten werden verarbeitet, um potenziell geeignete Kandidat:innen für
              konkrete Suchmandate zu identifizieren, mit ihnen Kontakt aufzunehmen,
              ihre beruflichen Erfahrungen und Interessen mit den Anforderungen einer
              Position abzugleichen und gegebenenfalls einen weiteren Auswahlprozess zu
              begleiten.
            </p>
            <p className="mt-2">
              Rechtsgrundlagen können insbesondere Art. 6 Abs. 1 lit. b DSGVO, Art. 6
              Abs. 1 lit. f DSGVO sowie – sofern eine Einwilligung erteilt wurde – Art.
              6 Abs. 1 lit. a DSGVO sein.
            </p>
            <p className="mt-2">
              Mein berechtigtes Interesse liegt insbesondere in der professionellen
              Durchführung von Executive- und Professional-Search-Mandaten und der
              Identifikation geeigneter Kandidat:innen für zu besetzende Positionen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              6. Recherche und Direktansprache potenzieller Kandidat:innen
            </h2>
            <p className="mt-2">
              Im Rahmen von Executive- und Professional-Search-Mandaten recherchiere
              ich geeignete Kandidat:innen auch anhand beruflich öffentlich
              zugänglicher Informationen.
            </p>
            <p className="mt-2">Hierzu können insbesondere Informationen aus folgenden Quellen verwendet werden:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>berufliche Netzwerke wie LinkedIn oder XING</li>
              <li>Unternehmenswebsites</li>
              <li>öffentlich zugängliche berufliche Profile</li>
              <li>Fach- und Branchenverzeichnisse</li>
              <li>öffentlich zugängliche Veröffentlichungen</li>
              <li>weitere berufsbezogene öffentlich zugängliche Quellen</li>
            </ul>
            <p className="mt-2">
              Dabei verarbeite ich grundsätzlich nur solche Informationen, die für die
              Beurteilung der beruflichen Eignung für eine konkrete Position oder für
              eine sachgerechte Kontaktaufnahme relevant sind.
            </p>
            <p className="mt-2">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Mein berechtigtes Interesse liegt in der Identifikation und
              professionellen Ansprache potenziell geeigneter Kandidat:innen im Rahmen
              meiner Recruiting- und Search-Dienstleistungen.
            </p>
            <p className="mt-2">
              Sie haben gemäß Art. 21 DSGVO das Recht, der Verarbeitung Ihrer
              personenbezogenen Daten aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, zu widersprechen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              7. Übermittlung von Kandidat:innenprofilen an Auftraggeber:innen
            </h2>
            <p className="mt-2">
              Personenbezogene Daten, Lebensläufe oder Kandidat:innenprofile werden
              nicht ohne entsprechende Grundlage an potenzielle Arbeitgeber:innen bzw.
              Auftraggeber:innen weitergegeben.
            </p>
            <p className="mt-2">
              Soweit im Rahmen eines konkreten Such- oder Auswahlprozesses eine
              Vorstellung bei einem Unternehmen erfolgen soll, wird dies zuvor mit der
              betroffenen Person abgestimmt. Eine Übermittlung erfolgt nur, wenn dies
              für den jeweiligen Prozess erforderlich und datenschutzrechtlich
              zulässig ist.
            </p>
            <p className="mt-2">Dabei können insbesondere folgende Informationen übermittelt werden:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Lebenslauf bzw. berufliches Profil</li>
              <li>beruflicher Werdegang</li>
              <li>Qualifikationen und Erfahrungen</li>
              <li>Angaben zu Verfügbarkeit und beruflichen Vorstellungen</li>
              <li>im Rahmen des Auswahlprozesses relevante Informationen</li>
            </ul>
            <p className="mt-2">
              Empfänger:innen sind ausschließlich die jeweiligen Unternehmen bzw. deren
              zuständige Ansprechpartner:innen, für die das betreffende Suchmandat
              durchgeführt wird.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              8. Kandidat:innenpool und längerfristige Speicherung
            </h2>
            <p className="mt-2">
              Personenbezogene Daten von Kandidat:innen werden grundsätzlich nur so
              lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist.
            </p>
            <p className="mt-2">
              Eine längerfristige Speicherung von Kontaktdaten und beruflichem Profil
              für eine mögliche Berücksichtigung bei zukünftigen, zum jeweiligen
              Profil passenden Suchmandaten erfolgt auf Grundlage meines berechtigten
              Interesses (Art. 6 Abs. 1 lit. f DSGVO) an einer effizienten und
              sachgerechten Wiederansprache bereits bekannter Kandidat:innen. Über
              eine solche Vorhaltung werde ich bereits beim ersten Kontakt informieren.
            </p>
            <p className="mt-2">
              Einer weiteren Speicherung und erneuten Kontaktaufnahme zu diesem Zweck
              kann jederzeit formlos, insbesondere unter den oben angegebenen
              Kontaktdaten, gemäß Art. 21 DSGVO widersprochen werden. Vorgehaltene
              Kontaktdaten werden regelmäßig auf ihre Aktualität und Erforderlichkeit
              überprüft und gelöscht, wenn keine begründete Aussicht auf eine
              zukünftige Ansprache mehr besteht.
            </p>
            <p className="mt-2">
              Soweit für eine Speicherung im Einzelfall eine Einwilligung erforderlich
              ist, kann diese jederzeit mit Wirkung für die Zukunft widerrufen werden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              9. Daten von Kund:innen und Geschäftskontakten
            </h2>
            <p className="mt-2">
              Im Rahmen meiner Geschäftsbeziehungen verarbeite ich personenbezogene
              Daten von Kund:innen, Interessent:innen, Ansprechpartner:innen bei
              Unternehmen und sonstigen Geschäftspartner:innen.
            </p>
            <p className="mt-2">Dabei können insbesondere verarbeitet werden:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>Unternehmen</li>
              <li>Position und Funktion</li>
              <li>berufliche Kontaktdaten</li>
              <li>Telefonnummer und E-Mail-Adresse</li>
              <li>Informationen zu Suchmandaten und Anforderungen</li>
              <li>Inhalte der geschäftlichen Kommunikation</li>
              <li>Vertrags- und Abrechnungsdaten</li>
            </ul>
            <p className="mt-2">
              Die Verarbeitung erfolgt insbesondere zur Anbahnung, Durchführung und
              Verwaltung von Geschäftsbeziehungen und Aufträgen.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw., bei
              Ansprechpartner:innen von Unternehmen, Art. 6 Abs. 1 lit. f DSGVO. Mein
              berechtigtes Interesse liegt in der Durchführung und Pflege
              geschäftlicher Beziehungen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              10. Recruiting- und Talent-Advisory-Leistungen
            </h2>
            <p className="mt-2">
              Im Rahmen von Beratungsleistungen rund um Recruiting, Talent Acquisition
              und Personalgewinnung können personenbezogene Daten von
              Ansprechpartner:innen sowie gegebenenfalls weitere für das jeweilige
              Beratungsprojekt erforderliche personenbezogene Daten verarbeitet
              werden.
            </p>
            <p className="mt-2">
              Die Verarbeitung erfolgt ausschließlich im Umfang, der für die
              Durchführung des jeweiligen Beratungsauftrags erforderlich ist.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f
              DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              11. Weitergabe von Daten an Dienstleister
            </h2>
            <p className="mt-2">
              Personenbezogene Daten können im erforderlichen Umfang an Dienstleister
              übermittelt werden, die mich bei der Durchführung meiner Tätigkeit
              unterstützen.
            </p>
            <p className="mt-2">Hierzu können beispielsweise gehören:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Hosting- und IT-Dienstleister (aktuell: Netlify, Inc.)</li>
              <li>
                E-Mail- und Kommunikationsanbieter (aktuell: Google LLC / Google
                Ireland Limited, Versand von Anfragen aus dem Kontaktformular über
                Gmail)
              </li>
              <li>Softwareanbieter</li>
              <li>Steuerberatung und Buchhaltung</li>
              <li>gegebenenfalls weitere technische Dienstleister</li>
            </ul>
            <p className="mt-2">
              Soweit diese Dienstleister personenbezogene Daten in meinem Auftrag
              verarbeiten, erfolgt die Zusammenarbeit auf Grundlage der gesetzlichen
              Anforderungen, insbesondere im Rahmen einer Auftragsverarbeitung gemäß
              Art. 28 DSGVO.
            </p>
            <p className="mt-2">
              Eine darüber hinausgehende Weitergabe personenbezogener Daten erfolgt
              nur, wenn eine gesetzliche Grundlage hierfür besteht oder eine
              entsprechende Einwilligung vorliegt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              12. Datenübermittlung in Drittländer
            </h2>
            <p className="mt-2">
              Soweit eingesetzte Dienste personenbezogene Daten außerhalb der
              Europäischen Union bzw. des Europäischen Wirtschaftsraums verarbeiten,
              erfolgt eine solche Übermittlung nur unter Beachtung der gesetzlichen
              Voraussetzungen der Art. 44 ff. DSGVO.
            </p>
            <p className="mt-2">
              Sowohl Netlify (Hosting dieser Website) als auch Google (Versand von
              Anfragen aus dem Kontaktformular über Gmail) sind Anbieter mit Sitz bzw.
              Konzernmuttergesellschaft in den USA. Eine Verarbeitung personenbezogener
              Daten in den USA kann daher nicht ausgeschlossen werden. Beide Anbieter
              geben an, geeignete Garantien für ein angemessenes Datenschutzniveau
              vorzuhalten (z. B. EU-Standardvertragsklauseln bzw. eine Zertifizierung
              nach dem EU-U.S. Data Privacy Framework); nähere Angaben hierzu
              entnehmen Sie bitte den Datenschutzhinweisen der jeweiligen Anbieter.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">13. Speicherdauer</h2>
            <p className="mt-2">
              Darüber hinaus können gesetzliche Aufbewahrungspflichten bestehen,
              beispielsweise aufgrund handels- oder steuerrechtlicher Vorschriften.
            </p>
            <p className="mt-2">
              Nach Wegfall des jeweiligen Verarbeitungszwecks bzw. Ablauf gesetzlicher
              Aufbewahrungsfristen werden die Daten gelöscht, sofern keine andere
              Rechtsgrundlage eine weitere Speicherung rechtfertigt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              14. Cookies und externe Dienste
            </h2>
            <p className="mt-2">
              Diese Website setzt derzeit keine Cookies oder vergleichbaren
              Technologien zu Analyse-, Marketing- oder Tracking-Zwecken ein. Es
              werden aktuell keine Webanalyse-Tools, keine eingebetteten Karten- oder
              Video-Dienste und keine vergleichbaren externen Dienste verwendet.
            </p>
            <p className="mt-2">
              Sollten künftig solche Dienste eingesetzt werden, wird diese
              Datenschutzerklärung entsprechend aktualisiert und, soweit
              datenschutzrechtlich erforderlich, zuvor Ihre Einwilligung eingeholt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">15. Schriftarten</h2>
            <p className="mt-2">
              Diese Website nutzt Schriftarten, die lokal eingebunden werden. Es
              findet dabei keine Verbindung zu externen Servern (z. B. Google Fonts)
              statt, sodass beim Laden der Schriftarten keine personenbezogenen Daten,
              insbesondere keine IP-Adresse, an Dritte übermittelt werden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              16. Social-Media- und berufliche Netzwerkprofile
            </h2>
            <p className="mt-2">
              Ich unterhalte gegebenenfalls geschäftliche Profile in beruflichen und
              sozialen Netzwerken, insbesondere LinkedIn.
            </p>
            <p className="mt-2">
              Wenn Sie dort mein Profil besuchen oder über die jeweilige Plattform mit
              mir kommunizieren, können personenbezogene Daten sowohl durch mich als
              auch durch den jeweiligen Plattformanbieter verarbeitet werden.
            </p>
            <p className="mt-2">
              Für die Datenverarbeitung durch den jeweiligen Plattformanbieter gelten
              ergänzend dessen Datenschutzbestimmungen. Soweit ich personenbezogene
              Daten im Rahmen der Kommunikation oder geschäftlichen Kontaktaufnahme
              verarbeite, gelten die in dieser Datenschutzerklärung beschriebenen
              Grundsätze.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              17. Keine ausschließlich automatisierte Entscheidungsfindung
            </h2>
            <p className="mt-2">
              Im Rahmen meiner Leistungen erfolgt keine ausschließlich automatisierte
              Entscheidungsfindung im Sinne von Art. 22 DSGVO, die Ihnen gegenüber
              rechtliche Wirkung entfaltet oder Sie in ähnlich erheblicher Weise
              beeinträchtigt.
            </p>
            <p className="mt-2">
              Die Beurteilung und Auswahl von Kandidat:innen erfolgt nicht
              automatisiert, sondern ausschließlich durch mich persönlich.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">18. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere
              folgende Rechte:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Recht auf Auskunft gemäß Art. 15 DSGVO</li>
              <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
              <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
              <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
              <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
              <li>Recht auf Widerspruch gemäß Art. 21 DSGVO</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung gemäß Art. 7 Abs. 3 DSGVO</li>
            </ul>
            <p className="mt-2">
              Ein Widerruf berührt nicht die Rechtmäßigkeit der bis zum Widerruf
              erfolgten Verarbeitung.
            </p>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte können Sie sich jederzeit an mich unter den
              oben angegebenen Kontaktdaten wenden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              19. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p className="mt-2">
              Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer
              Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind,
              dass die Verarbeitung Ihrer personenbezogenen Daten gegen
              datenschutzrechtliche Vorschriften verstößt.
            </p>
            <p className="mt-2">
              Zuständige Datenschutzaufsichtsbehörde ist grundsätzlich die
              Aufsichtsbehörde des Bundeslandes, in dem mein Unternehmen seinen Sitz
              hat.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">20. Datensicherheit</h2>
            <p className="mt-2">
              Ich treffe angemessene technische und organisatorische Maßnahmen, um
              personenbezogene Daten vor Verlust, Missbrauch, Manipulation,
              unbefugtem Zugriff und sonstiger unzulässiger Verarbeitung zu schützen.
            </p>
            <p className="mt-2">
              Die Übertragung dieser Website erfolgt, soweit technisch vorgesehen,
              verschlüsselt mittels SSL/TLS.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-medium text-navy-900">
              21. Aktualisierung dieser Datenschutzerklärung
            </h2>
            <p className="mt-2">
              Diese Datenschutzerklärung wird angepasst, wenn sich gesetzliche
              Anforderungen, meine Leistungen oder die von mir eingesetzten
              technischen Dienste ändern.
            </p>
            <p className="mt-2">Stand: September 2026</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
