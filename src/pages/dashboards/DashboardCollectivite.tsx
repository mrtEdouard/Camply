import { useAuth } from '../../auth/AuthContext'
import React, { useEffect, useState } from 'react'
import { Users, Calendar, Settings, Plus, Trash2, Edit2, Crown, Building2, TrendingUp, UserPlus } from 'lucide-react'
import Avatar from '../../components/ui/Avatar'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { apiUrl } from '../../config/api'

const DashboardCollectivite = () => {
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="xl" text="Chargement administration..." />
      </div>
    )
  }
  
  if (!user || user.role !== 'COLLECTIVITE') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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
    <div className="min-h-screen bg-gray-50">
      {/* Header administrateur */}
      <div className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <Avatar 
                src={user.avatar} 
                alt={`${user.firstName} {user.lastName}`}
                size="xl"
                showUpload={true}
                onUpload={uploadAvatar}
                className="ring-4 ring-white/20"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mx-auto sm:mx-0" />
                <h1 className="text-lg sm:text-xl lg:text-3xl font-bold">
                  Administration - {user.firstName} {user.lastName}
                </h1>
              </div>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg">
                Gérez votre collectivité, vos équipes et vos séjours
              </p>
            </div>
            <div className="text-center sm:text-right flex-shrink-0">
              <Badge role={user.role} />
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Stats overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card gradient hover className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">XX</div>
                <div className="text-xs sm:text-sm text-neutral-600">Directeurs</div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +XX ce mois
            </div>
          </Card>
          
          <Card gradient hover className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">XX</div>
                <div className="text-xs sm:text-sm text-neutral-600">Animateurs</div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +XX ce mois
            </div>
          </Card>
          
          <Card gradient hover className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">XX</div>
                <div className="text-xs sm:text-sm text-neutral-600">Séjours actifs</div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-2 text-xs text-blue-600 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              XX cette semaine
            </div>
          </Card>
          
          <Card gradient hover className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-neutral-800">XX</div>
                <div className="text-xs sm:text-sm text-neutral-600">Enfants inscrits</div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +XX ce mois
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Profil de la collectivité */}
          <Card gradient className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
              <h2 className="font-bold text-neutral-800 flex items-center gap-2 text-sm sm:text-base">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                Profil Collectivité
              </h2>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium self-start sm:self-auto"
              >
                {isEditing ? 'Annuler' : 'Modifier'}
              </button>
            </div>
            
            {isEditing ? (
              <div className="space-y-4">
                <input 
                  type="text"
                  placeholder="Prénom"
                  value={profileForm.firstName}
                  onChange={(e) => setProfileForm({...profileForm, firstName: e.target.value})}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input 
                  type="text"
                  placeholder="Nom"
                  value={profileForm.lastName}
                  onChange={(e) => setProfileForm({...profileForm, lastName: e.target.value})}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button 
                  onClick={handleSaveProfile}
                  className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Sauvegarder
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-neutral-500">Administrateur</div>
                  <div className="font-medium text-lg">{user.firstName} {user.lastName}</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Email</div>
                  <div className="font-medium">{user.email}</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Statut</div>
                  <Badge role={user.role} className="text-xs" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Plan</div>
                  <div className="font-medium text-green-600">Gratuit</div>
                </div>
              </div>
            )}
          </Card>

          {/* Module équipe */}
          <EquipeModule />
          
          {/* Module séjours */}
          <SejoursModule />
        </div>
      </div>
    </div>
  )
}

const EquipeModule = () => {
  const { user } = useAuth()
  const [list, setList] = React.useState<any[]>([])
  const [form, setForm] = React.useState({ firstName:'', lastName:'', email:'', password:'' })
  const [showForm, setShowForm] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const load = async () => {
    const res = await fetch(apiUrl('/api/users/directors'), { credentials: 'include' })
    if (res.ok) setList((await res.json()).directors)
  }
  React.useEffect(() => { load() }, [])

  const create = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(apiUrl('/api/users/directors'), { 
        method:'POST', 
        credentials:'include', 
        headers:{'Content-Type':'application/json'}, 
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
    if (confirm('Êtes-vous sûr de vouloir supprimer ce directeur ?')) {
      await fetch(apiUrl(`/api/users/directors/${id}`), { method:'DELETE', credentials:'include' })
      load()
    }
  }

  if (!user) return null
  
  return (
    <Card className="p-6 lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-neutral-800 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary-600" />
          Gestion de l'équipe
        </h2>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Ajouter directeur
        </button>
      </div>
      
      {showForm && (
        <Card gradient className="p-4 mb-6 border-primary-200">
          <h3 className="font-medium mb-4 text-neutral-800">Nouveau directeur</h3>
          <form onSubmit={create} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                placeholder="Prénom" 
                value={form.firstName} 
                onChange={e=>setForm({...form, firstName:e.target.value})} 
                required
              />
              <input 
                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                placeholder="Nom" 
                value={form.lastName} 
                onChange={e=>setForm({...form, lastName:e.target.value})} 
                required
              />
            </div>
            <input 
              className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
              placeholder="Email" 
              type="email"
              value={form.email} 
              onChange={e=>setForm({...form, email:e.target.value})} 
              required
            />
            <input 
              className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
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
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium disabled:opacity-50"
              >
                {loading ? 'Création...' : 'Créer le directeur'}
              </button>
              <button 
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-neutral-200 text-neutral-700 px-6 py-2 rounded-lg hover:bg-neutral-300 transition-colors font-medium"
              >
                Annuler
              </button>
            </div>
          </form>
        </Card>
      )}
      
      <div className="space-y-3">
        {list.length === 0 ? (
          <div className="text-center py-8 text-neutral-500">
            <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Aucun directeur pour le moment</p>
            <p className="text-sm">Commencez par ajouter votre premier directeur</p>
          </div>
        ) : (
          list.map(director => (
            <Card key={director.id} hover className="p-4">
              <div className="flex items-center gap-4">
                <Avatar 
                  src={director.avatar} 
                  alt={`${director.firstName} ${director.lastName}`}
                  size="md"
                />
                <div className="flex-1">
                  <div className="font-medium text-neutral-800">
                    {director.firstName} {director.lastName}
                  </div>
                  <div className="text-sm text-neutral-600">{director.email}</div>
                  <Badge role="DIRECTEUR" className="mt-1" />
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-neutral-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => remove(director.id)}
                    className="p-2 text-neutral-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
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

const SejoursModule = () => (
  <Card className="p-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-bold text-neutral-800 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-primary-600" />
        Séjours
      </h2>
      <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
        <Plus className="w-4 h-4" />
        Nouveau
      </button>
    </div>
    
    <div className="space-y-4">
      {/* Séjour exemple */}
      <Card hover className="p-4 border-green-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-neutral-800">Séjour d'été 2024</h3>
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
            Planifié
          </span>
        </div>
        <div className="text-sm text-neutral-600 space-y-1">
          <div>📅 XX-XX Juillet 2024</div>
          <div>📍 Centre XX</div>
          <div>👥 XX/XX inscrits</div>
        </div>
      </Card>
      
      <div className="text-center py-6">
        <Calendar className="w-10 h-10 text-neutral-300 mx-auto mb-2" />
        <p className="text-neutral-500 text-sm">Gestion complète des séjours</p>
        <p className="text-neutral-400 text-xs">Bientôt disponible</p>
      </div>
    </div>
  </Card>
)

export default DashboardCollectivite
