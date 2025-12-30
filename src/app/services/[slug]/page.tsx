import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { services } from '@/lib/data';
import { getImageData } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceImage = getImageData(service.imageId);

  const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3);

  return (
    <div>
        <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
            <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                data-ai-hint={serviceImage.imageHint}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl">
                 <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Service
                </Badge>
                <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                {service.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl">
                {service.shortDescription}
                </p>
            </div>
        </section>


        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="font-headline text-2xl font-bold mb-4">Service Overview</h2>
                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p>{service.longDescription}</p>
                        <p>Our approach is collaborative and transparent. We work closely with you at every stage to ensure the final product aligns perfectly with your vision and business goals. We believe in building not just software, but partnerships.</p>
                        <h3 className="font-headline text-xl font-bold mt-8 mb-4 text-foreground">What's Included</h3>
                        <ul>
                            <li>Initial consultation and strategy session</li>
                            <li>Full UI/UX design and prototyping</li>
                            <li>Agile development process with regular check-ins</li>
                            <li>Rigorous testing and quality assurance</li>
                            <li>Deployment and launch support</li>
                            <li>Post-launch maintenance options</li>
                        </ul>
                    </div>
                </div>
                <aside className="lg:col-span-1">
                    <div className="sticky top-24">
                        <div className="bg-secondary rounded-lg p-6">
                            <h3 className="font-headline text-xl font-bold mb-4">Ready to Start?</h3>
                            <p className="text-muted-foreground mb-6">Let's discuss how our {service.title} service can help your business.</p>
                            <Button asChild className="w-full font-semibold">
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                        </div>
                        <div className="mt-8">
                            <h3 className="font-headline text-xl font-bold mb-4">Other Services</h3>
                            <ul className="space-y-3">
                                {otherServices.map(other => (
                                    <li key={other.slug}>
                                        <Link href={`/services/${other.slug}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                                            <other.icon className="w-4 h-4 mr-3 text-primary" />
                                            {other.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
  );
}
