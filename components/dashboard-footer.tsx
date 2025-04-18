import Link from "next/link"

export function DashboardFooter() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2023 JobLink</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
              À propos
            </Link>
            <Link href="/help" className="text-sm text-gray-600 hover:text-blue-600">
              Aide
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
