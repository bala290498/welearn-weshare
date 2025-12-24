import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getBlogBySlug, getAllBlogs } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { markdownToHtml } from '@/lib/markdown'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

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
    },
    twitter: {
      card: 'summary',
      title: `${blog.title} - WeLearnWeShare`,
      description: blog.description,
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
          {/* Back to Blogs */}
          <div className="mb-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>

          {/* Blog Header */}
          <header className="mb-10 md:mb-12">
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                {blog.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
              {blog.title}
            </h1>
            
            {/* Sub-heading (Description) */}
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              {blog.description}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Divider */}
            <div className="border-t border-gray-200 mb-8"></div>
          </header>

          {/* Blog Content */}
          <div 
            className="prose prose-lg max-w-none 
              prose-headings:text-gray-900 prose-headings:font-semibold
              prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:font-semibold prose-h1:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:font-semibold prose-h2:tracking-tight prose-h2:text-gray-900 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold prose-h3:text-gray-800
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold prose-h4:text-gray-800
              prose-p:text-gray-700 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-base prose-p:text-[16px]
              prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-gray-900 prose-strong:font-semibold prose-strong:text-[16px]
              prose-ul:my-6 prose-ul:space-y-3 prose-ul:pl-6 prose-ul:list-disc prose-ul:marker:text-gray-500
              prose-ol:my-6 prose-ol:space-y-3 prose-ol:pl-6 prose-ol:list-decimal prose-ol:marker:text-gray-500 prose-ol:marker:font-semibold
              prose-li:text-gray-700 prose-li:leading-relaxed prose-li:mb-2 prose-li:pl-2
              prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
              prose-blockquote:border-l-4 prose-blockquote:border-primary-300 prose-blockquote:pl-4 prose-blockquote:pr-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-6 prose-blockquote:bg-gray-50
              prose-hr:border-gray-300 prose-hr:my-10 prose-hr:border-t-2
              prose-img:hidden
              [&_h1]:!bg-transparent [&_h1]:!border-none [&_h1]:!p-0
              [&_h2]:!bg-transparent [&_h2]:!p-0 [&_h2]:!text-2xl [&_h2]:!font-semibold [&_h2]:!mt-10 [&_h2]:!mb-5 [&_h2]:!border-b [&_h2]:!border-gray-200 [&_h2]:!pb-2
              [&_h3]:!bg-transparent [&_h3]:!p-0 [&_h3]:!block [&_h3]:!text-xl [&_h3]:!font-semibold [&_h3]:!mt-8 [&_h3]:!mb-4 [&_h3]:!text-gray-800
              [&_p]:!mb-6 [&_p]:!text-gray-700 [&_p]:!leading-relaxed [&_p]:!text-base
              [&_strong]:!font-semibold [&_strong]:!text-gray-900
              [&_ul]:!my-6 [&_ul]:!space-y-3 [&_ul]:!pl-6 [&_ul]:!list-disc
              [&_ol]:!my-6 [&_ol]:!space-y-3 [&_ol]:!pl-6 [&_ol]:!list-decimal
              [&_li]:!mb-2 [&_li]:!text-gray-700 [&_li]:!leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Back to Blogs Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}


