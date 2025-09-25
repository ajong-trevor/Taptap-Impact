import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart, Handshake, Lightbulb, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-cameroon');
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {heroImage && (
                 <Image
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    data-ai-hint={heroImage.imageHint}
                    height="550"
                    src={heroImage.imageUrl}
                    width="550"
                  />
              )}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Powered by <span className="font-semibold tapsend-fg">TapTapSend</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Connecting Cameroonian Entrepreneurs with Diaspora Sponsors
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Fueling innovation and growth in Cameroon. Fund a project, offer mentorship, and see the impact.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/diaspora">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Fund an Entrepreneur
                    </Button>
                  </Link>
                  <Link href="/entrepreneurs">
                    <Button size="lg" variant="secondary">
                      Submit Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact-stats" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Impact in Numbers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transparent, real-time tracking of our collective effort to empower Cameroonian talent.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-3xl font-bold">120+</CardTitle>
                  <CardDescription>Entrepreneurs Funded</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Handshake className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-3xl font-bold">$50,000+</CardTitle>
                  <CardDescription>Total Investment Raised</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                     <div className="flex items-center space-x-2">
                        <span className="font-bold text-xl tapsend-fg">TapTapSend</span>
                        <BarChart className="h-8 w-8" />
                      </div>
                  </div>
                  <CardTitle className="mt-4 text-3xl font-bold">1,500+</CardTitle>
                  <CardDescription>New TapTapSend Users</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">How It Works</h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold font-headline">1. Submit a Project</h3>
                  <p className="text-sm text-muted-foreground">Entrepreneurs in Cameroon submit their innovative projects, detailing their funding needs and business goals.</p>
                </div>
                <div className="grid gap-1 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
                    <Handshake className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold font-headline">2. Sponsor from Abroad</h3>
                  <p className="text-sm text-muted-foreground">Diaspora members browse projects and provide funding or mentorship directly and securely using TapTapSend.</p>
                </div>
                <div className="grid gap-1 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold font-headline">3. Track the Impact</h3>
                  <p className="text-sm text-muted-foreground">Follow the journey of the entrepreneurs you support through transparent impact reports, photos, and testimonials.</p>
                </div>
              </div>
          </div>
        </section>

        <section id="featured-projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover innovative projects seeking your support right now.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {featuredProjects.map(project => {
                const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
                return (
                  <Card key={project.id} className="overflow-hidden">
                    {projectImage && (
                      <Image
                        alt={project.name}
                        className="aspect-video w-full object-cover"
                        data-ai-hint={projectImage.imageHint}
                        height="310"
                        src={projectImage.imageUrl}
                        width="550"
                      />
                    )}
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.entrepreneurName} - {project.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-bold text-primary">{project.fundingGoal}</div>
                        <Button variant="link" asChild>
                          <Link href="/diaspora">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="flex justify-center">
              <Link href="/diaspora">
                <Button size="lg" variant="outline">
                  Explore All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
