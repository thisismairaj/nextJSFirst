"use client"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import Form from "@components/Form"

const CreatePrompt = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setIsSubmitting] = useState(false)
  const [post, setPost] = useState({ prompt: "", tag: "" })

  const createPromp = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)
    try {
      response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      })
      if (response.ok) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt