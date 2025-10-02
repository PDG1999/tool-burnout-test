import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <div className="mb-8">
            <Link to="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
              ← Zurück zur Startseite
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-gray-600">
              Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung des 
              Burnout-Tests von SAMEBI Deutschland.
            </p>

            <h2>2. Leistungen</h2>
            <p>
              SAMEBI bietet einen wissenschaftlich validierten Burnout-Test basierend 
              auf dem Maslach Burnout Inventory (MBI) an.
            </p>

            <h3>2.1 Kostenloser Test</h3>
            <p>
              Der Basis-Test ist kostenlos und umfasst:
            </p>
            <ul>
              <li>22 wissenschaftlich validierte Fragen</li>
              <li>Sofortige Auswertung</li>
              <li>Grundlegende Empfehlungen</li>
            </ul>

            <h3>2.2 Premium-Services</h3>
            <p>
              Gegen Entgelt bieten wir zusätzliche Services:
            </p>
            <ul>
              <li>Detaillierte Analyse (19€)</li>
              <li>Coaching-Programm (197€)</li>
            </ul>

            <h2>3. Nutzungsbedingungen</h2>
            <p>
              Der Test dient ausschließlich der Selbsteinschätzung und kann eine 
              professionelle Beratung nicht ersetzen. Bei ernsthaften psychischen 
              Problemen suchen Sie bitte einen Facharzt auf.
            </p>

            <h2>4. Haftungsausschluss</h2>
            <p>
              SAMEBI haftet nicht für:
            </p>
            <ul>
              <li>Schäden aus der Nutzung der Testergebnisse</li>
              <li>Fehlinterpretationen der Ergebnisse</li>
              <li>Technische Ausfälle oder Unterbrechungen</li>
            </ul>

            <h2>5. Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer 
              Datenschutzerklärung.
            </p>

            <h2>6. Änderungen</h2>
            <p>
              Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. 
              Änderungen werden auf dieser Seite veröffentlicht.
            </p>

            <h2>7. Anwendbares Recht</h2>
            <p>
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
            </p>

            <h2>8. Kontakt</h2>
            <p>
              Bei Fragen zu diesen AGB wenden Sie sich an:
            </p>
            <p>
              E-Mail: legal@samebi.net
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
