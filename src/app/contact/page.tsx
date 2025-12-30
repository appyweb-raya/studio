import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { ContactForm } from '@/components/contact-form';
import { getImageData } from '@/lib/placeholder-images';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AppyWeb Solutions. We\'re here to answer your questions and discuss your project.',
};

export default function ContactPage() {
  const headerImage = getImageData("contact-header");

  const contactDetails = [
      { icon: Mail, text: 'hello@appyweb.com', href: 'mailto:hello@appyweb.com' },
      { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { icon: MapPin, text: '123 Digital Avenue, Tech City', href: '#' },
  ]

  return (
    <div>
      <PageHeader
        title="Get In Touch"
        subtitle="We'd love to hear from you. Let's build something amazing together."
        imageId={headerImage.id}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">
                Have a project in mind or just want to say hello? Reach out to us using the information below or fill out the contact form.
              </p>
              <div className="mt-8 space-y-6">
                {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-start">
                        <div className='bg-secondary p-3 rounded-md mr-4'>
                            <detail.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <Link href={detail.href} className='text-lg hover:text-primary transition-colors'>{detail.text}</Link>
                        </div>
                    </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
                <h3 className="font-headline text-2xl font-bold mb-6">Send us a message</h3>
                <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
