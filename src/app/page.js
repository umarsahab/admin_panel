'use client'
import LogIn from "@/components/Login";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='`flex min-h-screen flex-col items-center justify-between m-20 p-24 bg-sky-500 ${inter.className}`'>
      <h1 className='font-bold text-[50px] rounded bg-sky-300  flex-col items-center'>Admin_Panel</h1>
      <div className="flex min-h-screen flex-col items-center p-24 bg-white border-solid border-2 border-sky-500">
      <LogIn/>
      </div>


    </main>
  )
}
