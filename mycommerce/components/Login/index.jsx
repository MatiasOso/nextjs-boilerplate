'use client'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
    const { data: session } = useSession();
    if (session && session.user) {
        return (
            <div>
                <p>Signed in as {session.user.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }

  return (
    <button onClick={() => signIn()}>Sign in</button>
  )
}

export default Login