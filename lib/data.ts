// Types
export type UserRole = "jobseeker" | "employer"

export interface User {
  id: string
  name: string
  phone: string
  email?: string
  location: string
  role: UserRole
  avatar?: string
  skills: string[]
  bio?: string
  experience?: string[]
  education?: string[]
  createdAt: Date
}

export interface Job {
  id: string
  title: string
  location: string
  type: "Temps plein" | "Temps partiel" | "Mission" | "Saisonnier"
  category: string
  sector: string
  date: Date
  employer: string
  employerId: string
  description: string
  requirements?: string
  salary?: string
  duration?: string
  views: number
  applications: number
}

export interface Notification {
  id: string
  type: "message" | "application" | "view" | "job"
  title: string
  content: string
  sender: string
  senderAvatar: string
  date: Date
  read: boolean
}

// Données simulées pour le Cameroun
export const cameroonCities = [
  "Yaoundé",
  "Douala",
  "Garoua",
  "Bamenda",
  "Maroua",
  "Bafoussam",
  "Ngaoundéré",
  "Bertoua",
  "Loum",
  "Kumba",
  "Edéa",
  "Kumbo",
  "Foumban",
  "Nkongsamba",
  "Dschang",
  "Limbé",
  "Ebolowa",
  "Kousséri",
  "Buea",
  "Kribi",
]

export const cameroonianNames = [
  "Nkeng Jean",
  "Mbarga Marie",
  "Atangana Paul",
  "Ngo Nkotto Sophie",
  "Kamdem Pierre",
  "Ebongue Jeanne",
  "Fochive Michel",
  "Nana Marthe",
  "Tchinda Joseph",
  "Meka Pauline",
  "Essomba François",
  "Ndongo Carine",
  "Biya Robert",
  "Ngo Bisseck Hélène",
  "Mballa Thomas",
  "Ekambi Christine",
  "Nsom Daniel",
  "Eyenga Jacqueline",
  "Fouda Samuel",
  "Mendo Béatrice",
]

// Données utilisateurs
export const users: User[] = [
  {
    id: "user1",
    name: "Nkeng Jean",
    phone: "+237 6XX XX XX XX",
    email: "nkeng.jean@example.com",
    location: "Douala, Cameroun",
    role: "jobseeker",
    skills: ["Maçonnerie", "Carrelage", "Peinture"],
    bio: "Maçon expérimenté avec 5 ans d'expérience dans la construction résidentielle.",
    experience: ["Maçon chez Bati-Plus (2018-2022)", "Ouvrier chez Construct-CM (2016-2018)"],
    education: ["CAP Maçonnerie, Lycée Technique de Douala"],
    createdAt: new Date("2022-05-15"),
  },
  {
    id: "user2",
    name: "Mbarga Marie",
    phone: "+237 6XX XX XX XX",
    email: "mbarga.marie@example.com",
    location: "Yaoundé, Cameroun",
    role: "employer",
    bio: "Propriétaire d'une entreprise de construction spécialisée dans les villas résidentielles.",
    createdAt: new Date("2021-11-03"),
    skills: [],
  },
]

