import { create } from 'zustand'
import { createClient } from '@/utils/supabase/client'

const supabase = createClient()

// Supabase return type interfaces
interface SupabaseProfile {
  display_name: string
}

interface SupabasePost {
  id: string
  title: string
  description: string
  user_id: string
  created_at: string
  profiles: SupabaseProfile | null
}

interface SupabaseComment {
  id: string
  content: string
  user_id: string
  profiles: SupabaseProfile | null
}

// Store interfaces
interface Profile {
  display_name: string
}

interface Post {
  id: string
  title: string
  description: string
  user_id: string
  created_at: string
  profiles: Profile | null
}

interface Comment {
  id: string
  content: string
  user_id: string
  profiles: Profile | null
}

interface Store {
  posts: Post[]
  comments: Comment[]
  expandedPost: string | null
  isPostingModalOpen: boolean
  fetchPosts: () => Promise<void>
  fetchComments: (postId: string) => Promise<void>
  setExpandedPost: (postId: string | null) => void
  setIsPostingModalOpen: (isOpen: boolean) => void
  addPost: (post: Post) => void
  addComment: (comment: Comment) => void
}

export const useStore = create<Store>((set) => ({
  posts: [],
  comments: [],
  expandedPost: null,
  isPostingModalOpen: false,

  fetchPosts: async () => {
    const { data: rawPosts, error } = await supabase
      .from('post')
      .select(`
        id,
        title,
        description,
        user_id,
        created_at,
        profiles (
          display_name
        )
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching posts:', error)
      return
    }

    if (rawPosts) {
      const mappedPosts: Post[] = rawPosts.map((post: any) => ({
        id: post.id,
        title: post.title,
        description: post.description,
        user_id: post.user_id,
        created_at: post.created_at,
        profiles: post.profiles ? {
          display_name: post.profiles.display_name
        } : null
      }))

      console.log('Raw posts from DB:', rawPosts)
      console.log('Mapped posts:', mappedPosts)
      set({ posts: mappedPosts })
    }
  },

  fetchComments: async (postId: string) => {
    const { data: rawComments, error } = await supabase
      .from('comments')
      .select(`
        id,
        content, 
        user_id,
        profiles (
          display_name
        )
      `)
      .eq('post_id', postId)
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching comments:', error)
      return
    }

    if (rawComments) {
      const mappedComments: Comment[] = rawComments.map((comment: any) => ({
        id: comment.id,
        content: comment.content,
        user_id: comment.user_id,
        profiles: comment.profiles ? {
          display_name: comment.profiles.display_name
        } : null
      }))
      set({ comments: mappedComments })
    }
  },

  setExpandedPost: (postId: string | null) => set({ expandedPost: postId }),
  setIsPostingModalOpen: (isOpen: boolean) => set({ isPostingModalOpen: isOpen }),
  addPost: (post: Post) => set(state => ({ posts: [post, ...state.posts] })),
  addComment: (comment: Comment) => set(state => ({ comments: [...state.comments, comment] }))
}))