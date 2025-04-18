"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { BriefcaseBusiness, ArrowLeft, Upload, MapPin, Clock, Coins } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function PublierAnnoncePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    sector: "",
    location: "",
    type: "fulltime",
    salary: "",
    duration: "",
    description: "",
    requirements: "",
    contactMethod: "phone",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler l'envoi des données
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Annonce publiée avec succès",
        description: "Votre offre d'emploi est maintenant visible pour les candidats.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Publier une offre d'emploi</h1>

          <Card>
            <CardHeader>
              <CardTitle>Détails de l'offre</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Titre de l'offre *</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Ex: Maçon pour construction maison"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sector">Secteur d'activité *</Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) => handleSelectChange("sector", value)}
                        required
                      >
                        <SelectTrigger id="sector">
                          <SelectValue placeholder="Choisir un secteur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="artisanat">Artisanat</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="education">Éducation</SelectItem>
                          <SelectItem value="numerique">Numérique</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="category">Catégorie de métier *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => handleSelectChange("category", value)}
                        required
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Choisir une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agriculteur">Agriculteur</SelectItem>
                          <SelectItem value="macon">Maçon</SelectItem>
                          <SelectItem value="femme-de-menage">Femme de ménage</SelectItem>
                          <SelectItem value="professeur">Professeur</SelectItem>
                          <SelectItem value="graphiste">Graphiste</SelectItem>
                          <SelectItem value="dj">DJ</SelectItem>
                          <SelectItem value="plombier">Plombier</SelectItem>
                          <SelectItem value="chauffeur">Chauffeur</SelectItem>
                          <SelectItem value="babysitter">Babysitter</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Lieu *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="location"
                        name="location"
                        className="pl-10"
                        placeholder="Ex: Douala, Kribi"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Type de contrat *</Label>
                      <RadioGroup
                        value={formData.type}
                        onValueChange={(value) => handleSelectChange("type", value)}
                        className="flex flex-col space-y-1 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fulltime" id="fulltime" />
                          <Label htmlFor="fulltime" className="cursor-pointer">
                            Temps plein
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="parttime" id="parttime" />
                          <Label htmlFor="parttime" className="cursor-pointer">
                            Temps partiel
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mission" id="mission" />
                          <Label htmlFor="mission" className="cursor-pointer">
                            Mission
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="seasonal" id="seasonal" />
                          <Label htmlFor="seasonal" className="cursor-pointer">
                            Saisonnier
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="salary">Rémunération</Label>
                        <div className="relative">
                          <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="salary"
                            name="salary"
                            className="pl-10"
                            placeholder="Ex: 150,000 FCFA / mois"
                            value={formData.salary}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="duration">Durée</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="duration"
                            name="duration"
                            className="pl-10"
                            placeholder="Ex: 3 mois, Indéterminée"
                            value={formData.duration}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description du poste *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Décrivez le poste, les tâches à effectuer, les horaires, etc."
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Exigences et qualifications</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      placeholder="Expérience requise, compétences, diplômes, etc."
                      rows={3}
                      value={formData.requirements}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label>Méthode de contact préférée *</Label>
                    <RadioGroup
                      value={formData.contactMethod}
                      onValueChange={(value) => handleSelectChange("contactMethod", value)}
                      className="flex flex-col space-y-1 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone" className="cursor-pointer">
                          Téléphone
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="whatsapp" />
                        <Label htmlFor="whatsapp" className="cursor-pointer">
                          WhatsApp
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both" className="cursor-pointer">
                          Les deux
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="border border-dashed rounded-md p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Glissez-déposez des photos ou documents (optionnel)</p>
                    <Button type="button" variant="outline" size="sm">
                      Parcourir les fichiers
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                    {isLoading ? "Publication en cours..." : "Publier l'annonce"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
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
