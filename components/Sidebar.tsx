'use client';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer';
const Sidebar = ({user}:SiderbarProps) => {
    const pathname=usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
      <Link href="/" className=' flex mb-12 cursor-pointer items-center gap-2'>
<Image
 src="/icons/logo.svg" 
 width={33} 
 height={32}
 alt='MyBank logo'
  className='size-[24px] max-xl:size-14'
 />
 <h1 className='sidebar-logo'>MyBank</h1>
      </Link>
      {sidebarLinks.map((item)=>{
        const isActive=pathname===item.route||pathname.startsWith(`${item.route}/`)
        return (
            <Link  href={item.
            route} key={item.label}
          className={cn('sidebar-link',{
                'bg-bank-gradient':isActive

            })}
            >
                <div className='relative size-6'>
<Image src={item.imgURL}
alt={item.label}
fill  
 
    />
                </div>
                <p className={cn('sidebar-label',{'!text-white':isActive})}>{item.label}</p>
            </Link >
        )
      })}
USER
        </nav>
      <Footer user={user}/>
    </section >
  )
}
export default Sidebar