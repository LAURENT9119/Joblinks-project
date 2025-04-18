import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, ArrowLeft, MapPin, Calendar, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FemmeDeMenagePage() {
  // Données simulées pour les offres d'emploi de femme de ménage
  const jobs = [
    {
      id: 301,
      title: "Femme de ménage pour villa",
      location: "Riviera, Abidjan",
      type: "Temps plein",
      date: "Aujourd'hui",
      employer: "Famille Diallo",
      description: "Ménage quotidien, lessive et repassage pour une famille de 4 personnes. Logée ou non.",
    },
    {
      id: 302,
      title: "Femme de ménage pour bureau",
      location: "Plateau, Abidjan",
      type: "Temps partiel",
      date: "Hier",
      employer: "Cabinet d'avocats",
      description: "Nettoyage de bureaux 3 fois par semaine, le soir après 18h. Expérience exigée.",
    },
    {
      id: 303,
      title: "Femme de ménage pour hôtel",
      location: "Marcory, Abidjan",
      type: "Temps plein",
      date: "Il y a 2 jours",
      employer: "Hôtel Prestige",
      description: "Nettoyage des chambres et parties communes. Horaires: 7h-15h, 6 jours sur 7.",
    },
    {
      id: 304,
      title: "Femme de ménage pour résidence",
      location: "Cocody, Abidjan",
      type: "Temps partiel",
      date: "Il y a 3 jours",
      employer: "Résidence Les Palmiers",
      description: "Entretien des parties communes d'une résidence de 20 appartements. 3 jours par semaine.",
    },
    {
      id: 305,
      title: "Femme de ménage pour restaurant",
      location: "Zone 4, Abidjan",
      type: "Temps plein",
      date: "Il y a 4 jours",
      employer: "Restaurant Le Gourmet",
      description: "Nettoyage de la salle et de la cuisine après service. Horaires: 15h-23h, 6 jours sur 7.",
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
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Emplois : Femme de ménage</h1>
          <p className="text-gray-600">
            Trouvez des opportunités dans le nettoyage, l'entretien et les services domestiques
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Rechercher un emploi de femme de ménage..." />
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
                  <SelectItem value="marcory">Marcory</SelectItem>
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
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </p>
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
