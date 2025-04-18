import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, ArrowLeft, MapPin, Calendar, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DjPage() {
  // Données simulées pour les offres d'emploi de DJ au Cameroun
  const jobs = [
    {
      id: 601,
      title: "DJ pour club",
      location: "Bastos, Yaoundé",
      type: "Temps partiel",
      date: "Aujourd'hui",
      employer: "Club Le Prestige",
      description:
        "Animation musicale les vendredis et samedis soirs, de 22h à 4h. Expérience en musique afro et électro souhaitée.",
    },
    {
      id: 602,
      title: "DJ pour mariage",
      location: "Bonapriso, Douala",
      type: "Mission",
      date: "Hier",
      employer: "Agence Événementielle Cameroun",
      description: "Animation d'un mariage le 15 juin. Répertoire varié demandé, matériel fourni.",
    },
    {
      id: 603,
      title: "DJ résident pour restaurant",
      location: "Bonamoussadi, Douala",
      type: "Temps partiel",
      date: "Il y a 2 jours",
      employer: "Restaurant La Terrasse",
      description: "Animation musicale les jeudis, vendredis et samedis soirs. Ambiance lounge et afrobeat.",
    },
    {
      id: 604,
      title: "DJ pour radio",
      location: "Mvan, Yaoundé",
      type: "Temps plein",
      date: "Il y a 3 jours",
      employer: "Radio Jeunesse Cameroun",
      description: "Animation d'émissions musicales quotidiennes. Connaissance de la scène musicale locale exigée.",
    },
    {
      id: 605,
      title: "DJ pour événements d'entreprise",
      location: "Douala et environs",
      type: "Mission",
      date: "Il y a 5 jours",
      employer: "Agence Corporate Events",
      description: "Animation de soirées d'entreprise et séminaires. Missions ponctuelles bien rémunérées.",
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
          <h1 className="text-2xl font-bold mb-2">Emplois : DJ</h1>
          <p className="text-gray-600">
            Trouvez des opportunités dans l'animation musicale, les clubs et les événements
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Rechercher un emploi de DJ..." />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="location">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Lieu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les lieux</SelectItem>
                  <SelectItem value="yaounde">Yaoundé</SelectItem>
                  <SelectItem value="douala">Douala</SelectItem>
                  <SelectItem value="bastos">Bastos</SelectItem>
                  <SelectItem value="bonapriso">Bonapriso</SelectItem>
                  <SelectItem value="bonamoussadi">Bonamoussadi</SelectItem>
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
