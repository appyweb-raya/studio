import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { jobOpenings } from '@/lib/data';
import { getImageData } from '@/lib/placeholder-images';
import { Briefcase, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join our team! Explore job openings and learn about the culture at AppyWeb Solutions.',
};

export default function CareersPage() {
  const headerImage = getImageData("careers-header");

  return (
    <div>
      <PageHeader
        title="Join Our Team"
        subtitle="Help us build the future of digital products"
        imageId={headerImage.id}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Work With Us?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're a passionate, remote-first team dedicated to innovation, collaboration, and personal growth. At AppyWeb, you'll work on challenging projects, learn from talented peers, and make a real impact.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">Current Openings</h3>
            {jobOpenings.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                {jobOpenings.map((job) => (
                    <AccordionItem key={job.id} value={job.id}>
                    <AccordionTrigger className="text-left hover:no-underline">
                        <div className='flex-1'>
                            <h4 className="font-headline text-xl">{job.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                                <span className='flex items-center'><Briefcase className='w-4 h-4 mr-1.5' /> {job.type}</span>
                                <span className='flex items-center'><MapPin className='w-4 h-4 mr-1.5' /> {job.location}</span>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 bg-secondary rounded-b-md">
                        <p className="mb-4">{job.description}</p>
                        <h5 className="font-semibold mb-2">Requirements:</h5>
                        <ul className="list-disc list-inside space-y-1 mb-6 text-muted-foreground">
                        {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                        </ul>
                        <Button asChild>
                            <Link href={`mailto:careers@appyweb.com?subject=Application for ${job.title}`}>Apply Now</Link>
                        </Button>
                    </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            ) : (
                <div className="text-center text-muted-foreground bg-secondary p-8 rounded-lg">
                    <p className="text-lg">We don't have any open positions at the moment, but we're always interested in hearing from talented people.</p>
                    <p className="mt-2">Feel free to send your resume to <Link href="mailto:careers@appyweb.com" className="text-primary hover:underline">careers@appyweb.com</Link>.</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
