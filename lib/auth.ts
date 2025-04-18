"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type User, users } from "@/lib/data"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (phone: string, password: string) => Promise<boolean>
  register: (userData: Partial<User>, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    const storedUser = localStorage.getItem("joblink-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (phone: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simuler une requête API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Dans un vrai système, on vérifierait le mot de passe hashé
        const foundUser = users.find((u) => u.phone === phone)

        if (foundUser) {
          setUser(foundUser)
          localStorage.setItem("joblink-user", JSON.stringify(foundUser))
          resolve(true)
        } else {
          resolve(false)
        }

        setIsLoading(false)
      }, 1000)
    })
  }

  const register = async (userData: Partial<User>, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simuler une requête API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Vérifier si l'utilisateur existe déjà
        const userExists = users.some((u) => u.phone === userData.phone)

        if (userExists) {
          resolve(false)
        } else {
          // Créer un nouvel utilisateur
          const newUser: User = {
            id: `user${users.length + 1}`,
            name: userData.name || "",
            phone: userData.phone || "",
            email: userData.email,
            location: userData.location || "",
            role: userData.role || "jobseeker",
            skills: userData.skills || [],
            createdAt: new Date(),
          }

          // Dans une vraie application, on sauvegarderait l'utilisateur dans la base de données
          users.push(newUser)

          setUser(newUser)
          localStorage.setItem("joblink-user", JSON.stringify(newUser))
          resolve(true)
        }

        setIsLoading(false)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("joblink-user")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
