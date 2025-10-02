import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert('Nachricht wurde gesendet! (Demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <div className="mb-8">
            <Link to="/" className="text-red-600 hover:text-red-700 mb-4 inline-block">
              ← Zurück zur Startseite
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Kontakt
            </h1>
            <p className="text-gray-600">
              Haben Sie Fragen? Wir helfen gerne weiter!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Nachricht senden
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="general">Allgemeine Frage</option>
                    <option value="technical">Technisches Problem</option>
                    <option value="business">Geschäftliche Anfrage</option>
                    <option value="partnership">Partnerschaft</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900">E-Mail</h3>
                  <p className="text-gray-600">info@samebi.net</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">Telefon</h3>
                  <p className="text-gray-600">+49 (0) 30 12345678</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">Adresse</h3>
                  <p className="text-gray-600">
                    SAMEBI Deutschland<br />
                    Musterstraße 123<br />
                    10115 Berlin
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900">Öffnungszeiten</h3>
                  <p className="text-gray-600">
                    Mo-Fr: 9:00 - 18:00 Uhr<br />
                    Sa: 10:00 - 14:00 Uhr
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <h3 className="font-medium text-red-900 mb-2">Notfall?</h3>
                <p className="text-red-700 text-sm">
                  Bei psychischen Notfällen wenden Sie sich bitte an:<br />
                  <strong>Telefonseelsorge: 0800 111 0 111</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
