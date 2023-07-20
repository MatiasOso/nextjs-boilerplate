// Layout for admin pages
'use client'
import { SessionProvider } from 'next-auth/react'
// Sirve para que el usuario no tenga que volver a iniciar sesion cada vez que se recargue la pagina
const layout = ({children}) => {
  return (
    <SessionProvider basePath="/api/v1/auth"> 
    {children}
    </SessionProvider>
  )
}

export default layout
