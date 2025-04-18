"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Calendar, Building2, Phone, Mail, ArrowLeft, Share2, BookmarkPlus, Send, Loader2 } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardFooter } from "@/components/dashboard-footer"
import { jobs, formatDate } from "@/lib/data"
import { toast } from "@/hooks/use-toast"

export default function JobDetailsPage() {
  const params = useParams()
  const jobId = params.id as string

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  // Trouver l'offre correspondante
  const job = jobs.find((j) => j.id === jobId)

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <DashboardHeader />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Offre non trouvée</h1>
            <p className="text-gray-500 mb-6">L'offre que vous recherchez n'existe pas ou a été supprimée.</p>
            <Button asChild>
              <Link href="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au tableau de bord
              </Link>
            </Button>
          </div>
        </main>
        <DashboardFooter />
      </div>
    )
  }

  const handleSendMessage = () => {
    setIsLoading(true)

    // Simuler l'envoi du message
    setTimeout(() => {
      setIsLoading(false)
      setMessage("")

      toast({
        title: "Message envoyé",
        description: "Votre message a été envoyé avec succès à l'employeur.",
      })
    }, 1500)
  }

  const handleSaveJob = () => {
    toast({
      title: "Offre enregistrée",
      description: "Cette offre a été ajoutée à vos favoris.",
    })
  }

  const handleShareJob = () => {
    // Copier le lien dans le presse-papier
    navigator.clipboard.writeText(window.location.href)

    toast({
      title: "Lien copié",
      description: "Le lien de l'offre a été copié dans le presse-papier.",
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux offres
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Détails de l'offre */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Publié {formatDate(job.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{job.employer}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="ml-2">{job.type}</Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">{job.sector}</Badge>
                  <Badge variant="outline">{job.category}</Badge>
                </div>

                <Tabs defaultValue="description" className="mt-6">
                  <TabsList>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="requirements">Exigences</TabsTrigger>
                    <TabsTrigger value="details">Détails</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-4">
                    <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                  </TabsContent>
                  <TabsContent value="requirements" className="mt-4">
                    <p className="text-gray-700 whitespace-pre-line">
                      {job.requirements || "Aucune exigence spécifique mentionnée."}
                    </p>
                  </TabsContent>
                  <TabsContent value="details" className="mt-4">
                    <div className="space-y-4">
                      {job.salary && (
                        <div>
                          <h3 className="font-medium">Rémunération</h3>
                          <p className="text-gray-700">{job.salary}</p>
                        </div>
                      )}
                      {job.duration && (
                        <div>
                          <h3 className="font-medium">Durée</h3>
                          <p className="text-gray-700">{job.duration}</p>
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium">Statistiques</h3>
                        <p className="text-gray-700">
                          {job.views} vues · {job.applications} candidatures
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-wrap gap-2 mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Send className="mr-2 h-4 w-4" />
                          Contacter l'employeur
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Contacter l'employeur</DialogTitle>
                          <DialogDescription>
                            Envoyez un message à {job.employer} concernant l'offre "{job.title}"
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="message">Votre message</Label>
                            <Textarea
                              id="message"
                              placeholder="Présentez-vous brièvement et expliquez pourquoi vous êtes intéressé(e) par cette offre..."
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              rows={5}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setMessage("")}>
                            Annuler
                          </Button>
                          <Button
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={handleSendMessage}
                            disabled={isLoading || !message.trim()}
                          >
                            {isLoading ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Envoi en cours...
                              </>
                            ) : (
                              "Envoyer le message"
                            )}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </Button>
                  <Button variant="outline" onClick={handleSaveJob}>
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    Sauvegarder
                  </Button>
                  <Button variant="outline" onClick={handleShareJob}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Partager
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Offres similaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobs
                    .filter((j) => j.id !== job.id && j.sector === job.sector)
                    .slice(0, 3)
                    .map((similarJob) => (
                      <div key={similarJob.id} className="p-4 border rounded-lg hover:bg-gray-50">
                        <Link href={`/jobs/${similarJob.id}`} className="block">
                          <h3 className="font-medium mb-1">{similarJob.title}</h3>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">{similarJob.location}</span>
                            <span className="text-gray-500">{formatDate(similarJob.date)}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <Card id="contact">
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Building2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">{job.employer}</p>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span>+237 6XX XX XX XX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <span>contact@example.com</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Phone className="mr-2 h-4 w-4" />
                      Appeler
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Postuler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-500">Envoyez votre candidature directement à l'employeur.</p>

                <div className="space-y-3">
                  <div>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" placeholder="+237 6XX XX XX XX" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea id="message" placeholder="Présentez-vous brièvement..." rows={3} />
                  </div>
                  <div>
                    <Label htmlFor="cv">CV (optionnel)</Label>
                    <Input id="cv" type="file" />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Envoyer ma candidature</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <DashboardFooter />
    </div>
  )
}
