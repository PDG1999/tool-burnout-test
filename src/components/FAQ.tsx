import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Ist der Burnout-Test wirklich kostenlos?",
      answer: "Ja, der Basis-Test ist vollständig kostenlos. Sie erhalten sofortige Ergebnisse und grundlegende Empfehlungen. Für eine detaillierte Analyse bieten wir einen Premium-Service für 19€ an."
    },
    {
      question: "Wie lange dauert der Test?",
      answer: "Der Test dauert etwa 5 Minuten. Sie beantworten 22 wissenschaftlich validierte Fragen basierend auf dem Maslach Burnout Inventory (MBI)."
    },
    {
      question: "Sind meine Daten sicher?",
      answer: "Ja, absolut. Alle Daten werden verschlüsselt übertragen und sicher gespeichert. Wir geben niemals persönliche Informationen an Dritte weiter. Ihre Antworten werden anonymisiert verarbeitet."
    },
    {
      question: "Kann der Test eine professionelle Beratung ersetzen?",
      answer: "Nein, unser Test dient der Selbsteinschätzung und kann eine professionelle Beratung nicht ersetzen. Bei ernsthaften psychischen Problemen suchen Sie bitte einen Facharzt oder Psychologen auf."
    },
    {
      question: "Was ist das Maslach Burnout Inventory (MBI)?",
      answer: "Das MBI ist der international anerkannte Goldstandard für die Messung von Burnout. Es wurde von Christina Maslach entwickelt und misst drei Dimensionen: emotionale Erschöpfung, Depersonalisation und persönliche Leistungsfähigkeit."
    },
    {
      question: "Wie oft kann ich den Test machen?",
      answer: "Sie können den Test so oft machen, wie Sie möchten. Wir empfehlen jedoch, zwischen den Tests mindestens 2-3 Wochen zu warten, um aussagekräftige Ergebnisse zu erhalten."
    },
    {
      question: "Was passiert mit meinen Ergebnissen?",
      answer: "Ihre Ergebnisse werden nur für die Berechnung Ihrer Burnout-Bewertung verwendet. Sie können Ihre Ergebnisse jederzeit herunterladen oder teilen. Wir verwenden anonymisierte Daten für die Verbesserung unserer Services."
    },
    {
      question: "Kann ich den Test für mein Unternehmen nutzen?",
      answer: "Ja, wir bieten spezielle Unternehmenslizenzen an. Kontaktieren Sie uns unter business@samebi.net für weitere Informationen zu unseren B2B-Services."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <div className="mb-8">
            <Link to="/" className="text-red-600 hover:text-red-700 mb-4 inline-block">
              ← Zurück zur Startseite
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h1>
            <p className="text-gray-600">
              Hier finden Sie Antworten auf die wichtigsten Fragen zu unserem Burnout-Test.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              Haben Sie weitere Fragen?
            </h3>
            <p className="text-red-700 mb-4">
              Falls Sie hier keine Antwort auf Ihre Frage finden, kontaktieren Sie uns gerne:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@samebi.net"
                className="btn-primary text-center"
              >
                E-Mail senden
              </a>
              <Link
                to="/contact"
                className="btn-outline text-center"
              >
                Kontaktformular
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
