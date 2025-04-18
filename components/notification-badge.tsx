"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notifications } from "@/lib/data"

export function NotificationBadge() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Compter les notifications non lues
    const unreadCount = notifications.filter((n) => !n.read).length
    setCount(unreadCount)

    // Simuler l'arrivée d'une nouvelle notification après un délai
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1)
      setIsAnimating(true)

      // Reset animation after it completes
      const animationTimer = setTimeout(() => {
        setIsAnimating(false)
      }, 1000)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Link href="/notifications">
      <Button variant="ghost" className="relative p-0 h-8 w-8">
        <Bell className={`h-4 w-4 ${isAnimating ? "animate-bell" : ""}`} />
        {count > 0 && <Badge className="absolute -top-1 -right-1 rounded-full px-2 text-xs font-bold">{count}</Badge>}
      </Button>
    </Link>
  )
}
