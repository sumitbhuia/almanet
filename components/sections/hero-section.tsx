'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const colorScheme = {
  light: {
    background: 'bg-gray-100',
    text: 'text-gray-900',
    accent1: 'from-blue-500 to-purple-500',
    accent2: 'from-green-400 to-blue-500',
    button1: 'bg-primary text-primary-foreground hover:bg-primary/90',
    button2: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-white',
    accent1: 'from-purple-600 to-pink-500',
    accent2: 'from-orange-500 to-red-500',
    button1: 'bg-primary text-primary-foreground hover:bg-primary/90',
    button2: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  },
}

const floatingElements = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  size: Math.random() * 100 + 50,
  duration: Math.random() * 20 + 10,
  offset: {
    x: Math.random() * 400 - 200,
    y: Math.random() * 400 - 200,
  },
}))

const features = [
  { name: 'Easy', gradient: 'from-green-400 to-blue-500' },
  { name: 'Secure', gradient: 'from-purple-400 to-pink-500' },
  { name: 'Personalized', gradient: 'from-yellow-400 to-red-500' },
]





interface HeroProps {
  learnMoreRef?: React.RefObject<HTMLDivElement>;
}

export default function Hero({ learnMoreRef }: HeroProps){
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const colors = isDark ? colorScheme.dark : colorScheme.light
  const router = useRouter()

  // Hanfling the button click

  const handleGetStarted = () => {
    router.push('/sign-up')
  }

  const handleLearnMore = () => {
    learnMoreRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className={`w-full min-h-screen ${colors.background} ${colors.text} flex flex-col items-center justify-center relative overflow-hidden`}>
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            `linear-gradient(45deg, ${isDark ? '#ff00ff' : '#00ffff'}, ${isDark ? '#00ffff' : '#ff00ff'})`,
            `linear-gradient(45deg, ${isDark ? '#ffff00' : '#ff00ff'}, ${isDark ? '#ff00ff' : '#ffff00'})`,
            `linear-gradient(45deg, ${isDark ? '#00ffff' : '#ffff00'}, ${isDark ? '#ffff00' : '#00ffff'})`,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute rounded-full bg-gradient-to-r ${el.id % 2 === 0 ? colors.accent1 : colors.accent2}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.7, 0.3, 0.7], 
            scale: [1, 1.5, 1],
            x: [0, el.offset.x, 0],
            y: [0, el.offset.y, 0],
            rotate: [0, 360, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: el.duration,
            repeatType: 'reverse'
          }}
          style={{
            width: `${el.size}px`,
            height: `${el.size}px`,
            filter: 'blur(20px)',
          }}
        />
      ))}

      <motion.div 
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/asset/almanet-favicon-color.svg"
            alt="Alumni Network logo"
            width={80}
            height={80}
            className="mx-auto filter drop-shadow-lg"
          />
          <p className="text-sm uppercase tracking-wider mt-2 font-bold">ALUMNI NETWORK</p>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="block">Connect</span>
          <span className="block">with your alumni</span>
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            effortlessly
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg" 
          className={colors.button1}
          onClick={handleGetStarted}
          >
            Get started →
          </Button>
          <Button size="lg" 
          variant="outline" 
          className={colors.button2}
          onClick={handleLearnMore}
          >
            Learn more
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.name}
              className="flex items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className={`w-4 h-4 rounded-full mr-2 bg-gradient-to-r ${feature.gradient}`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <span>{feature.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}