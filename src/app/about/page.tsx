import Image from "next/image";
import type { Metadata } from 'next';
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import { getImageData } from "@/lib/placeholder-images";
import { Target, Eye, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, values, and expert team at AppyWeb Solutions.',
};

export default function AboutPage() {
  const headerImage = getImageData("about-header");

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower startups and growing businesses by transforming their ideas into reliable, scalable, and user-friendly digital products that drive success."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be a leading partner in digital innovation, recognized for our commitment to quality, integrity, and building long-term relationships with our clients."
    },
    {
      icon: Handshake,
      title: "Our Values",
      description: "Collaboration, Excellence, and Customer-Centricity are at the core of everything we do. We believe in working together to achieve outstanding results."
    },
  ];

  return (
    <div>
      <PageHeader
        title="About AppyWeb Solutions"
        subtitle="The team behind your next great digital product"
        imageId={headerImage.id}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              We Help You Build The Future
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AppyWeb Solutions was founded on the principle that great software can be a powerful catalyst for growth. We are a passionate team of designers, developers, and strategists dedicated to helping our clients navigate the complexities of the digital world and achieve their business goals.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our strength lies in our individual expertise and our collective passion for technology.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const memberImage = getImageData(member.imageId);
              return (
                <Card key={member.id} className="text-center overflow-hidden">
                   <div className="bg-gradient-to-br from-primary/20 to-secondary h-24" />
                   <div className="p-6 flex flex-col items-center -mt-16">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-secondary">
                        <Image
                            src={memberImage.imageUrl}
                            alt={`Portrait of ${member.name}`}
                            data-ai-hint={memberImage.imageHint}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="mt-4 font-headline text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
