import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  BriefcaseBusiness,
  ArrowLeft,
  Bell,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Eye,
  Briefcase,
  UserCheck,
} from "lucide-react"

export default function NotificationsPage() {
  // Données simulées pour les notifications
  const notifications = [
    {
      id: 1,
      type: "message",
      title: "Nouveau message",
      content: "Bonjour, je suis intéressé par votre profil. Êtes-vous disponible pour un entretien?",
      sender: "Marie Koné",
      senderAvatar: "MK",
      date: "Il y a 30 minutes",
      read: false,
    },
    {
      id: 2,
      type: "application",
      title: "Nouvelle candidature",
      content: "Quelqu'un a postulé à votre offre 'Maçon pour construction maison'",
      sender: "Amadou Diallo",
      senderAvatar: "AD",
      date: "Il y a 2 heures",
      read: false,
    },
    {
      id: 3,
      type: "view",
      title: "Votre profil a été consulté",
      content: "Entreprise de construction a consulté votre profil",
      sender: "Entreprise de construction",
      senderAvatar: "EC",
      date: "Hier",
      read: true,
    },
    {
      id: 4,
      type: "job",
      title: "Nouvelle offre d'emploi",
      content: "Une nouvelle offre correspond à votre profil: 'Chauffeur personnel'",
      sender: "JobLink",
      senderAvatar: "JL",
      date: "Il y a 2 jours",
      read: true,
    },
    {
      id: 5,
      type: "message",
      title: "Nouveau message",
      content: "Pouvez-vous me donner plus d'informations sur votre expérience en maçonnerie?",
      sender: "Ibrahim Touré",
      senderAvatar: "IT",
      date: "Il y a 3 jours",
      read: true,
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageCircle className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-full" />
      case "application":
        return <UserCheck className="h-10 w-10 p-2 bg-green-100 text-green-600 rounded-full" />
      case "view":
        return <Eye className="h-10 w-10 p-2 bg-purple-100 text-purple-600 rounded-full" />
      case "job":
        return <Briefcase className="h-10 w-10 p-2 bg-orange-100 text-orange-600 rounded-full" />
      default:
        return <Bell className="h-10 w-10 p-2 bg-gray-100 text-gray-600 rounded-full" />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-blue-600">JobLink</h1>
          </div>
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <Button variant="outline" size="sm">
              Tout marquer comme lu
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">
                Toutes
                <Badge className="ml-2 bg-blue-600" variant="secondary">
                  {notifications.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="messages">
                Messages
                <Badge className="ml-2 bg-blue-600" variant="secondary">
                  {notifications.filter((n) => n.type === "message").length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="applications">
                Candidatures
                <Badge className="ml-2 bg-blue-600" variant="secondary">
                  {notifications.filter((n) => n.type === "application").length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="jobs">
                Emplois
                <Badge className="ml-2 bg-blue-600" variant="secondary">
                  {notifications.filter((n) => n.type === "job" || n.type === "view").length}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0 space-y-4">
              {notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`overflow-hidden hover:shadow-md transition-shadow ${
                    !notification.read ? "border-l-4 border-l-blue-600" : ""
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div>{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-medium">{notification.title}</h3>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {notification.date}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{notification.content}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="text-xs">{notification.senderAvatar}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{notification.sender}</span>
                          </div>
                          <div className="flex gap-2">
                            {!notification.read && (
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                <span className="sr-only">Marquer comme lu</span>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" className="h-8">
                              Voir
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="messages" className="mt-0 space-y-4">
              {notifications
                .filter((n) => n.type === "message")
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className={`overflow-hidden hover:shadow-md transition-shadow ${
                      !notification.read ? "border-l-4 border-l-blue-600" : ""
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div>{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {notification.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{notification.content}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">{notification.senderAvatar}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{notification.sender}</span>
                            </div>
                            <div className="flex gap-2">
                              {!notification.read && (
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                  <span className="sr-only">Marquer comme lu</span>
                                </Button>
                              )}
                              <Button variant="outline" size="sm" className="h-8">
                                Répondre
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="applications" className="mt-0 space-y-4">
              {notifications
                .filter((n) => n.type === "application")
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className={`overflow-hidden hover:shadow-md transition-shadow ${
                      !notification.read ? "border-l-4 border-l-blue-600" : ""
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div>{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {notification.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{notification.content}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">{notification.senderAvatar}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{notification.sender}</span>
                            </div>
                            <div className="flex gap-2">
                              {!notification.read && (
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                  <span className="sr-only">Marquer comme lu</span>
                                </Button>
                              )}
                              <Button variant="outline" size="sm" className="h-8">
                                Voir le profil
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="jobs" className="mt-0 space-y-4">
              {notifications
                .filter((n) => n.type === "job" || n.type === "view")
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className={`overflow-hidden hover:shadow-md transition-shadow ${
                      !notification.read ? "border-l-4 border-l-blue-600" : ""
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div>{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {notification.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{notification.content}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">{notification.senderAvatar}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{notification.sender}</span>
                            </div>
                            <div className="flex gap-2">
                              {!notification.read && (
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                  <span className="sr-only">Marquer comme lu</span>
                                </Button>
                              )}
                              <Button variant="outline" size="sm" className="h-8">
                                {notification.type === "job" ? "Voir l'offre" : "Voir détails"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
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
