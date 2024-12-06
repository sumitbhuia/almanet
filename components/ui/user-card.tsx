'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Avatar from "@/components/ui/user-avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from 'lucide-react'

interface UserCardProps {
  name: string
  courseOrCompany: string
  isStudent: boolean
  userId: string
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 30 
    } 
  }
}

export function UserCard({ name, courseOrCompany, isStudent, userId }: UserCardProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar userId={userId}/>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate flex items-center">
                {isStudent ? (
                  <>
                    <GraduationCap className="w-4 h-4 mr-1" />
                    <span>Course: {courseOrCompany}</span>
                  </>
                ) : (
                  <>
                    <Briefcase className="w-4 h-4 mr-1" />
                    <span>Company: {courseOrCompany}</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}