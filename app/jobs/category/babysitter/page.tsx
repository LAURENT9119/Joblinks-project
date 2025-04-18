import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, ArrowLeft, MapPin, Calendar, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BabysitterPage() {
  // Données simulées pour les offres d'emploi de babysitter
  const jobs = [
    {
      id: 901,
      title: "Babysitter pour enfant de 2 ans",
      location: "plateau, Yaoundé",
      type: "Temps partiel",
      date: "Aujourd'hui",
      employer: "Famille Koné",
      description: "Garde d'un enfant de 2 ans, 3 après-midis par semaine (lundi, mercredi, vendredi) de 14h à 18h.",
    },
    {
      id: 902,
      title: "Nounou à temps plein",
      location: "Madagascar, Yaoundé",
      type: "Temps plein",
      date: "Hier",
      employer: "Famille expatriée",
      description: "Garde de 2 enfants (3 et 5 ans), du lundi au vendredi de 8h à 18h. Logée ou non.",
    },
    {
      id: 903,
      title: "Babysitter pour soirées",
      location: "Plateau, Yaoundé",
      type: "Temps partiel",
      date: "Il y a 2 jours",
      employer: "Famille Diallo",
      description: "Garde d'enfants (7 et 9 ans) occasionnellement en soirée, principalement les weekends.",
    },
    {
      id: 904,
      title: "Nounou pour bébé",
      location: "sous manguie, Yaoundé",
      type: "Temps plein",
      date: "Il y a 3 jours",
      employer: "Jeune couple",
      description:
        "Garde d'un bébé de 6 mois, du lundi au vendredi de 7h30 à 17h30. Expérience avec les nourrissons exigée.",
    },
    {
      id: 905,
      title: "Garde d'enfants après l'école",
      location: "Golf, Yaoundé",
      type: "Temps partiel",
      date: "Il y a 5 jours",
      employer: "Famille Touré",
      description:
        "Récupérer 3 enfants à l'école et les garder jusqu'au retour des parents, du lundi au vendredi de 16h à 19h.",
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
          <h1 className="text-2xl font-bold mb-2">Emplois : Babysitter</h1>
          <p className="text-gray-600">
            Trouvez des opportunités dans la garde d'enfants, le babysitting et les services de nounou
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Rechercher un emploi de babysitter..." />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="location">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Lieu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les lieux</SelectItem>
                  <SelectItem value="Yaoundé">Yaoundé</SelectItem>
                  <SelectItem value="cocody">Cocody</SelectItem>
                  <SelectItem value="riviera">Riviera</SelectItem>
                  <SelectItem value="plateau">Plateau</SelectItem>
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