// Données des offres d'emploi
export const jobs: Job[] = [
  {
    id: "job1",
    title: "Maçon pour construction villa",
    location: "Douala, Cameroun",
    type: "Mission",
    category: "Maçon",
    sector: "Artisanat",
    date: new Date("2023-06-15"),
    employer: "Mbarga Marie",
    employerId: "user2",
    description:
      "Recherche maçon expérimenté pour construction d'une villa de 3 chambres à Bonanjo. Le chantier est situé dans un quartier résidentiel. Le travail comprend la fondation, l'élévation des murs et le coulage de la dalle. Les matériaux sont déjà sur place. Possibilité de logement sur le chantier.",
    requirements: "Minimum 3 ans d'expérience en maçonnerie. Capable de lire des plans de construction.",
    salary: "150,000 FCFA / mois",
    duration: "2 mois",
    views: 45,
    applications: 8,
  },
  {
    id: "job2",
    title: "Professeur de mathématiques",
    location: "Yaoundé, Cameroun",
    type: "Temps partiel",
    category: "Professeur",
    sector: "Éducation",
    date: new Date("2023-06-14"),
    employer: "Lycée Bilingue d'Etoudi",
    employerId: "employer1",
    description:
      "Besoin d'un professeur de mathématiques pour cours du soir, niveau lycée. 3 fois par semaine, de 17h à 19h. Préparation aux examens du Baccalauréat.",
    requirements: "Licence en mathématiques ou équivalent. Expérience dans l'enseignement souhaitée.",
    salary: "25,000 FCFA / semaine",
    duration: "Année scolaire",
    views: 32,
    applications: 5,
  },
  {
    id: "job3",
    title: "Chauffeur personnel",
    location: "Douala, Cameroun",
    type: "Temps plein",
    category: "Chauffeur",
    sector: "Services",
    date: new Date("2023-06-13"),
    employer: "Ngo Nkotto Sophie",
    employerId: "employer2",
    description:
      "Recherche chauffeur avec permis B, expérience minimum 3 ans. Horaires: 7h-18h du lundi au vendredi. Conduite en ville et occasionnellement sur de longues distances.",
    requirements: "Permis B obligatoire. Bonne connaissance de la ville. Discrétion et ponctualité exigées.",
    salary: "120,000 FCFA / mois",
    duration: "Indéterminée",
    views: 67,
    applications: 12,
  },
  {
    id: "job4",
    title: "Femme de ménage pour villa",
    location: "Yaoundé, Cameroun",
    type: "Temps plein",
    category: "Femme de ménage",
    sector: "Services",
    date: new Date("2023-06-12"),
    employer: "Atangana Paul",
    employerId: "employer3",
    description:
      "Ménage quotidien, lessive et repassage pour une famille de 4 personnes. Logée ou non. Quartier Bastos.",
    requirements: "Expérience préalable. Références exigées.",
    salary: "80,000 FCFA / mois",
    duration: "Indéterminée",
    views: 53,
    applications: 15,
  },
  {
    id: "job5",
    title: "Ouvrier agricole pour plantation de cacao",
    location: "Ebolowa, Cameroun",
    type: "Saisonnier",
    category: "Agriculteur",
    sector: "Agriculture",
    date: new Date("2023-06-11"),
    employer: "Coopérative Agricole du Sud",
    employerId: "employer4",
    description: "Recherche 5 ouvriers pour la récolte de cacao. Expérience souhaitée. Logement possible sur place.",
    requirements: "Bonne condition physique. Expérience en agriculture appréciée.",
    salary: "3,000 FCFA / jour",
    duration: "3 mois",
    views: 41,
    applications: 9,
  },
  {
    id: "job6",
    title: "Graphiste pour agence de communication",
    location: "Douala, Cameroun",
    type: "Temps plein",
    category: "Graphiste",
    sector: "Numérique",
    date: new Date("2023-06-10"),
    employer: "Créative Agency",
    employerId: "employer5",
    description: "Création de supports visuels pour clients variés. Maîtrise de la suite Adobe exigée.",
    requirements: "Maîtrise de Photoshop, Illustrator et InDesign. Portfolio à présenter.",
    salary: "200,000 FCFA / mois",
    duration: "Indéterminée",
    views: 38,
    applications: 7,
  },
  {
    id: "job7",
    title: "DJ pour club",
    location: "Douala, Cameroun",
    type: "Temps partiel",
    category: "DJ",
    sector: "Numérique",
    date: new Date("2023-06-09"),
    employer: "Le VIP Club",
    employerId: "employer6",
    description:
      "Animation musicale les vendredis et samedis soirs, de 22h à 4h. Expérience en musique afro et électro souhaitée.",
    requirements: "Expérience préalable comme DJ. Connaissance des tendances musicales actuelles.",
    salary: "15,000 FCFA / soirée",
    duration: "Indéterminée",
    views: 29,
    applications: 6,
  },
  {
    id: "job8",
    title: "Plombier pour rénovation immeuble",
    location: "Yaoundé, Cameroun",
    type: "Mission",
    category: "Plombier",
    sector: "Artisanat",
    date: new Date("2023-06-08"),
    employer: "Immobilier Plus",
    employerId: "employer7",
    description: "Rénovation complète des réseaux sanitaires d'un immeuble de 5 étages. Durée: 3 mois.",
    requirements: "Expérience en plomberie d'immeubles. Outils personnels nécessaires.",
    salary: "250,000 FCFA / mois",
    duration: "3 mois",
    views: 34,
    applications: 4,
  },
  {
    id: "job9",
    title: "Babysitter pour enfants",
    location: "Douala, Cameroun",
    type: "Temps partiel",
    category: "Babysitter",
    sector: "Services",
    date: new Date("2023-06-07"),
    employer: "Famille Kamdem",
    employerId: "employer8",
    description: "Garde d'enfants (7 et 9 ans) après l'école, de 15h à 19h, du lundi au vendredi.",
    requirements: "Expérience avec les enfants. Patience et bienveillance.",
    salary: "60,000 FCFA / mois",
    duration: "Année scolaire",
    views: 47,
    applications: 11,
  },
]

