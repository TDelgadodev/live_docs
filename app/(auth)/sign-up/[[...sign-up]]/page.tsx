import { SignedOut } from '@clerk/nextjs'
import React from 'react'

const SignOutPage = () => {
  return (
    <main className='auth-page'>
        <SignedOut />
    </main>
  )
}

export default SignOutPage