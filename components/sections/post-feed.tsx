'use client'

import React, { useState,useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { motion,AnimatePresence } from 'framer-motion'
import  Avatar from "@/components/ui/user-avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/form/textarea"
import { useToast } from "@/components/ui/toast/use-toast"
import { Pencil, Heart, MessageCircle, X, Send, Bookmark } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { createClient } from '@/utils/supabase/client'
import { toast } from '@/hooks/useToast'



const supabase = createClient()

interface PostFeedProps {
  className?: string
  profileData: any // Replace with proper type
}

export function PostFeed({ className, profileData }: PostFeedProps) {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { 
    posts, 
    fetchPosts, 
    setIsPostingModalOpen, 
    setExpandedPost,
    isPostingModalOpen,
    expandedPost
  } = useStore()

  const { isLoading, error } = useQuery('posts', fetchPosts)

  const createPostMutation = useMutation(
    async (postContent: string) => {
      const { data, error } = await supabase
        .from('post')
        .insert({
          title: postContent,
          description: postContent,
          user_id: profileData.id,
        })
        .single()

      if (error) throw error
      return data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts')
        toast({
          title: "Post created",
          description: "Your post has been successfully created.",
        })
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: "Failed to create post. Please try again.",
          variant: "destructive",
        })
        console.error('Error creating post:', error)
      },
    }
  )

  const handlePostSubmit = async () => {
    const postContent = document.querySelector('textarea')?.value
    if (postContent) {
      await createPostMutation.mutateAsync(postContent)
      setIsPostingModalOpen(false)
    }
  }

  if (isLoading) return <div>Loading posts...</div>
  if (error) return <div>Error loading posts</div>

  return (
    <div className={`space-y-4 ${className}`}>
      <Card>
        <CardContent className="pt-4">
          <div className="flex items-center">
          <Avatar userId={profileData.id} size = 'medium' className='mr-3' />
            <Button
              onClick={() => setIsPostingModalOpen(true)}
              variant="outline"
              className="w-full justify-start text-left text-muted-foreground"
            >
              What's on your mind?
            </Button>
            <Button
              onClick={() => setIsPostingModalOpen(true)}
              size="icon"
              className="ml-2"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
            <Avatar userId={post.user_id} className="w-12 h-12" />
              <div>
                <h3 className="font-semibold">{post.profiles?.display_name}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.created_at).toLocaleString()}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setExpandedPost(post.id)}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Comment
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}

      {isPostingModalOpen && (
        <PostingModal onClose={() => setIsPostingModalOpen(false)} onSubmit={handlePostSubmit} />
      )}

        {expandedPost !== null && (
          <ExpandedPostModal 
            postId={expandedPost} 
            onClose={() => setExpandedPost(null)} 
            currentUserId={profileData?.id || ''}
          />
        )}
    </div>
  )
}

interface PostingModalProps {
  onClose: () => void;
  onSubmit: () => void;
}

