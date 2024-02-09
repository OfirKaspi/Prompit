'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import Profile from '@components/Profile'

const MyProfile = () => {

    const router = useRouter()
    const { data: session } = useSession()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            if (session?._id) {
                try {
                    const response = await fetch(`/api/users/${session._id}/posts`)
                    const data = await response.json()
                    setPosts(data)
                } catch (error) {
                    console.error('Error fetching posts:', error)
                }
            }
        }

        if (session) {
            fetchPosts()
        }
    }, [session])

    const handleDelete = async (post) => {
        const hasConfirmed = confirm('Are you sure you want to delete this prompt?')

        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, { method: 'DELETE' })
                const filteredPosts = posts.filter((p) => p._id !== post._id)
                setPosts(filteredPosts)
            } catch (error) {
                console.log('Error delete prompt: ', error)
            }
        }
    }

    const handleEdit = async (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    return (
        <Profile
            name='My'
            desc='Welcome to your personalized profile page'
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile