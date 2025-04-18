import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, ArrowLeft, MapPin, Calendar, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NumeriquePage() {
  // Données simulées pour les offres d'emploi dans le secteur numérique au Cameroun
  const jobs = [
    {
      id: 501,
      title: "Graphiste pour agence de communication",
      location: "Bastos, Yaoundé",
      type: "Temps plein",
      date: "Aujourd'hui",
      employer: "Agence Créative Cameroun",
      description: "Création de supports visuels pour clients variés. Maîtrise de la suite Adobe exigée.",
    },
    {
      id: 502,
      title: "Développeur web",
      location: "Bonamoussadi, Douala",
      type: "Temps plein",
      date: "Aujourd'hui",
      employer: "Tech Solutions Cameroun",
      description: "Développement de sites et applications web. Compétences en PHP, JavaScript et frameworks modernes.",
    },
    {
      id: 503,
      title: "Community Manager",
      location: "Bonapriso, Douala",
      type: "Temps plein",
      date: "Hier",
      employer: "Agence digitale Connecté",
      description: "Gestion des réseaux sociaux pour plusieurs clients. Expérience et créativité requises.",
    },
    {
      id: 504,
      title: "Technicien informatique",
      location: "Essos, Yaoundé",
      type: "Temps plein",
      date: "Il y a 2 jours",
      employer: "IT Support & Services Cameroun",
      description: "Dépannage et maintenance informatique pour entreprises. Permis B et véhicule souhaités.",
    },
    {
      id: 505,
      title: "Consultant SEO",
      location: "Travail à distance",
      type: "Freelance",
      date: "Il y a 2 jours",
      employer: "Agence Web Premium Cameroun",
      description: "Optimisation de sites web pour les moteurs de recherche. Facturation à la mission ou au forfait.",
    },
    {
      id: 506,
      title: "Data Analyst",
      location: "Bonapriso, Douala",
      type: "Temps plein",
      date: "Il y a 3 jours",
      employer: "Banque Atlantique Cameroun",
      description: "Analyse de données clients et reporting. Compétences en Excel, SQL et outils de visualisation.",
    },
    {
      id: 507,
      title: "Gestionnaire e-commerce",
      location: "Kribi, Sud",
      type: "Temps plein",
      date: "Il y a 4 jours",
      employer: "Marketplace Africa Cameroun",
      description: "Gestion d'une boutique en ligne. Mise en ligne des produits, suivi des commandes et SAV.",
    },
    {
      id: 508,
      title: "DJ animateur pour radio en ligne",
      location: "Mvan, Yaoundé",
      type: "Temps partiel",
      date: "Il y a 5 jours",
      employer: "Radio Urban Beat Cameroun",
      description: "Animation d'émissions musicales sur radio web. Connaissance de la scène musicale locale exigée.",
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
          <h1 className="text-2xl font-bold mb-2">Secteur : Numérique</h1>
          <p className="text-gray-600">
            Découvrez toutes les opportunités dans le digital, l'informatique et les nouvelles technologies
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Rechercher un emploi dans le numérique..." />
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
                  <SelectItem value="kribi">Kribi</SelectItem>
                  <SelectItem value="remote">Travail à distance</SelectItem>
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
                  <SelectItem value="freelance">Freelance</SelectItem>
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
