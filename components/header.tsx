"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness } from "lucide-react"
import { useAuth } from "@/lib/auth"

export function Header() {
  const { user } = useAuth()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-blue-600">JobLink</h1>
        </Link>
        <div className="flex gap-2">
          {user ? (
            <Link href="/dashboard">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Tableau de bord
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Connexion
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  S'inscrire
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
