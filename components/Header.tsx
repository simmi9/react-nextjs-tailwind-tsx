import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className="flex  justify-between items-center p-3 max-w-6xl mx-auto">
    <div className="flex gap-4  text-amber-200">
    <MenuItem title="Home" address="/" Icon={AiFillHome}></MenuItem>
    <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}></MenuItem>
    </div>
    <div className="flex items-center">
      <DarkModeSwitch />
    <Link  href={'/'} className= " flex gap-1 items-center">
<span className="text-2xl font-bold bg-amber-500 py-1 px-2 roundd-lg"> IMDB</span>
<span className="text-2xl font-bold bg-amber-500 py-1 px-2"> Clone</span>
    </Link>
    </div>
    </div>
  )
}
