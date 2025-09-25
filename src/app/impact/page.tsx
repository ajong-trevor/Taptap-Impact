import Image from 'next/image';
import { impactStories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="bg-card">
      <div className="container py-12 md:py-24">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Impact Powered by <span className="font-semibold tapsend-fg">TapTapSend</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">Transparency & Real Results</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            See the tangible impact of your support. Entrepreneurs share their progress, achievements, and stories.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:gap-12">
          {impactStories.map((story) => {
            const storyImage = PlaceHolderImages.find((p) => p.id === story.imageId);
            return (
              <Card key={story.id} className="w-full overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <CardHeader className="p-0">
                      <CardDescription className="font-semibold text-primary">{story.projectName}</CardDescription>
                      <CardTitle className="text-2xl font-headline">{story.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      <p className="text-muted-foreground">{story.report}</p>
                      <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground relative">
                        <Quote className="absolute -top-1 -left-3 h-6 w-6 text-primary/30" />
                        {story.testimonial}
                      </blockquote>
                    </CardContent>
                    <CardFooter className="p-0 mt-4">
                      <p className="text-sm text-muted-foreground">{story.date}</p>
                    </CardFooter>
                  </div>
                  {storyImage && (
                    <div className="aspect-video md:aspect-auto">
                      <Image
                        alt={story.title}
                        className="object-cover w-full h-full"
                        data-ai-hint={storyImage.imageHint}
                        height="450"
                        src={storyImage.imageUrl}
                        width="600"
                      />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
