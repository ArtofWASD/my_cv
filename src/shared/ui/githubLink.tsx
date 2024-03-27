'use client'
import Link from 'next/link'
import React from 'react'

export const GithubLink = ({link, text}:{link: string, text: string}) => {
  return (
    <div className="flex gap-1">
      <p className="font-bold">Github</p>: <Link href={link}>{text}</Link>
    </div>
  )
}

