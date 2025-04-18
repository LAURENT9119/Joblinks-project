"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, MapPin, Phone, BookmarkIcon, BriefcaseIcon, UserIcon, Search } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardFooter } from "@/components/dashboard-footer"
import { JobCard } from "@/components/job-card"
import { useAuth } from "@/lib/auth"
import { filterJobsBySkills, jobs, searchJobs } from "@/lib/data"

export default function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("jobs")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  // Obtenir les initiales à partir du nom
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // Filtrer les offres en fonction des compétences de l'utilisateur
  useEffect(() => {
    if (user && user.skills.length > 0) {
      setFilteredJobs(filterJobsBySkills(jobs, user.skills))
    } else {
      setFilteredJobs(jobs)
    }
  }, [user])

  // Gérer la recherche
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() === "") {
      // Si la recherche est vide, revenir aux offres filtrées par compétences
      if (user && user.skills.length > 0) {
        setFilteredJobs(filterJobsBySkills(jobs, user.skills))
      } else {
        setFilteredJobs(jobs)
      }
    } else {
      // Sinon, rechercher dans les offres
      setFilteredJobs(searchJobs(jobs, query))
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar / Profile */}
          <div className="w-full md:w-1/3 lg:w-1/4 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mon profil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="h-20 w-20 mb-2">
                    <AvatarFallback className="text-lg bg-blue-100 text-blue-600">
                      {user ? getInitials(user.name) : "JL"}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium text-lg">{user?.name || "Utilisateur"}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {user?.location || "Cameroun"}
                  </p>
                </div>

                <div className="space-y-4">
                  {user?.skills && user.skills.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-1">Compétences</p>
                      <div className="flex flex-wrap gap-1">
                        {user.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-medium mb-1">Contact</p>
                    <p className="text-sm flex items-center gap-1">
                      <Phone className="h-3 w-3" /> {user?.phone || "+237 6XX XX XX XX"}
                    </p>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/profile/edit">Modifier mon profil</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Statistiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <UserIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">Vues du profil</span>
                    </div>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <BriefcaseIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-sm">Candidatures</span>
                    </div>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <BookmarkIcon className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="text-sm">Offres sauvegardées</span>
                    </div>
                    <span className="font-medium">5</span>
                  </div>
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
                  <Input
                    type="text"
                    placeholder={`Rechercher des ${activeTab === "jobs" ? "offres" : activeTab === "applications" ? "candidatures" : "annonces"}`}
                    className="pl-10"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </div>

              <TabsContent value="jobs" className="mt-0 space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                  <Card>
                    <CardContent className="text-center py-12 space-y-4">
                      <div className="bg-gray-100 rounded-full p-4 inline-flex">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500">Aucune offre ne correspond à votre recherche</p>
                      <Button variant="outline" onClick={() => setSearchQuery("")}>
                        Réinitialiser la recherche
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="applications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Mes candidatures</CardTitle>
                    <CardDescription>Suivez l'état de vos candidatures ici</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 space-y-4">
                      <div className="bg-gray-100 rounded-full p-4 inline-flex">
                        <BriefcaseIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500">Vous n'avez pas encore postulé à des offres</p>
                      <Button variant="outline" asChild>
                        <Link href="/jobs/sector/all">Parcourir les offres</Link>
                      </Button>
                    </div>
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
                    <div className="text-center py-12 space-y-4">
                      <div className="bg-gray-100 rounded-full p-4 inline-flex">
                        <BookmarkIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500">Vous n'avez pas encore enregistré d'annonces</p>
                      <Button variant="outline" asChild>
                        <Link href="/jobs/sector/all">Découvrir des offres</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <DashboardFooter />
    </div>
  )
}
