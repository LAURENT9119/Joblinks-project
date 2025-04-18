import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"
import { type Job, formatDate } from "@/lib/data"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <Link href={`/jobs/${job.id}`} className="block p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-lg">{job.title}</h3>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {job.location}
              </p>
            </div>
            <Badge>{job.type}</Badge>
          </div>
          <p className="text-sm mb-3">{job.description.substring(0, 150)}...</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {formatDate(job.date)}
            </span>
            <span className="font-medium">{job.employer}</span>
          </div>
        </Link>
        <div className="border-t p-3 bg-gray-50 flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/jobs/${job.id}`}>Voir détails</Link>
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href={`/jobs/${job.id}#contact`}>Contacter</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
