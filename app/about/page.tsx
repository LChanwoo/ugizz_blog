import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.name === '양수원') as Authors
  const author2 = allAuthors.find((p) => p.name === '이찬우') as Authors
  const author3 = allAuthors.find((p) => p.name === '전상언') as Authors
  const author4 = allAuthors.find((p) => p.name === '최현용') as Authors
  const authors = [author, author2, author3, author4]

  return (
    <>
      <AuthorLayout authors={authors}>
        {/* <MDXLayoutRenderer code={author4.body.code} /> */}
      </AuthorLayout>
    </>
  )
}
