import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
interface IMenuProps{
    title:string, address:string, Icon:IconType,
}
export default function MenuItem({title, address,Icon}:IMenuProps) {
  return (
    <div>
      <Link href={address} className='hover:text-amber-200' >
      <Icon className="text-2xl sm:hidden"/>
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
      </Link>
    </div>
  )
}
 