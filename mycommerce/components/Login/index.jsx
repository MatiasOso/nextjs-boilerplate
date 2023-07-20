'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Product from '../../app/admin/product/page'
const Login = () => {
    const { data: session } = useSession();
    if (session && session.user) {
        return (
            <div>
                <p>Signed in as {session.user.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
                <Product></Product>
            </div>
        )
    }

  return (
    <button onClick={() => signIn()}>Ingresar</button>
  )
}

export default Login