'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, DollarSign } from 'lucide-react'

interface SidePanelProps {
  className?: string
  profileData: any // Replace with proper type
  events: any[] // Replace with proper type
}

export function SidePanel({ className, profileData, events }: SidePanelProps) {
  const router = useRouter()

  return (
    <div className={`space-y-4 ${className}`}>
      {profileData?.user_role === "alumni" && (
        <>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="pt-6">
                <Button 
                  onClick={() => router.push("/events")}
                  className="w-full"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Create Event
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <Button 
                  onClick={() => router.push("/donate")}
                  className="w-full"
                  variant="secondary"
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Donate now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardContent className="pt-6">
            <Button 
              onClick={() => router.push("/funds")}
              className="w-full"
              variant="secondary"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Raise Funding
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold">{event.name}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.is_online ? 'Online Event' : `Location: ${event.location}`}
                    </p>
                    <a
                      href={event.url}
                      className="text-blue-500 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join now
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Date: {new Date(event.date).toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}