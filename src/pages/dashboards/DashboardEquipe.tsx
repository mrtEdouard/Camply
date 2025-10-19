import { useAuth } from '../../auth/AuthContext'
import { useEffect, useState } from 'react'
import React from 'react'
import { Calendar, MapPin, Users, Settings, Bell, Award, Zap, Plus, Edit2, Trash2 } from 'lucide-react'
import Avatar from '../../components/ui/Avatar'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { apiUrl } from '../../config/api'

const DashboardEquipe = () => {
  const { user, loading, refresh, uploadAvatar, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileForm, setProfileForm] = useState({ firstName: '', lastName: '' })
  
  useEffect(() => { 
    refresh() 
    if (user) {
      setProfileForm({ firstName: user.firstName || '', lastName: user.lastName || '' })
    }
  }, [user?.id])
  
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <LoadingSpinner size="xl" text="Chargement de votre espace..." />
      </div>
    )
  }
  
  if (!user || !['DIRECTEUR', 'ANIMATEUR'].includes(user.role)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h2 className="text-xl font-bold text-neutral-800 mb-2">Accès refusé</h2>
          <p className="text-neutral-600">Vous n'avez pas les permissions nécessaires.</p>
        </Card>
      </div>
    )
  }

  const handleSaveProfile = async () => {
    await updateProfile(profileForm)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header avec background élégant */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <Avatar 
                src={user.avatar} 
                alt={`${user.firstName} ${user.lastName}`}
                size="xl"
                showUpload={true}
                onUpload={uploadAvatar}
                className="ring-4 ring-white/20"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Bonjour, {user.firstName} ! 👋
                </h1>
                <Badge role={user.role} />
              </div>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg">
                {user.role === 'DIRECTEUR' ? 'Gérez votre équipe et vos séjours' : 'Animez vos activités avec passion'}
              </p>
              {user.organization && (
                <p className="text-white/70 text-xs sm:text-sm mt-1">
                  🏢 Organisation: <span className="font-medium">{user.organization.name}</span>
                </p>
              )}
            </div>
            <div className="text-center sm:text-right flex-shrink-0">
              <div className="text-white/60 text-xs sm:text-sm">Dernière connexion</div>
              <div className="font-medium text-sm sm:text-base">Aujourd'hui</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            
            {/* Statistiques */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <Card gradient hover className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">XX</div>
                <div className="text-xs sm:text-sm text-neutral-600">Enfants accompagnés</div>
              </Card>
              
              <Card gradient hover className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">XX</div>
                <div className="text-xs sm:text-sm text-neutral-600">Jours d'activité</div>
              </Card>
              
              <Card gradient hover className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">XX%</div>
                <div className="text-xs sm:text-sm text-neutral-600">Satisfaction</div>
              </Card>
            </div>

            {/* Gestion des animateurs (pour directeurs) */}
            {user.role === 'DIRECTEUR' && <AnimateursModule />}

            {/* Séjours en cours */}
            <Card className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-neutral-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  Mes séjours
                </h2>
                <span className="text-xs sm:text-sm text-neutral-500">XX actifs</span>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Séjour exemple */}
                <div className="border border-neutral-200 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-neutral-800 text-sm sm:text-base">Séjour d'été - Aventure Nature</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium self-start sm:self-auto">
                      En cours
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">XX-XX Juillet</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">Centre XX</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">XX enfants</span>
                    </div>
                  </div>
                </div>
                
                {/* Plus de séjours */}
                <div className="text-center py-8">
                  <Zap className="w-12 h-12 text-neutral-300 mx-auto mb-2" />
                  <p className="text-neutral-500">Plus de séjours bientôt disponibles</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Profil détaillé */}
            <Card gradient className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
                <h2 className="font-bold text-neutral-800 flex items-center gap-2 text-sm sm:text-base">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                  Mon profil
                </h2>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium self-start sm:self-auto"
                >
                  {isEditing ? 'Annuler' : 'Modifier'}
                </button>
              </div>
              
              {isEditing ? (
                <div className="space-y-3 sm:space-y-4">
                  <input 
                    type="text"
                    placeholder="Prénom"
                    value={profileForm.firstName}
                    onChange={(e) => setProfileForm({...profileForm, firstName: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <input 
                    type="text"
                    placeholder="Nom"
                    value={profileForm.lastName}
                    onChange={(e) => setProfileForm({...profileForm, lastName: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button 
                    onClick={handleSaveProfile}
                    className="w-full bg-primary-600 text-white py-2 text-sm rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    Sauvegarder
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <div className="text-xs sm:text-sm text-neutral-500">Nom complet</div>
                    <div className="font-medium text-sm sm:text-base">{user.firstName} {user.lastName}</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-neutral-500">Email</div>
                    <div className="font-medium text-sm sm:text-base break-all">{user.email}</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-neutral-500">Fonction</div>
                    <div className="flex items-center gap-2">
                      <Badge role={user.role} className="text-xs" />
                    </div>
                  </div>
                  {user.organization && (
                    <div>
                      <div className="text-xs sm:text-sm text-neutral-500">Organisation</div>
                      <div className="font-medium text-sm sm:text-base">{user.organization.name}</div>
                    </div>
                  )}
                </div>
              )}
            </Card>

            {/* Notifications */}
            <Card hover className="p-4 sm:p-6">
              <h3 className="font-bold text-neutral-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                Notifications
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-auto">
                  XX
                </span>
              </h3>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="p-2 sm:p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium text-blue-800">Nouveau séjour assigné</div>
                  <div className="text-xs text-blue-600 mt-1">Il y a 2 heures</div>
                </div>
                
                <div className="p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium text-green-800">Évaluation positive</div>
                  <div className="text-xs text-green-600 mt-1">Hier</div>
                </div>
                
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-sm font-medium text-yellow-800">Mise à jour profil</div>
                  <div className="text-xs text-yellow-600 mt-1">Il y a 3 jours</div>
                </div>
              </div>
            </Card>
            
          </div>
        </div>
      </div>
    </div>
  )
}

// Composant pour la gestion des animateurs (directeurs uniquement)
const AnimateursModule = () => {
  const [animateurs, setAnimateurs] = React.useState<any[]>([])
  const [form, setForm] = React.useState({ firstName:'', lastName:'', email:'', password:'' })
  const [showForm, setShowForm] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const getAuthHeaders = (): Record<string, string> => {
    const token = localStorage.getItem('auth_token')
    return token ? { 'Authorization': `Bearer ${token}` } : {}
  }

  const load = async () => {
    const headers = { ...getAuthHeaders() }
    const res = await fetch(apiUrl('/api/users/animateurs'), { credentials: 'include', headers })
    if (res.ok) setAnimateurs((await res.json()).animateurs)
  }
  
  React.useEffect(() => { load() }, [])

  const create = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const headers = { 'Content-Type':'application/json', ...getAuthHeaders() }
      const res = await fetch(apiUrl('/api/users/animateurs'), { 
        method:'POST', 
        credentials:'include', 
        headers, 
        body: JSON.stringify(form) 
      })
      if (res.ok) { 
        setForm({firstName:'', lastName:'', email:'', password:''})
        setShowForm(false)
        load() 
      }
    } finally {
      setLoading(false)
    }
  }
  
  const remove = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet animateur ?')) {
      const headers = { ...getAuthHeaders() }
      await fetch(apiUrl(`/api/users/animateurs/${id}`), { method:'DELETE', credentials:'include', headers })
      load()
    }
  }

  return (
    <Card className="p-4 sm:p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-neutral-800 flex items-center gap-2">
          <Users className="w-5 h-5 text-green-600" />
          Mes animateurs
        </h2>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Ajouter
        </button>
      </div>
      
      {showForm && (
        <Card gradient className="p-4 mb-4 border-green-200">
          <h3 className="font-medium mb-4 text-neutral-800">Nouvel animateur</h3>
          <form onSubmit={create} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input 
                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm" 
                placeholder="Prénom" 
                value={form.firstName} 
                onChange={e=>setForm({...form, firstName:e.target.value})} 
                required
              />
              <input 
                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm" 
                placeholder="Nom" 
                value={form.lastName} 
                onChange={e=>setForm({...form, lastName:e.target.value})} 
                required
              />
            </div>
            <input 
              className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm" 
              placeholder="Email" 
              type="email"
              value={form.email} 
              onChange={e=>setForm({...form, email:e.target.value})} 
              required
            />
            <input 
              className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm" 
              placeholder="Mot de passe temporaire" 
              type="password" 
              value={form.password} 
              onChange={e=>setForm({...form, password:e.target.value})} 
              required
            />
            <div className="flex gap-3">
              <button 
                type="submit" 
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 text-sm"
              >
                {loading ? 'Création...' : 'Créer'}
              </button>
              <button 
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-neutral-200 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-300 transition-colors font-medium text-sm"
              >
                Annuler
              </button>
            </div>
          </form>
        </Card>
      )}
      
      <div className="space-y-3">
        {animateurs.length === 0 ? (
          <div className="text-center py-6 text-neutral-500">
            <Users className="w-10 h-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Aucun animateur dans votre équipe</p>
          </div>
        ) : (
          animateurs.map(animateur => (
            <Card key={animateur.id} hover className="p-3">
              <div className="flex items-center gap-3">
                <Avatar 
                  src={animateur.avatar} 
                  alt={`${animateur.firstName} ${animateur.lastName}`}
                  size="sm"
                />
                <div className="flex-1">
                  <div className="font-medium text-neutral-800 text-sm">
                    {animateur.firstName} {animateur.lastName}
                  </div>
                  <div className="text-xs text-neutral-600">{animateur.email}</div>
                  <Badge role="ANIMATEUR" className="mt-1" />
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-neutral-500 hover:text-green-600 hover:bg-green-50 rounded transition-colors">
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => remove(animateur.id)}
                    className="p-1.5 text-neutral-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </Card>
  )
}

export default DashboardEquipe
