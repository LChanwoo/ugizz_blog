import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  // content: Omit<Authors[], 'body'>
  authors: Authors[]
}

export default function AuthorLayout({ children, authors }: Props) {
  // const { name, avatar, occupation, company, email, twitter, linkedin, github } = content[0]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {authors.map((author) => (
            <div className="flex flex-row items-center space-x-2 pt-8">
              <Image
                src={author.avatar!}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
              <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
                {author.name}
              </h3>
              <div className="text-gray-500 dark:text-gray-400">{author.occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">{author.company}</div>
              <div className="flex space-x-3 pt-6">
                <SocialIcon kind="mail" href={`mailto:${author.email}`} />
                <SocialIcon kind="github" href={author.github} />
                <SocialIcon kind="linkedin" href={author.linkedin} />
                <SocialIcon kind="twitter" href={author.twitter} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
