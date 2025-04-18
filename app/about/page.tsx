import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, ArrowLeft, Users, Globe, Shield, Smartphone } from "lucide-react"

export default function AboutPage() {
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
          <h1 className="text-3xl font-bold mb-6 text-center">À propos de JobLink</h1>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Notre mission</h2>
            <p className="mb-4">
              JobLink est née d'un constat simple : en Afrique et dans les pays à faibles revenus, des millions de
              personnes cherchent du travail sans savoir où chercher, tandis que des entreprises et particuliers peinent
              à trouver la main-d'œuvre dont ils ont besoin.
            </p>
            <p className="mb-4">
              Notre mission est de connecter directement et simplement les chercheurs d'emploi avec les opportunités
              locales, dans tous les secteurs d'activité, des plus traditionnels aux plus modernes.
            </p>
            <p>
              Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite d'être satisfait,
              sans barrières ni intermédiaires coûteux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Pour tous</h3>
              <p>
                JobLink est conçue pour être accessible à tous, quel que soit votre niveau d'éducation ou votre secteur
                d'activité. Artisans, professionnels, étudiants, tous peuvent trouver leur place.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Local</h3>
              <p>
                Nous privilégions les opportunités locales pour dynamiser l'économie de proximité et réduire les
                déplacements. Trouvez du travail près de chez vous ou des talents dans votre quartier.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sécurisé</h3>
              <p>
                Nous vérifions les profils et les offres pour assurer un environnement de confiance. Votre sécurité et
                la qualité des échanges sont nos priorités.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Mobile-first</h3>
              <p>
                JobLink est conçue pour fonctionner parfaitement sur tous les smartphones, même les plus basiques, avec
                une consommation de données minimale.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Notre équipe</h2>
            <p className="mb-4">
              JobLink a été fondée par une équipe passionnée par l'impact social et le développement économique local.
              Nous combinons expertise technique et connaissance approfondie des réalités du marché de l'emploi en
              Afrique.
            </p>
            <p>
              Notre équipe est basée à Abidjan, avec des collaborateurs dans plusieurs pays d'Afrique de l'Ouest pour
              assurer une compréhension fine des besoins locaux.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Nous contacter</h2>
            <p className="mb-4">
              Vous avez des questions, des suggestions ou souhaitez collaborer avec nous ? N'hésitez pas à nous
              contacter :
            </p>
            <ul className="space-y-2">
              <li>Email : contact@joblink.com</li>
              <li>Téléphone : +237 XX XX XX XX</li>
              <li>WhatsApp : +237 XX XX XX XX</li>
              <li>Adresse : Douala , Cameroun</li>
            </ul>
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
