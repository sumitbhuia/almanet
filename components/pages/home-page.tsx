'use client'

import React from 'react'
import { useProfile } from '@/hooks/useProfile'
import { useEvents } from '@/hooks/useEvents'
import { LoadingSpinner } from '@/components/design/utils/components-loading-spinner'
import { SearchSection } from '@/components/sections/search-section'
import { PostFeed } from '@/components/sections/post-feed'
import { SidePanel } from '@/components/sections/side-panel'


export function HomePageComponent() {
  const { data: profileData, isLoading: isProfileLoading } = useProfile()
  const { events, isLoading: isEventLoading } = useEvents()

  if (isProfileLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <SearchSection className="w-full lg:w-1/3" />
          <PostFeed className="w-full lg:w-5/12" profileData={profileData} />
          <SidePanel 
            className="w-full lg:w-1/4" 
            profileData={profileData} 
            events={events} 
          />
        </div>
      </div>
    </div>
  )
}