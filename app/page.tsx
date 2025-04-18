"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Search, UserCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectorCard } from "@/components/sector-card"
import { useAuth } from "@/lib/auth"

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Trouvez du travail.
                  <br />
                  Trouvez des talents.
                </h1>
                <p className="text-lg text-gray-600">
                  JobLink connecte les chercheurs d'emploi avec des opportunités locales au Cameroun dans tous les
                  domaines, de manière simple et directe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={user ? "/dashboard" : "/register?type=jobseeker"}>
                    <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                      Je cherche un emploi
                    </Button>
                  </Link>
                  <Link href={user ? "/dashboard/publier-annonce" : "/register?type=employer"}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Je propose un emploi
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Comment ça fonctionne</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-blue-100 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-50 p-4 rounded-full mb-4">
                      <UserCircle className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Créez votre profil</h3>
                    <p className="text-gray-600">
                      Ajoutez vos compétences, votre expérience et vos préférences en quelques clics.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-50 p-4 rounded-full mb-4">
                      <Search className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Trouvez des opportunités</h3>
                    <p className="text-gray-600">
                      Parcourez les offres d'emploi ou publiez votre propre annonce facilement.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-50 p-4 rounded-full mb-4">
                      <Building2 className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Connectez-vous directement</h3>
                    <p className="text-gray-600">
                      Contactez les employeurs ou candidats par téléphone ou WhatsApp sans intermédiaire.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Explorez les secteurs d'emploi</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
                <TabsTrigger value="artisanat">Artisanat</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="education">Éducation</TabsTrigger>
                <TabsTrigger value="tech">Numérique</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <SectorCard title="Agriculteur" href="/jobs/category/agriculteur" />
                  <SectorCard title="Maçon" href="/jobs/category/macon" />
                  <SectorCard title="Femme de ménage" href="/jobs/category/femme-de-menage" />
                  <SectorCard title="Professeur" href="/jobs/category/professeur" />
                  <SectorCard title="Graphiste" href="/jobs/category/graphiste" />
                  <SectorCard title="DJ" href="/jobs/category/dj" />
                  <SectorCard title="Plombier" href="/jobs/category/plombier" />
                  <SectorCard title="Chauffeur" href="/jobs/category/chauffeur" />
                  <SectorCard title="Babysitter" href="/jobs/category/babysitter" />
                  <SectorCard title="Voir tous" href="/jobs/sector/all" special />
                </div>
              </TabsContent>

              <TabsContent value="agriculture" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <SectorCard title="Agriculteur" href="/jobs/category/agriculteur" />
                  <SectorCard title="Éleveur" href="/jobs/sector/agriculture" />
                  <SectorCard title="Ouvrier agricole" href="/jobs/sector/agriculture" />
                  <SectorCard title="Voir tous" href="/jobs/sector/agriculture" special />
                </div>
              </TabsContent>

              <TabsContent value="artisanat" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <SectorCard title="Maçon" href="/jobs/category/macon" />
                  <SectorCard title="Plombier" href="/jobs/category/plombier" />
                  <SectorCard title="Menuisier" href="/jobs/sector/artisanat" />
                  <SectorCard title="Électricien" href="/jobs/sector/artisanat" />
                  <SectorCard title="Voir tous" href="/jobs/sector/artisanat" special />
                </div>
              </TabsContent>

              <TabsContent value="services" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <SectorCard title="Femme de ménage" href="/jobs/category/femme-de-menage" />
                  <SectorCard title="Chauffeur" href="/jobs/category/chauffeur" />
                  <SectorCard title="Babysitter" href="/jobs/category/babysitter" />
                  <SectorCard title="Voir tous" href="/jobs/sector/services" special />
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <SectorCard title="Professeur" href="/jobs/category/professeur" />
                  <SectorCard title="Répétiteur" href="/jobs/sector/education" />
                  <SectorCard title="Formateur" href="/jobs/sector/education" />
                  <SectorCard title="Voir tous" href="/jobs/sector/education" special />
                </div>
              </TabsContent>

              <TabsContent value="tech" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <SectorCard title="Graphiste" href="/jobs/category/graphiste" />
                  <SectorCard title="DJ" href="/jobs/category/dj" />
                  <SectorCard title="Développeur" href="/jobs/sector/numerique" />
                  <SectorCard title="Voir tous" href="/jobs/sector/numerique" special />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Ils ont trouvé avec JobLink</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Nkeng Jean"
                role="Maçon"
                quote="Grâce à JobLink, j'ai trouvé plusieurs chantiers près de chez moi à Douala. L'application est simple à utiliser, même pour quelqu'un comme moi qui n'est pas très à l'aise avec la technologie."
              />
              <TestimonialCard
                name="Mbarga Marie"
                role="Employeuse"
                quote="J'ai pu trouver une femme de ménage fiable en moins de 24h à Yaoundé. Le contact direct sans intermédiaire m'a fait gagner du temps et de l'argent."
              />
              <TestimonialCard
                name="Atangana Paul"
                role="Chauffeur"
                quote="Depuis que j'utilise JobLink, je n'ai plus de périodes sans travail. Je reçois régulièrement des propositions et je peux choisir celles qui me conviennent le mieux."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de personnes qui trouvent du travail ou des talents chaque jour sur JobLink.
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Créer un compte gratuitement
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function TestimonialCard({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-6 flex-grow">{quote}</p>
          <div className="mt-auto">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
