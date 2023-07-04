// Layout for admin pages
'use client'
import { SessionProvider } from 'next-auth/react'

const layout = ({children}) => {
  return (
    <SessionProvider basePath="/api/v1/auth"> 
    {children}
    </SessionProvider>
  )
}

export default layout
