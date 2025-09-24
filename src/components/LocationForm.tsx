'use client';

import { useState } from 'react';

interface LocationFormData {
  nom: string;
  email: string;
  velo: string;
  date: string;
  duree: string;
  message: string;
}

export default function LocationForm() {
  const [formData, setFormData] = useState<LocationFormData>({
    nom: '',
    email: '',
    velo: '',
    date: '',
    duree: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demande de location:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
          Nom complet
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="velo" className="block text-sm font-medium text-gray-700 mb-2">
          Velo souhaite
        </label>
        <select
          id="velo"
          name="velo"
          value={formData.velo}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Selectionnez un velo</option>
          <option value="Samedi 27 Xroad">Samedi 27 Xroad</option>
          <option value="Lundi 26.1">Lundi 26.1</option>
          <option value="Dimanche 28.7">Dimanche 28.7</option>
          <option value="Friday 27.5">Friday 27.5</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
          Date de debut
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="duree" className="block text-sm font-medium text-gray-700 mb-2">
          Duree
        </label>
        <select
          id="duree"
          name="duree"
          value={formData.duree}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Selectionnez la duree</option>
          <option value="demi-journee">Demi-journee</option>
          <option value="journee">Journee complete</option>
          <option value="weekend">Week-end</option>
          <option value="semaine">Semaine</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Informations complementaires..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
      >
        Envoyer la demande
      </button>
    </form>
  );
}