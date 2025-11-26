import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getBlogBySlug, getAllBlogs } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { markdownToHtml } from '@/lib/markdown'
import Image from 'next/image'

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((blog) => ({
    id: blog.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const blogData = getBlogBySlug(id)
  
  if (!blogData) {
    return {
      title: 'Blog Post Not Found - WeLearnWeShare',
    }
  }

  const blog = blogData.frontmatter

  return {
    title: `${blog.title} - WeLearnWeShare`,
    description: blog.description,
    openGraph: {
      title: `${blog.title} - WeLearnWeShare`,
      description: blog.description,
      type: 'article',
      url: `https://welearnweshare.com/blogs/${id}`,
      siteName: 'WeLearnWeShare',
      publishedTime: blog.date,
      authors: [blog.author],
      ...(blog.image && {
        images: [blog.image],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blog.title} - WeLearnWeShare`,
      description: blog.description,
      ...(blog.image && {
        images: [blog.image],
      }),
    },
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blogData = getBlogBySlug(id)

  if (!blogData) {
    notFound()
  }

  const blog = blogData.frontmatter
  const htmlContent = await markdownToHtml(blogData.content)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <article className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          {/* Blog Header */}
          <header className="mb-8 md:mb-12">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                {blog.category}
              </span>
            </div>
            <h1 className="text-[clamp(1.75rem,4vw,3rem)] md:text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">Author:</span>
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Published:</span>
                <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            {blog.image && (
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            )}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            {/* Divider between header and content */}
            <div className="border-t border-gray-200 pt-8"></div>
          </header>

          {/* Blog Content */}
          <div 
            className="prose prose-lg max-w-none 
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:pt-6 prose-h1:border-t-2 prose-h1:border-primary-500 prose-h1:bg-primary-50 prose-h1:px-4 prose-h1:py-3 prose-h1:rounded-lg prose-h1:text-primary-900 prose-h1:first:mt-0 prose-h1:first:border-t-0 prose-h1:first:pt-0
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pt-4 prose-h2:pb-3 prose-h2:border-l-4 prose-h2:border-primary-500 prose-h2:bg-primary-50 prose-h2:px-4 prose-h2:py-2 prose-h2:rounded prose-h2:text-primary-900 prose-h2:first:mt-0
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold prose-h3:text-primary-700 prose-h3:bg-primary-50 prose-h3:px-3 prose-h3:py-2 prose-h3:rounded prose-h3:inline-block
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold prose-h4:text-primary-600
              prose-p:text-gray-700 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-base
              prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-3 prose-ul:pl-6
              prose-ol:my-6 prose-ol:space-y-3 prose-ol:pl-6
              prose-li:text-gray-700 prose-li:leading-relaxed prose-li:mb-2
              prose-code:text-primary-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-8 prose-blockquote:bg-gray-50 prose-blockquote:rounded-r
              prose-hr:border-gray-300 prose-hr:my-10 prose-hr:border-t-2
              prose-img:rounded-lg prose-img:my-8 prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Back to Blogs */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
            >
              ← Back to Blogs
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

