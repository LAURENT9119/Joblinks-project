import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BriefcaseBusiness, Building2, Search, UserCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600">JobLink</h1>
          </div>
          <Link href="/login">
            <Button variant="outline" size="sm">
              Connexion
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Trouvez du travail. Trouvez des talents.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            JobLink connecte les chercheurs d'emploi avec des opportunités locales dans tous les domaines, de manière
            simple et directe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?type=jobseeker">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Je cherche un emploi
              </Button>
            </Link>
            <Link href="/register?type=employer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Je propose un emploi
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">Comment ça fonctionne</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <UserCircle className="h-12 w-12 text-blue-600 mb-4" />
                  <h4 className="font-medium text-lg mb-2">Créez votre profil</h4>
                  <p className="text-gray-600">
                    Ajoutez vos compétences, votre expérience et vos préférences en quelques clics.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Search className="h-12 w-12 text-blue-600 mb-4" />
                  <h4 className="font-medium text-lg mb-2">Trouvez des opportunités</h4>
                  <p className="text-gray-600">
                    Parcourez les offres d'emploi ou publiez votre propre annonce facilement.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                  <h4 className="font-medium text-lg mb-2">Connectez-vous directement</h4>
                  <p className="text-gray-600">
                    Contactez les employeurs ou candidats par téléphone ou WhatsApp sans intermédiaire.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">Explorez les secteurs d'emploi</h3>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="artisanat">Artisanat</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="education">Éducation</TabsTrigger>
              <TabsTrigger value="tech">Numérique</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/jobs/sector/all">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Tous les secteurs</h3>
                      <p className="text-gray-500 text-sm">Voir toutes les offres d'emploi disponibles</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/agriculteur">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Agriculteur</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/macon">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Maçon</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/femme-de-menage">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Femme de ménage</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/professeur">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Professeur</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/graphiste">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Graphiste</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/dj">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">DJ</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/plombier">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Plombier</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/chauffeur">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Chauffeur</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/babysitter">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Babysitter</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="agriculture" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/jobs/sector/agriculture">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Secteur Agriculture</h3>
                      <p className="text-gray-500 text-sm">
                        Explorez les opportunités dans l'agriculture, l'élevage et l'agroalimentaire
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/agriculteur">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Agriculteur</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="artisanat" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/jobs/sector/artisanat">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Secteur Artisanat</h3>
                      <p className="text-gray-500 text-sm">
                        Explorez les opportunités dans la construction, l'artisanat et les métiers manuels
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/macon">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Maçon</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/plombier">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Plombier</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/jobs/sector/services">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Secteur Services</h3>
                      <p className="text-gray-500 text-sm">
                        Explorez les opportunités dans les services aux particuliers et aux entreprises
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/femme-de-menage">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Femme de ménage</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/chauffeur">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Chauffeur</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/babysitter">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Babysitter</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/jobs/sector/education">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Secteur Éducation</h3>
                      <p className="text-gray-500 text-sm">
                        Explorez les opportunités dans l'enseignement, la formation et l'encadrement
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/professeur">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Professeur</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="tech" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/jobs/sector/numerique">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Secteur Numérique</h3>
                      <p className="text-gray-500 text-sm">
                        Explorez les opportunités dans le digital, l'informatique et les nouvelles technologies
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/graphiste">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">Graphiste</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/jobs/category/dj">
                  <Card className="hover:border-blue-300 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <p className="font-medium">DJ</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Prêt à commencer ?</h3>
          <Link href="/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Créer un compte gratuitement
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-50 border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>© 2025 JobLink - L'application inclusive pour l'emploi local</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
