import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, ArrowLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
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

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Centre d'aide</h1>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Comment pouvons-nous vous aider ?</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                className="w-full pl-4 pr-10 py-3 border rounded-md"
              />
              <Button className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700">Rechercher</Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Questions fréquentes</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Comment créer un compte sur JobLink ?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Pour créer un compte sur JobLink, suivez ces étapes simples :</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Cliquez sur "Créer un compte" sur la page d'accueil</li>
                    <li>Choisissez votre type de compte (chercheur d'emploi ou employeur)</li>
                    <li>Remplissez le formulaire avec vos informations personnelles</li>
                    <li>Créez un mot de passe</li>
                    <li>Cliquez sur "Créer mon compte"</li>
                  </ol>
                  <p className="mt-2">
                    Vous recevrez une confirmation par SMS et pourrez immédiatement accéder à votre compte.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Comment publier une offre d'emploi ?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Pour publier une offre d'emploi :</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Connectez-vous à votre compte</li>
                    <li>Cliquez sur le bouton "Publier une annonce" dans votre tableau de bord</li>
                    <li>
                      Remplissez le formulaire avec les détails de l'offre (titre, description, lieu, salaire, etc.)
                    </li>
                    <li>Ajoutez vos coordonnées de contact</li>
                    <li>Cliquez sur "Publier"</li>
                  </ol>
                  <p className="mt-2">Votre offre sera immédiatement visible pour les chercheurs d'emploi.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Comment postuler à une offre d'emploi ?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Pour postuler à une offre :</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Parcourez les offres disponibles ou utilisez la recherche</li>
                    <li>Cliquez sur une offre qui vous intéresse pour voir les détails</li>
                    <li>Utilisez les boutons "Appeler" ou "WhatsApp" pour contacter directement l'employeur</li>
                    <li>Présentez-vous et mentionnez que vous avez vu l'offre sur JobLink</li>
                  </ol>
                  <p className="mt-2">Vous pouvez également enregistrer l'offre pour y revenir plus tard.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Est-ce que JobLink est gratuit ?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Oui, JobLink est gratuit pour les chercheurs d'emploi. Les employeurs peuvent publier gratuitement
                    des offres d'emploi de base. Des options premium sont disponibles pour les entreprises qui
                    souhaitent plus de visibilité et de fonctionnalités avancées.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Comment modifier mon profil ?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Pour modifier votre profil :</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Connectez-vous à votre compte</li>
                    <li>Accédez à votre tableau de bord</li>
                    <li>Cliquez sur "Modifier mon profil"</li>
                    <li>Mettez à jour vos informations</li>
                    <li>Cliquez sur "Enregistrer les modifications"</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Comment signaler une offre frauduleuse ?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Si vous suspectez une offre frauduleuse :</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Cliquez sur les trois points (...) à côté de l'offre</li>
                    <li>Sélectionnez "Signaler cette offre"</li>
                    <li>Choisissez le motif du signalement</li>
                    <li>Ajoutez des détails si nécessaire</li>
                    <li>Soumettez votre signalement</li>
                  </ol>
                  <p className="mt-2">
                    Notre équipe examinera rapidement votre signalement et prendra les mesures appropriées.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Guides pour les chercheurs d'emploi</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Comment créer un profil attractif
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Conseils pour un entretien réussi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Comment négocier votre salaire
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Trouver des emplois dans votre domaine
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Guides pour les employeurs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Rédiger une offre d'emploi efficace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Comment sélectionner les bons candidats
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Gérer vos offres d'emploi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Options de compte premium
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Besoin d'aide supplémentaire ?</h2>
            <p className="mb-4">Notre équipe de support est disponible pour vous aider. Contactez-nous par :</p>
            <ul className="space-y-2 mb-4">
              <li>Email : support@joblink.com</li>
              <li>WhatsApp : +225 XX XX XX XX</li>
              <li>Téléphone : +225 XX XX XX XX (Lun-Ven, 8h-18h)</li>
            </ul>
            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">Contacter le support</Button>
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
