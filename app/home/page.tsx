"use client";
import { HomePageComponent } from "@/components/pages/home-page";
export const dynamic = 'force-dynamic';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function HomePage() {
  return (
    <div>
       <QueryClientProvider client={queryClient}>
      <HomePageComponent />
      </QueryClientProvider>
    </div>
  )
}