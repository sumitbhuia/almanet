import { create } from 'zustand'
import { createClient } from '@/utils/supabase/client'

const supabase = createClient()

interface Post {
  id: number
  title: string
  description: string
  user_id: string
  created_at: string
  profiles: { display_name: string } | null
}

interface Comment {
  id: number
  content: string
  user_id: string
  profiles: { display_name: string } | null
}

interface Store {
  posts: Post[]
  comments: Comment[]
  expandedPost: number | null
  isPostingModalOpen: boolean
  fetchPosts: () => Promise<void>
  fetchComments: (postId: number) => Promise<void>
  setExpandedPost: (postId: number | null) => void
  setIsPostingModalOpen: (isOpen: boolean) => void
  addPost: (post: Post) => void
  addComment: (comment: Comment) => void
}

export const useStore = create<Store>((set, get) => ({
  posts: [],
  comments: [],
  expandedPost: null,
  isPostingModalOpen: false,

  fetchPosts: async () => {
    const { data, error } = await supabase
      .from('post')
      .select(`
        id,
        title,
        description,
        user_id,
        created_at,
         profiles (display_name)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching posts:', error)
    } else {
      const mappedPosts = data.map(post => ({
        ...post,
        profiles: post.profiles ? post.profiles[0] : null, // Ensure proper mapping
      }));
      set({ posts: mappedPosts });
    }
  },

  fetchComments: async (postId: number) => {
    const { data, error } = await supabase
      .from('comments')
      .select(`
        id,
        content,
        user_id,
        profiles(display_name)
      `)
      .eq('post_id', postId)
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching comments:', error)
    } else {
      const mappedComments = data.map(comment => ({
        ...comment,
        profiles: comment.profiles ? comment.profiles[0] : null, // Ensure proper mapping
      }));
      set({ comments: mappedComments });
    }
  },

  setExpandedPost: (postId: number | null) => set({ expandedPost: postId }),
  setIsPostingModalOpen: (isOpen: boolean) => set({ isPostingModalOpen: isOpen }),
  addPost: (post: Post) => set(state => ({ posts: [post, ...state.posts] })),
  addComment: (comment: Comment) => set(state => ({ comments: [...state.comments, comment] })),
}))