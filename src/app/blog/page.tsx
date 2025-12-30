import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/data';
import { getImageData } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles on software development, industry trends, and company news.',
};

export default function BlogPage() {
  const headerImage = getImageData("blog-header");

  return (
    <div>
      <PageHeader
        title="Our Blog"
        subtitle="Insights on technology, design, and business growth"
        imageId={headerImage.id}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const postImage = getImageData(post.imageId);
              return (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                  <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:border-primary">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        data-ai-hint={postImage.imageHint}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardDescription>{post.date} &bull; {post.author}</CardDescription>
                      <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      <div className="mt-4 font-semibold text-primary flex items-center">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
