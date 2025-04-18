"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardFooter } from "@/components/dashboard-footer"
import { JobCard } from "@/components/job-card"
import { jobs, searchJobs } from "@/lib/data"

export default function SectorJobsPage() {
  const params = useParams()
  const sector = params.sector as string

  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  // Filtrer les offres par secteur et recherche
  useEffect(() => {
    let result = jobs

    // Filtrer par secteur si ce n'est pas "all"
    if (sector !== "all") {
      const formattedSector = sector.charAt(0).toUpperCase() + sector.slice(1)
      result = result.filter((job) => job.sector.toLowerCase() === formattedSector.toLowerCase())
    }

    // Appliquer la recherche
    if (searchQuery) {
      result = searchJobs(result, searchQuery)
    }

    // Trier les résultats
    result = [...result].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "views") {
        return b.views - a.views
      }
      return 0
    })

    setFilteredJobs(result)
  }, [sector, searchQuery, sortBy])

  // Formater le nom du secteur pour l'affichage
  const getSectorName = () => {
    if (sector === "all") return "Tous les secteurs"
    return sector.charAt(0).toUpperCase() + sector.slice(1)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au tableau de bord
            </Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Offres d'emploi - {getSectorName()}</h1>
          <div className="flex items-center gap-2">
            <Select defaultValue={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Plus récentes</SelectItem>
                <SelectItem value="views">Plus populaires</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher des offres..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
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
        </div>
      </main>

      <DashboardFooter />
    </div>
  )
}
