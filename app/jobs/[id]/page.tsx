"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  BriefcaseBusiness,
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Phone,
  MessageSquare,
  Share2,
  Bookmark,
} from "lucide-react"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // Données simulées pour l'offre d'emploi
  const job = {
    id: params.id,
    title: "Maçon pour construction maison",
    location: "Yassa, Douala",
    type: "Mission",
    date: "Publié aujourd'hui",
    duration: "2 mois",
    salary: "150,000 FCFA / mois",
    employer: "Jean Kouassi",
    phone: "+237 6 XX XX XX XX",
    description:
      "Recherche maçon expérimenté pour construction d'une maison de 3 chambres. Le chantier est situé à Yassa. Le travail comprend la fondation, l'élévation des murs et le coulage de la dalle. Les matériaux sont déjà sur place. Possibilité de logement sur le chantier.",
    requirements: [
      "Minimum 3 ans d'expérience en maçonnerie",
      "Capable de lire des plans de construction",
      "Disponible immédiatement",
      "Références appréciées",
    ],
  }

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
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2">{job.type}</Badge>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {job.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Description</h3>
                    <p className="text-gray-700">{job.description}</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Exigences</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3">
                      <p className="text-sm text-gray-500 mb-1">Durée</p>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <p className="font-medium">{job.duration}</p>
                      </div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <p className="text-sm text-gray-500 mb-1">Rémunération</p>
                      <p className="font-medium">{job.salary}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Employer */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">À propos de l'employeur</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>JK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{job.employer}</h3>
                    <p className="text-gray-500 text-sm">Particulier</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <a href={`tel:${job.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler
                    </a>
                  </Button>

                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={`https://wa.me/${job.phone.replace(/\s+/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>

                  <div className="text-center text-sm text-gray-500 pt-2">
                    <p>Mentionnez JobLink quand vous contactez l'employeur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
