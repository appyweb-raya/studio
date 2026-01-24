import { notFound } from 'next/navigation';

/**
 * Static params for GitHub Pages export
 */
export async function generateStaticParams() {
  return [
    { slug: 'service-one' },
    { slug: 'service-two' },
    { slug: 'service-three' },
  ];
}

/**
 * Page component
 * DO NOT type props — Next.js 15 typing workaround
 */
export default async function ServicePage(props: any) {
  const slug = props.params.slug;

  // Example service data
  const services: Record<string, { title: string; description: string }> = {
    'service-one': {
      title: 'Service One',
      description: 'Description for service one',
    },
    'service-two': {
      title: 'Service Two',
      description: 'Description for service two',
    },
    'service-three': {
      title: 'Service Three',
      description: 'Description for service three',
    },
  };

  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-lg text-muted-foreground">{service.description}</p>
    </section>
  );
}
