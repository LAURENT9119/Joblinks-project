"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, MessageCircle, Search, Plus, MapPin, Phone, Calendar } from "lucide-react"
import { NotificationBadge } from "@/components/notification-badge"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("jobs")

  // Données simulées pour les offres d'emploi
  const jobs = [
    {
      id: 1,
      title: "Maçon pour construction maison",
      location: "Logpom, Douala",
      type: "Mission",
      date: "Aujourd'hui",
      employer: "Jean Kouassi",
      description: "Recherche maçon expérimenté pour construction d'une maison de 3 chambres. Durée estimée: 2 mois.",
    },
    {
      id: 2,
      title: "Professeur de mathématiques",
      location: "Dakar, Douala",
      type: "Temps partiel",
      date: "Hier",
      employer: "École Excellence",
      description: "Besoin d'un professeur de mathématiques pour cours du soir, niveau lycée. 3 fois par semaine.",
    },
    {
      id: 3,
      title: "Chauffeur personnel",
      location: "Plateau, Yaounde",
      type: "Temps plein",
      date: "Il y a 2 jours",
      employer: "Mme Diallo",
      description:
        "Recherche chauffeur avec permis B, expérience minimum 3 ans. Horaires: 7h-18h du lundi au vendredi.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600">JobLink</h1>
          </div>
          <div className="flex items-center gap-2">
            <NotificationBadge />
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback>KT</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar / Profile */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mon profil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="h-20 w-20 mb-2">
                    <AvatarFallback className="text-lg">KT</AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium text-lg">laurent ML</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Yassa, Douala
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Compétences</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">Maçonnerie</Badge>
                      <Badge variant="outline">Carrelage</Badge>
                      <Badge variant="outline">Peinture</Badge>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-1">Contact</p>
                    <p className="text-sm flex items-center gap-1">
                      <Phone className="h-3 w-3" /> +237 6 XX XX XX XX
                    </p>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/profile/edit">Modifier mon profil</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Tableau de bord</h2>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/dashboard/publier-annonce">
                  <Plus className="h-4 w-4 mr-2" />
                  Publier une annonce
                </Link>
              </Button>
            </div>

            <Tabs defaultValue="jobs" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="jobs">Offres d'emploi</TabsTrigger>
                <TabsTrigger value="applications">Mes candidatures</TabsTrigger>
                <TabsTrigger value="saved">Enregistrés</TabsTrigger>
              </TabsList>

              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={`Rechercher des ${activeTab === "jobs" ? "offres" : activeTab === "applications" ? "candidatures" : "annonces"}`}
                    className="w-full pl-10 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>

              <TabsContent value="jobs" className="mt-0 space-y-4">
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
              </TabsContent>

              <TabsContent value="applications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Mes candidatures</CardTitle>
                    <CardDescription>Suivez l'état de vos candidatures ici</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center py-8 text-gray-500">Vous n'avez pas encore postulé à des offres</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="saved" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Annonces enregistrées</CardTitle>
                    <CardDescription>Retrouvez les offres que vous avez sauvegardées</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center py-8 text-gray-500">Vous n'avez pas encore enregistré d'annonces</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
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
