'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Profile from '@components/profile'

const MyProfile = () => {

    const { data: session } = useSession()
    const [posts, setPosts] = useState([])

    console.log('posts', posts);
    console.log('session id', session?._id)

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

    const handleDelete = async () => {

    }

    const handleEdit = async () => {

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