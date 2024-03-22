'use client'
import Link from 'next/link'
import React from 'react'

export const GithubLink = ({link, text}:{link: string, text: string}) => {
  return (
    <div>
      <p>Github: <Link href={link}>{text}</Link></p>
    </div>
  )
}

