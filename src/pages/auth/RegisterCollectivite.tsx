import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '../../config/api'
import { useAuth } from '../../auth/AuthContext'

const RegisterCollectivite = () => {
  const [form, setForm] = useState({ organizationName: '', email: '', password: '', firstName: '', lastName: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const res = await fetch(apiUrl('/api/auth/register-collectivite'), {
      method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
    })
    if (res.ok) {
      const data = await res.json()
      if (data.token && data.user) {
        login(data.user, data.token)
        navigate('/dashboard-collectivite')
      }
    } else {
      setError((await res.json()).error || 'Erreur')
    }
  }

  return (
    <div className="max-w-lg mx-auto py-16 px-4">
      <h1 className="text-3xl font-display font-bold mb-6">Créer une collectivité</h1>
      <form onSubmit={submit} className="space-y-4">
        <input className="w-full border rounded-xl p-3" placeholder="Nom de la collectivité" value={form.organizationName} onChange={e=>setForm({...form, organizationName:e.target.value})} />
        <div className="grid grid-cols-2 gap-3">
          <input className="border rounded-xl p-3" placeholder="Prénom" value={form.firstName} onChange={e=>setForm({...form, firstName:e.target.value})} />
          <input className="border rounded-xl p-3" placeholder="Nom" value={form.lastName} onChange={e=>setForm({...form, lastName:e.target.value})} />
        </div>
        <input className="w-full border rounded-xl p-3" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        <input className="w-full border rounded-xl p-3" type="password" placeholder="Mot de passe" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button className="bg-primary-600 text-white px-6 py-3 rounded-xl">Créer</button>
      </form>
    </div>
  )
}

export default RegisterCollectivite