function PostingModal({ onClose, onSubmit }: PostingModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <h2 className="text-2xl font-bold">Create a Post</h2>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="What's on your mind?" className="min-h-[100px]" />
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={onSubmit}>Post</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// interface ExpandedPostModalProps {
//   postId: number;
//   onClose: () => void;
// }

// function ExpandedPostModal({ postId, onClose }: ExpandedPostModalProps) {
//   const { comments, fetchComments } = useStore()
//   const { isLoading, error } = useQuery(['comments', postId], () => fetchComments(postId))

//   const [newComment, setNewComment] = useState('') 

//   const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setNewComment(e.target.value) // Update comment input state
//   }

  

//   if (isLoading) return <div>Loading comments...</div>
//   if (error) return <div>Error loading comments</div>

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <CardHeader>
//           <h2 className="text-2xl font-bold">Post Details</h2>
//         </CardHeader>
//         <CardContent>
//           {/* Post content here */}
//           {/* <div className="mt-4">
//             <h3 className="font-semibold mb-2">Comments</h3>
//             {comments.map((comment) => (
//               <div key={comment.id} className="mb-2">
//                             <Avatar userId={comment.user_id} className="w-12 h-12" />
//                 <p className="font-semibold">{comment.profiles?.display_name}</p>
//                 <p>{comment.content}</p>
//               </div>
//             ))}
//           </div> */}

//                 <div className="border-t pt-4">
//                     <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Comments</h3>
//                     <div className="space-y-4">
//                       {comments.length > 0 ? (
//                         comments.map((comment) => (
//                           <div key={comment.id} className="flex items-start">
//                             <Avatar userId={comment.user_id} className="w-8 h-8 mr-3" />
//                             <div>
//                               <p className="font-semibold text-neutral-800 dark:text-neutral-200">{comment.profiles?.display_name || 'Unknown User'}</p>
//                               <p className="text-sm text-neutral-600 dark:text-neutral-400">{comment.content}</p>
//                             </div>
//                           </div>
//                         ))
//                       ) : (
//                         <p className="text-neutral-500 dark:text-neutral-400">No comments yet</p>
//                       )}
//                     </div>
//                     <div className="mt-4">
//                       <textarea
//                         value={newComment}
//                         onChange={handleCommentChange}
//                         className="w-full p-3 border rounded-lg dark:bg-neutral-700 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Add your reply..."
//                         rows={3}
//                       ></textarea>
//                       <button
//                         onClick={handleCommentSubmit}
//                         className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                       >
//                         Reply
//                       </button>
//                     </div>
//                   </div>





//         </CardContent>
//         <CardFooter>
//           <Button onClick={onClose}>Close</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }








interface ExpandedPostModalProps {
  postId: number | null
  onClose: () => void
  currentUserId: string
}

export default function ExpandedPostModal({ postId, onClose, currentUserId }: ExpandedPostModalProps) {
  const { posts, comments, fetchComments, addComment } = useStore()
  const [newComment, setNewComment] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const post = posts.find(p => p.id === postId)

  useEffect(() => {
    if (postId) {
      fetchComments(postId)
    }
  }, [postId, fetchComments])

  const handleCommentSubmit = async () => {
    if (!postId || !newComment.trim()) return

    try {
      // Send the new comment to Supabase
      const { data, error } = await supabase
        .from('comments')
        .insert({
          content: newComment,
          post_id: postId,
          user_id: currentUserId,
        })
        .select('*, profiles(display_name)')
        .single()

      if (error) throw error

      // Add the new comment to the local state
      addComment({
        id: data.id,
        content: data.content,
        user_id: data.user_id,
        profiles: data.profiles
      })

      // Clear the input field
      setNewComment('')
    } catch (error) {
      console.error('Error adding comment:', error)
      toast({ title: 'Error', description: 'Failed to add comment. Please try again.', variant: 'destructive' })
    }
  }

  if (!post) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-neutral-700">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Post</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <Avatar userId={post.user_id} size="medium" type="circle" className="mr-3" />
              <div>
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">{post.profiles?.display_name || 'Unknown User'}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{new Date(post.created_at).toLocaleString()}</p>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">{post.description}</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
                  <Heart className={`mr-1 h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  <span className="text-sm">Like</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="mr-1 h-5 w-5" />
                  <span className="text-sm">Comment</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsSaved(!isSaved)}>
                <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-yellow-500 text-yellow-500' : ''}`} />
              </Button>
            </div>
          </div>
          <div className="px-4 pb-4">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Comments</h3>
            <AnimatePresence>
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-start mb-4"
                >
                  <Avatar userId={comment.user_id} size="small" type="circle" className="mr-3" />
                  <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-3 flex-grow">
                    <p className="font-semibold text-neutral-800 dark:text-neutral-200">{comment.profiles?.display_name || 'Unknown User'}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{comment.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="border-t dark:border-neutral-700 p-4">
          <div className="flex items-center">
            <Avatar userId={currentUserId} size="small" type="circle" className="mr-3" />
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow mr-2"
              rows={1}
            />
            <Button onClick={handleCommentSubmit} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}