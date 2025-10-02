import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <div className="mb-8">
            <Link to="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
              ← Zurück zur Startseite
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-gray-600">
              Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              SAMEBI Deutschland<br />
              E-Mail: support@samebi.net
            </p>

            <h2>2. Datenerhebung und -verwendung</h2>
            <p>
              Wir erheben und verarbeiten personenbezogene Daten nur im Rahmen der 
              Nutzung unseres Burnout-Tests und der damit verbundenen Services.
            </p>

            <h3>2.1 Testdaten</h3>
            <p>
              Die Antworten auf die Testfragen werden anonymisiert gespeichert und 
              ausschließlich zur Berechnung Ihrer Burnout-Bewertung verwendet. 
              Diese Daten werden nicht an Dritte weitergegeben.
            </p>

            <h3>2.2 E-Mail-Adressen</h3>
            <p>
              Wenn Sie Ihre E-Mail-Adresse angeben, verwenden wir diese nur für:
            </p>
            <ul>
              <li>Versendung der detaillierten Analyse</li>
              <li>Kontaktaufnahme bei technischen Problemen</li>
              <li>Informationen über neue Features (optional)</li>
            </ul>

            <h2>3. Cookies und Tracking</h2>
            <p>
              Wir verwenden Google Analytics zur Analyse der Website-Nutzung. 
              Sie können der Verwendung von Cookies in Ihren Browser-Einstellungen widersprechen.
            </p>

            <h2>4. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf:
            </p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>

            <h2>5. Datensicherheit</h2>
            <p>
              Wir verwenden technische und organisatorische Maßnahmen zum Schutz 
              Ihrer Daten vor unbefugtem Zugriff, Verlust oder Missbrauch.
            </p>

            <h2>6. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:
            </p>
            <p>
              E-Mail: privacy@samebi.net
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
