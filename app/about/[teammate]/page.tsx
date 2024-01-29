import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import AuthorLayoutSeg from '@/layouts/AuthorLayoutSeg'

export async function generateMetadata({
  params,
}: {
  params: { teammate: string }
}): Promise<string> {
  const teammate = decodeURIComponent(params.teammate)
  return teammate
}

export default function Page(params: { params: { teammate: string } }) {
  const teammate = decodeURIComponent(params.params.teammate)
  const author = allAuthors.find((p) => p.name === teammate) as Authors
  const mainContent = coreContent(author)
  return (
    <>
      <AuthorLayoutSeg content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayoutSeg>
    </>
  )
}
