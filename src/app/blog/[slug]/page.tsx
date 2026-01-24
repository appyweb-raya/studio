import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import { getImageData } from '@/lib/placeholder-images';

/**
 * Static params for GitHub Pages export
 */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Metadata (Next.js 15 expects params as Promise)
 */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

/**
 * Page component (DO NOT type PageProps in Next 15)
 */
export default async function BlogPostPage(
  { params }: { params: { slug: string } }
) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = getImageData(post.imageId);

  return (
    <article>
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-semibold mb-2">
            {post.date} &bull; {post.author}
          </p>

          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-4xl -mt-16">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <Image
            src={postImage.imageUrl}
            alt={post.title}
            data-ai-hint={postImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div
          className="prose prose-lg prose-invert mx-auto max-w-3xl text-foreground/90"
          dangerouslySetInnerHTML={{
            __html: post.content.repeat(10),
          }}
        />
      </div>
    </article>
  );
}
