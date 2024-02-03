'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/images/logo.svg'
                    alt='Prompit Logo'
                    height={30}
                    width={30}
                    className='object-contain'
                />
                <p className='logo_text'>Prompit</p>
            </Link>
        </nav>
    )
}

export default Nav