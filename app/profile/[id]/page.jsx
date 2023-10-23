"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Profile from "@components/Profile"

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams()
  const userName = searchParams.get("name")
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json()

      setUserPosts(data)
    }

    if (params?.id) fetchPosts()
  }, [params.id])
  return (
    <Profile
      posts={userPosts}
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
    />
  )
}
export default UserProfile
