"use client"
import React from 'react'
import { Sidebar } from './sidebar'

export default function nav() {
  return (
    <div className='flex sm:px-20 pt-8 justify-between px-5'>
      <img src='/logo.png' className='sm:h-11 h-9 flex'/>
      <Sidebar/>
    </div>
  )
}
