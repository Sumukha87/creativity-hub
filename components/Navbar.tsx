import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProvider from './AuthProvider'
import { getCurrentUser } from '@/lib/session'
import {signOut} from 'next-auth/react'
import ProfileMenu from './ProfileMenu'
import Button from './Button'

const Navbar = async () => {
    const session=await getCurrentUser()
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'>
              <h1 className='font-extrabold'>Creativity Hub</h1>
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
            

            </ul>

        </div>
        <div className='flexCenter gap-4'> 
            {session?.user ?(
                <>
                <ProfileMenu session={session} />
                <Link href="/create-project">
              <Button title='Share work' />
            </Link>
                {/* <button type='button'className='text-sm' onClick={signOut}>Sign Out</button> */}
                </>
            ): (

              <button className='bg-sky-500/100 p-2 rounded-xl'> <AuthProvider/></button>
            )}
        </div>
    </nav>
  )
}

export default Navbar