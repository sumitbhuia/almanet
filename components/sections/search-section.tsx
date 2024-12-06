'use client'

import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { createClient } from '@/utils/supabase/client'
import { UserCard } from '@/components/ui/user-card'

const supabase = createClient()

interface SearchSectionProps {
  className?: string
}

export function SearchSection({ className }: SearchSectionProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState<Array<{
    userId: string
    name: string
    courseOrCompany: string
    isStudent: boolean
  }>>([])

  useEffect(() => {
    const fetchUsers = async (search = '') => {
      const { data, error } = await supabase
        .from('profiles')
        .select('display_name, current_company, user_role, course, id')
        .ilike('display_name', `%${search}%`)

      if (error) {
        console.error('Error fetching users:', error)
      } else {
        const mappedUsers = data.map(user => ({
          name: user.display_name || 'Unknown',
          courseOrCompany: user.current_company || user.course,
          isStudent: user.user_role === 'student',
          userId: user.id,
        }))
        setUsers(mappedUsers)
      }
    }

    fetchUsers(searchTerm)
  }, [searchTerm])

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search students or alumni..."
            className="w-full p-2 pl-10 border rounded-lg bg-neutral-100 dark:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
        </div>
      </div>
      <div className="space-y-4">
        {users.map((user) => (
          <UserCard key={user.userId} {...user} />
        ))}
      </div>
    </div>
  )
}