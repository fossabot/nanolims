import { useSession } from "next-auth/react"

export default function Admin() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // Redirect to login page.
        return { redirectTo: "/login" }
    },
  })

  console.log(status)

  if (status === "loading") {
    return "Loading or not authenticated..."
  }

  return "User is logged in"

}