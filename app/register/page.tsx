"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { BriefcaseBusiness, ArrowLeft, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/lib/auth"
import type { UserRole } from "@/lib/data"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { register, isLoading } = useAuth()
  
  const defaultRole = searchParams.get("type") as UserRole || "jobseeker"
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
    role: defaultRole,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value as UserRole }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive",
      })
      return
    }
    
    const success = await register(
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        role: formData.role,
        skills: [],
      },
      formData.password
    )
    
    if (success) {
      toast({
        title: "Inscription réussie",
        description: "Votre compte a été créé avec succès!",
      })
      router.push("/dashboard")
    } else {
      toast({
        title: "Erreur d'inscription",
        description: "Ce numéro de téléphone est déjà utilisé",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
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

      <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Créer un compte</CardTitle>
            <CardDescription>Rejoignez JobLink pour trouver du travail ou des talents</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Je suis un(e)</Label>
                <RadioGroup
                  defaultValue={formData.role}
                  onValueChange={handleRoleChange}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jobseeker" id="jobseeker" />
                    <Label htmlFor="jobseeker">Chercheur d'emploi</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="employer" id="employer" />
                    <Label htmlFor="employer">Employeur</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+237 6XX XX XX XX"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email (optionnel)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Ville</Label>
                <Input
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Création du compte...
                  </>
                ) : (
                  "Créer mon compte"
                )}
              </Button>
              <div className="text-center text-sm">
                Déjà un compte?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Se connecter
                </Link>
              </div>
            </CardFooter>
          </form>


\
