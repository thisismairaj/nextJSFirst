"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/profile"

const MyProfile = () => {
  const handleEdit = (id, data) => {}
  const handleDelete = async (id) => {}
  return (
    <Profile
      name="My profile"
      desc="Welcome to profile"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}
export default MyProfile
