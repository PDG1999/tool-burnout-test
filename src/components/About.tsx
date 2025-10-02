import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <div className="mb-8">
            <Link to="/" className="text-red-600 hover:text-red-700 mb-4 inline-block">
              ← Zurück zur Startseite
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Über SAMEBI
            </h1>
            <p className="text-gray-600">
              Ihre vertrauensvolle Quelle für psychologische Online-Assessments
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Unsere Mission</h2>
            <p>
              SAMEBI macht psychologische Assessments für jeden zugänglich. Wir entwickeln 
              wissenschaftlich fundierte Online-Tools, die Menschen dabei helfen, ihre 
              psychische Gesundheit besser zu verstehen und zu verbessern.
            </p>

            <h2>Wissenschaftlicher Ansatz</h2>
            <p>
              Alle unsere Tests basieren auf etablierten, wissenschaftlich validierten 
              Instrumenten wie dem Maslach Burnout Inventory (MBI). Wir arbeiten eng mit 
              Psychologen und Forschern zusammen, um die höchsten Qualitätsstandards zu gewährleisten.
            </p>

            <h2>Datenschutz und Vertraulichkeit</h2>
            <p>
              Ihre Privatsphäre ist uns wichtig. Alle Daten werden verschlüsselt übertragen 
              und sicher gespeichert. Wir geben niemals persönliche Informationen an Dritte weiter.
            </p>

            <h2>Für wen sind unsere Tools?</h2>
            <ul>
              <li><strong>Privatpersonen:</strong> Selbsteinschätzung und Prävention</li>
              <li><strong>Psychologen:</strong> Ergänzung zur professionellen Beratung</li>
              <li><strong>Unternehmen:</strong> Mitarbeitergesundheit und Prävention</li>
              <li><strong>Forscher:</strong> Wissenschaftliche Studien und Analysen</li>
            </ul>

            <h2>Kontakt</h2>
            <p>
              Haben Sie Fragen oder Anregungen? Wir freuen uns über Ihre Nachricht:
            </p>
            <p>
              E-Mail: info@samebi.net<br />
              Telefon: +49 (0) 30 12345678
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
