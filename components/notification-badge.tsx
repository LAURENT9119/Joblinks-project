"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface NotificationBadgeProps {
  initialCount?: number
}

export function NotificationBadge({ initialCount = 2 }: NotificationBadgeProps) {
  const [count, setCount] = useState(initialCount)

  // Simuler l'arrivée d'une nouvelle notification après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1)
    }, 30000) // 30 secondes

    return () => clearTimeout(timer)
  }, [])

  return (
    <Link href="/notifications">
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        {count > 0 && (
          <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[1.25rem] h-5 flex items-center justify-center bg-red-500 text-white">
            {count}
          </Badge>
        )}
      </Button>
    </Link>
  )
}
