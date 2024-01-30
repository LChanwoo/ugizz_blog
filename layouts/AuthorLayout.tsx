import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from 'next/link'

interface Props {
  content: Omit<Authors, '_id' | '_raw' | 'body'>
  authors: Authors[]
  children: ReactNode
}

export default function AuthorLayout({ children, content, authors }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About Teammates
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {authors.map((author, i) => (
            <div className="flex flex-row items-center space-x-2 pt-8" key={i}>
              <Link href={`/about/${author.slug}`}>
                <Image
                  src={author.avatar!}
                  alt="avatar"
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full"
                  key={i}
                />
                <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
                  {author.name}
                </h3>
              </Link>
              <div className="text-gray-500 dark:text-gray-400" key={i}>
                {author.occupation}
              </div>
              <div className="text-gray-500 dark:text-gray-400" key={i}>
                {author.company}
              </div>
              <div className="flex space-x-3 pt-6">
                <SocialIcon kind="mail" key={i} href={`mailto:${author.email}`} />
                <SocialIcon kind="github" key={i} href={author.github} />
                <SocialIcon kind="linkedin" key={i} href={author.linkedin} />
                <SocialIcon kind="twitter" key={i} href={author.twitter} />
              </div>
            </div>
          ))}
        </div>
        <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
          <h2> 관련 페이지</h2>
          {children}
        </div>
      </div>
    </>
  )
}
