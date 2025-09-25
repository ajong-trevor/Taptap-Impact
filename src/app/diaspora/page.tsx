'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, Handshake, Heart, PiggyBank, Search } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { projects, opportunities } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { toast } from "@/hooks/use-toast";

const opportunityFormSchema = z.object({
  providerName: z.string().min(2, "Name is required."),
  contact: z.string().email("Please enter a valid email or contact info."),
  type: z.enum(['Mentorship', 'Job', 'Training', 'Other']),
  title: z.string().min(5, "Title must be at least 5 characters."),
  description: z.string().min(20, "Description must be at least 20 characters."),
});

type OpportunityFormValues = z.infer<typeof opportunityFormSchema>;

export default function DiasporaPage() {
  
  const form = useForm<OpportunityFormValues>({
    resolver: zodResolver(opportunityFormSchema),
    mode: "onChange",
  });

  function onOpportunitySubmit(data: OpportunityFormValues) {
    toast({
      title: "Opportunity Posted!",
      description: "Thank you for giving back! Your opportunity is now visible to entrepreneurs.",
    });
    console.log(data);
    form.reset();
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">Support Cameroonian Talent</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Your expertise and financial support can make a world of difference. Choose how you want to contribute today.
        </p>
      </div>

      <Tabs defaultValue="fund" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto h-auto">
          <TabsTrigger value="fund" className="py-2 flex items-center gap-2">
            <PiggyBank className="h-5 w-5" />
            Fund a Project
          </TabsTrigger>
          <TabsTrigger value="give-back" className="py-2 flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Give Back
          </TabsTrigger>
        </TabsList>

        <TabsContent value="fund" className="mt-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search projects by name or entrepreneur..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  <SelectItem value="Tech">Tech</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Art">Art</SelectItem>
                  <SelectItem value="Fashion">Fashion</SelectItem>
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
                const fundingProgress = (parseInt(project.fundingRaised.replace('$', '').replace(',', '')) / parseInt(project.fundingGoal.replace('$', '').replace(',', ''))) * 100;
                return (
                  <Card key={project.id} className="flex flex-col">
                    <CardHeader>
                        {projectImage && (
                             <Image
                                alt={project.name}
                                className="aspect-video w-full object-cover rounded-t-lg"
                                data-ai-hint={projectImage.imageHint}
                                height="200"
                                src={projectImage.imageUrl}
                                width="350"
                            />
                        )}
                      <CardTitle className="mt-4">{project.name}</CardTitle>
                      <CardDescription>{project.entrepreneurName} - {project.location}</CardDescription>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-primary-foreground bg-primary/80 last:mr-0 mr-1">
                        {project.sector}
                      </span>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>
                      <Progress value={fundingProgress} className="w-full h-2" />
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-bold text-foreground">{project.fundingRaised}</span> raised of {project.fundingGoal}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <span className="tapsend-fg font-bold mr-1">TapTapSend</span> to Fund
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="give-back" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-bold font-headline">Current Opportunities</h3>
                     <div className="space-y-4">
                        {opportunities.map(op => (
                            <Card key={op.id}>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle>{op.title}</CardTitle>
                                        {op.type === 'Mentorship' && <Handshake className="h-5 w-5 text-muted-foreground" />}
                                        {op.type === 'Job' && <Briefcase className="h-5 w-5 text-muted-foreground" />}
                                        {op.type === 'Training' && <ArrowRight className="h-5 w-5 text-muted-foreground" />}
                                    </div>
                                    <CardDescription>
                                        Posted by {op.providerName}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{op.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0">Contact: {op.contact}</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-headline">Post an Opportunity</h3>
                     <Card>
                        <CardHeader>
                            <CardTitle>Share Your Expertise</CardTitle>
                            <CardDescription>Offer mentorship, jobs, or training to empower entrepreneurs.</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onOpportunitySubmit)} className="space-y-6">
                                <FormField control={form.control} name="providerName" render={({ field }) => (
                                    <FormItem><FormLabel>Your Name / Company</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                 <FormField control={form.control} name="contact" render={({ field }) => (
                                    <FormItem><FormLabel>Contact Info</FormLabel><FormControl><Input placeholder="email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField control={form.control} name="type" render={({ field }) => (
                                    <FormItem><FormLabel>Opportunity Type</FormLabel>
                                    <Select onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        <SelectItem value="Mentorship">Mentorship</SelectItem>
                                        <SelectItem value="Job">Job Opportunity</SelectItem>
                                        <SelectItem value="Training">Training/Workshop</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                    </Select><FormMessage /></FormItem>
                                )}/>
                                <FormField control={form.control} name="title" render={({ field }) => (
                                    <FormItem><FormLabel>Title</FormLabel><FormControl><Input placeholder="e.g., Marketing Mentorship" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                 <FormField control={form.control} name="description" render={({ field }) => (
                                    <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea placeholder="Describe the opportunity..." {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <Button type="submit" className="w-full">Post Opportunity</Button>
                            </form>
                        </Form>
                        </CardContent>
                     </Card>
                </div>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
