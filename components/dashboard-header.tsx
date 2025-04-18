"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BriefcaseBusiness, MessageCircle } from "lucide-react"
import { NotificationBadge } from "@/components/notification-badge"
import { useAuth } from "@/lib/auth"

export function DashboardHeader() {
  const { user } = useAuth()

  // Créer les initiales à partir du nom
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  const initials = user ? getInitials(user.name) : "JL"

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600">JobLink</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <NotificationBadge />
          <Link href="/messages">
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/profile">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  )
}
