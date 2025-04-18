import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface SectorCardProps {
  title: string
  href: string
  special?: boolean
}

export function SectorCard({ title, href, special = false }: SectorCardProps) {
  return (
    <Link href={href}>
      <Card
        className={`hover:border-blue-300 hover:shadow-md cursor-pointer transition-all h-full ${special ? "bg-blue-50 border-blue-200" : ""}`}
      >
        <CardContent className="p-4 flex items-center justify-between h-full">
          <p className="font-medium">{title}</p>
          {special && <ArrowRight className="h-4 w-4 text-blue-600" />}
        </CardContent>
      </Card>
    </Link>
  )
}
