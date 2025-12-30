import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, PenTool, Smartphone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, services, testimonials } from "@/lib/data";
import { getImageData } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = getImageData("hero");
  
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            From Idea to Impact
          </Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Building Digital Products That Drive Business Growth
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl">
            We are a software development company specializing in website and application development for startups and growing businesses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/40">
              <Link href="/services">Our Services <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We help companies design, build, and scale reliable digital products tailored to their business goals.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Card key={service.slug} className="flex flex-col text-center items-center hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/services">View All Services <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Work</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We take pride in delivering solutions that are not only user-friendly but also business-driven.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => {
              const projectImage = getImageData(project.imageId);
              return (
                <Link href="#" key={index} className="group block">
                  <Card className="overflow-hidden h-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        data-ai-hint={projectImage.imageHint}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-headline text-xl font-semibold">{project.title}</h3>
                      <p className="mt-2 text-muted-foreground">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