// Notifications
export const notifications: Notification[] = [
  {
    id: "notif1",
    type: "message",
    title: "Nouveau message",
    content: "Bonjour, je suis intéressé par votre profil. Êtes-vous disponible pour un entretien?",
    sender: "Mbarga Marie",
    senderAvatar: "MM",
    date: new Date("2023-06-15T10:30:00"),
    read: false,
  },
  {
    id: "notif2",
    type: "application",
    title: "Nouvelle candidature",
    content: "Quelqu'un a postulé à votre offre 'Maçon pour construction villa'",
    sender: "Atangana Paul",
    senderAvatar: "AP",
    date: new Date("2023-06-15T08:45:00"),
    read: false,
  },
  {
    id: "notif3",
    type: "view",
    title: "Votre profil a été consulté",
    content: "Entreprise de construction a consulté votre profil",
    sender: "Bati-Plus",
    senderAvatar: "BP",
    date: new Date("2023-06-14T16:20:00"),
    read: true,
  },
  {
    id: "notif4",
    type: "job",
    title: "Nouvelle offre d'emploi",
    content: "Une nouvelle offre correspond à votre profil: 'Chauffeur personnel'",
    sender: "JobLink",
    senderAvatar: "JL",
    date: new Date("2023-06-13T14:10:00"),
    read: true,
  },
]

// Fonction pour formater les dates
export function formatDate(date: Date): string {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) {
    return "Aujourd'hui"
  } else if (diffDays === 1) {
    return "Hier"
  } else if (diffDays < 7) {
    return `Il y a ${diffDays} jours`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `Il y a ${weeks} semaine${weeks > 1 ? "s" : ""}`
  } else {
    const months = Math.floor(diffDays / 30)
    return `Il y a ${months} mois`
  }
}

// Fonction pour filtrer les offres par compétences
export function filterJobsBySkills(jobs: Job[], skills: string[]): Job[] {
  if (!skills.length) return jobs

  return jobs.sort((a, b) => {
    const aMatch = skills.some(
      (skill) =>
        a.title.toLowerCase().includes(skill.toLowerCase()) ||
        a.description.toLowerCase().includes(skill.toLowerCase()) ||
        (a.requirements && a.requirements.toLowerCase().includes(skill.toLowerCase())),
    )

    const bMatch = skills.some(
      (skill) =>
        b.title.toLowerCase().includes(skill.toLowerCase()) ||
        b.description.toLowerCase().includes(skill.toLowerCase()) ||
        (b.requirements && b.requirements.toLowerCase().includes(skill.toLowerCase())),
    )

    if (aMatch && !bMatch) return -1
    if (!aMatch && bMatch) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

// Fonction pour rechercher des offres
export function searchJobs(jobs: Job[], query: string): Job[] {
  if (!query) return jobs

  const searchTerms = query.toLowerCase().split(" ")

  return jobs.filter((job) => {
    const searchableText =
      `${job.title} ${job.location} ${job.description} ${job.requirements || ""} ${job.employer} ${job.category} ${job.sector}`.toLowerCase()

    return searchTerms.every((term) => searchableText.includes(term))
  })
}
