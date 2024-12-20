'use client'

import React from 'react'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  primaryColor?: string
  secondaryColor?: string
}

export function LoadingSpinner({
  size = 'medium',
  primaryColor = 'blue',
  secondaryColor = 'purple'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
      <div className={`relative ${sizeClasses[size]}`}>
        <div className={`absolute inset-0 rounded-full border-4 border-t-${primaryColor}-500 border-b-${primaryColor}-700 opacity-75 animate-spin`}></div>
        <div className={`absolute inset-2 rounded-full border-4 border-t-${secondaryColor}-500 border-b-${secondaryColor}-700 opacity-75 animate-spin-reverse`}></div>
        <div className={`absolute inset-4 rounded-full border-4 border-t-${primaryColor}-300 border-b-${primaryColor}-500 opacity-75 animate-pulse`}></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

