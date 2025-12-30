import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getImageData } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the range of services we offer, from custom web development to mobile apps and UI/UX design.',
};

export default function ServicesPage() {
  const headerImage = getImageData("services-header");

  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive solutions to build and grow your business"
        imageId={headerImage.id}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.slug} className="flex flex-col hover:border-primary transition-colors duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
