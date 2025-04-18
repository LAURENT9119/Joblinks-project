import Link from "next/link"
import { BriefcaseBusiness } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness className="h-6 w-6" />
              <h3 className="text-xl font-bold">JobLink</h3>
            </div>
            <p className="text-gray-300">L'application inclusive pour l'emploi local au Cameroun.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs/sector/all" className="text-gray-300 hover:text-white">
                  Offres d'emploi
                </Link>
              </li>
              <li>
                <Link href="/register?type=employer" className="text-gray-300 hover:text-white">
                  Publier une offre
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white">
                  Créer un compte
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Secteurs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs/sector/agriculture" className="text-gray-300 hover:text-white">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="/jobs/sector/artisanat" className="text-gray-300 hover:text-white">
                  Artisanat
                </Link>
              </li>
              <li>
                <Link href="/jobs/sector/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/jobs/sector/education" className="text-gray-300 hover:text-white">
                  Éducation
                </Link>
              </li>
              <li>
                <Link href="/jobs/sector/numerique" className="text-gray-300 hover:text-white">
                  Numérique
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white">
                  Aide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 JobLink - Tous droits réservés</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
