"use client"
import React from 'react'
import { Sidebar } from './sidebar'

export default function nav() {
  return (
    <div className='fixed w-full z-50 flex sm:px-20 py-7 md:py-5 justify-between px-5 bg-white'>
      <img src='/logo.png' className='sm:h-11 h-8 flex items-center mt-1'/>
      <Sidebar/>
    </div>
  )
}
