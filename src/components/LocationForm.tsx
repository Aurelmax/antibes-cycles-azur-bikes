import { useState } from 'react'

export default function LocationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bikeId, setBikeId] = useState<number | ''>('')
  const [startDate, setStartDate] = useState('')
  const [duration, setDuration] = useState(1)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    if (!name || !email || !bikeId || !startDate || duration < 1) {
      setError('Merci de remplir tous les champs obligatoires.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/location', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, bikeId, startDate, duration, message })
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setSuccess(true)
      setName(''); setEmail(''); setBikeId(''); setStartDate(''); setDuration(1); setMessage('')
    } catch (err) {
      setError('Erreur lors de l’envoi, veuillez réessayer.')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 p-8 bg-card-bg border border-border-color rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-white tracking-wide text-center mb-6">FORMULAIRE DE LOCATION</h2>

      {error && <p className="text-red-400 bg-red-900/20 border border-red-500 px-4 py-3 rounded-lg">{error}</p>}
      {success && <p className="text-green-400 bg-green-900/20 border border-green-500 px-4 py-3 rounded-lg">Votre demande a été envoyée avec succès !</p>}

      <label className="block">
        <span className="text-white font-bold mb-2 block tracking-wide">NOM COMPLET *</span>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
          placeholder="Votre nom complet"
        />
      </label>

      <label className="block">
        <span className="text-white font-bold mb-2 block tracking-wide">EMAIL *</span>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
          placeholder="votre@email.com"
        />
      </label>

      <label className="block">
        <span className="text-white font-bold mb-2 block tracking-wide">SÉLECTIONNEZ UN VÉLO *</span>
        <select 
          value={bikeId} 
          onChange={e => setBikeId(Number(e.target.value))} 
          required 
          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
        >
          <option value="">-- Choisir un vélo --</option>
          <option value={1}>Lundi 26</option>
          <option value={2}>Friday 26</option>
          <option value={3}>Saturday 28</option>
          {/* Cette liste sera rendue dynamique avec les données */}
        </select>
      </label>

      <label className="block">
        <span className="text-white font-bold mb-2 block tracking-wide">DATE DE DÉBUT *</span>
        <input 
          type="date" 
          value={startDate} 
          onChange={e => setStartDate(e.target.value)} 
          required 
          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold" 
        />
      </label>

      <label className="block">
        <span className="text-white font-bold mb-2 block tracking-wide">DURÉE (JOURS) *</span>
        <input 
          type="number" 
          min="1" 
          value={duration} 
          onChange={e => setDuration(Number(e.target.value))} 
          required 
          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
          placeholder="Nombre de jours"
        />
      </label>

      <label className="block">
        <span className="text-white font-bold mb-2 block tracking-wide">MESSAGE / DEMANDE SPÉCIALE</span>
        <textarea 
          value={message} 
          onChange={e => setMessage(e.target.value)} 
          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
          rows={3} 
          placeholder="Votre message ou demande spéciale..."
        />
      </label>

      <button 
        type="submit" 
        disabled={loading} 
        className="w-full bg-accent-gold text-primary-black py-4 px-6 rounded-lg hover:bg-white hover:text-primary-black transition-all duration-300 font-bold tracking-wide hover-glow button-glow-intense button-shimmer disabled:bg-gray-500 disabled:text-gray-300"
      >
        {loading ? 'ENVOI...' : 'ENVOYER LA DEMANDE'}
      </button>
    </form>
  )
}
