import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, ArrowLeft, MapPin, Calendar, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AllJobsPage() {
  // Données simulées pour les offres d'emploi de tous les secteurs
  const jobs = [
    {
      id: 101,
      title: "Ouvrier agricole pour récolte de cacao",
      location: "Daloa, Côte d'Ivoire",
      type: "Saisonnier",
      date: "Aujourd'hui",
      employer: "Plantation Kouassi",
      category: "Agriculture",
      description: "Recherche 5 ouvriers pour la récolte de cacao. Expérience souhaitée. Logement possible sur place.",
    },
    {
      id: 201,
      title: "Maçon pour construction villa",
      location: "Cocody, Abidjan",
      type: "Mission",
      date: "Aujourd'hui",
      employer: "Cabinet d'architecture Moderne",
      category: "Artisanat",
      description: "Construction d'une villa de luxe. Expérience en finitions haut de gamme exigée. Durée: 4 mois.",
    },
    {
      id: 301,
      title: "Femme de ménage pour villa",
      location: "Riviera, Abidjan",
      type: "Temps plein",
      date: "Aujourd'hui",
      employer: "Famille Diallo",
      category: "Services",
      description: "Ménage quotidien, lessive et repassage pour une famille de 4 personnes. Logée ou non.",
    },
    {
      id: 401,
      title: "Professeur de mathématiques",
      location: "Cocody, Abidjan",
      type: "Temps plein",
      date: "Hier",
      employer: "Lycée Excellence",
      category: "Éducation",
      description: "Enseignement des mathématiques pour les classes de seconde, première et terminale. Diplôme requis.",
    },
    {
      id: 501,
      title: "Graphiste pour agence de communication",
      location: "Plateau, Abidjan",
      type: "Temps plein",
      date: "Hier",
      employer: "Agence Créative",
      category: "Numérique",
      description: "Création de supports visuels pour clients variés. Maîtrise de la suite Adobe exigée.",
    },
    {
      id: 801,
      title: "Chauffeur personnel",
      location: "Cocody, Abidjan",
      type: "Temps plein",
      date: "Il y a 2 jours",
      employer: "Famille expatriée",
      category: "Services",
      description: "Transport quotidien pour une famille. Horaires: 7h-19h, du lundi au samedi. Permis B exigé.",
    },
    {
      id: 702,
      title: "Plombier dépanneur",
      location: "Abidjan et environs",
      type: "Temps plein",
      date: "Il y a 3 jours",
      employer: "SOS Plomberie",
      category: "Artisanat",
      description: "Interventions d'urgence chez les particuliers. Véhicule de service fourni. Astreintes rémunérées.",
    },
    {
      id: 903,
      title: "Babysitter pour soirées",
      location: "Plateau, Abidjan",
      type: "Temps partiel",
      date: "Il y a 3 jours",
      employer: "Famille Diallo",
      category: "Services",
      description: "Garde d'enfants (7 et 9 ans) occasionnellement en soirée, principalement les weekends.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600">JobLink</h1>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Tous les emplois</h1>
          <p className="text-gray-600">Découvrez toutes les opportunités disponibles sur JobLink</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Rechercher un emploi..." />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="location">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Lieu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les lieux</SelectItem>
                  <SelectItem value="abidjan">Abidjan</SelectItem>
                  <SelectItem value="cocody">Cocody</SelectItem>
                  <SelectItem value="plateau">Plateau</SelectItem>
                  <SelectItem value="yopougon">Yopougon</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="category">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Secteur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les secteurs</SelectItem>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="artisanat">Artisanat</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="education">Éducation</SelectItem>
                  <SelectItem value="numerique">Numérique</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="type">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="fulltime">Temps plein</SelectItem>
                  <SelectItem value="parttime">Temps partiel</SelectItem>
                  <SelectItem value="mission">Mission</SelectItem>
                  <SelectItem value="seasonal">Saisonnier</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <Link href={`/jobs/${job.id}`} className="block p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-lg">{job.title}</h3>
                      <div className="flex items-center gap-3">
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </p>
                        <p className="text-blue-600 text-sm">{job.category}</p>
                      </div>
                    </div>
                    <Badge>{job.type}</Badge>
                  </div>
                  <p className="text-sm mb-3">{job.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {job.date}
                    </span>
                    <span className="font-medium">{job.employer}</span>
                  </div>
                </Link>
                <div className="border-t p-3 bg-gray-50 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/jobs/${job.id}`}>Voir détails</Link>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Contacter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="outline" className="mr-2">
            Précédent
          </Button>
          <Button variant="outline">Suivant</Button>
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2025 JobLink</p>
            <div className="flex gap-4">
              <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
                À propos
              </Link>
              <Link href="/help" className="text-sm text-gray-600 hover:text-blue-600">
                Aide
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
