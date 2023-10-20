import Nav from "@components/Nav"
import "@styles/globals.css"
import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
}

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
export default layout
