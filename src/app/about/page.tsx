'use client';
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("A valid email is required."),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        mode: "onChange",
    });

    function onSubmit(data: ContactFormValues) {
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        form.reset();
    }

    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                                Our Mission
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                To build a bridge between the Cameroonian diaspora and entrepreneurs at home, creating a powerful ecosystem for growth, innovation, and shared success. We believe in the power of community to fuel development.
                            </p>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Powered by <span className="font-bold tapsend-fg">TapTapSend</span>, we ensure every transaction is secure, every connection is meaningful, and every impact is transparent.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            {aboutImage && (
                                <Image
                                    alt="Our Mission"
                                    className="overflow-hidden rounded-xl object-cover"
                                    data-ai-hint={aboutImage.imageHint}
                                    height="400"
                                    src={aboutImage.imageUrl}
                                    width="600"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="w-full py-12 md:py-24">
                <div className="container max-w-4xl px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">How does funding work with TapTapSend?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                            When you choose to fund a project, you will be guided to complete the transaction using TapTapSend. It's a fast, secure, and low-cost way to send money directly to the entrepreneur's mobile money account in Cameroon. All transactions are tracked for transparency.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">Is my contribution secure?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                            Yes. All financial transactions are handled by TapTapSend, which uses industry-standard security protocols to protect your information. We vet all entrepreneurs and projects, but we also encourage you to read project proposals thoroughly before funding.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">How are entrepreneurs selected?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                            Entrepreneurs submit a detailed project proposal which is reviewed by our team. We look for viability, potential for impact, and clarity of the business plan. We aim to support a diverse range of sectors and locations within Cameroon.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg">Can I contribute without funding?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                            Absolutely! The diaspora's expertise is invaluable. You can "Give Back" by posting non-financial opportunities like mentorship, job openings, or free training workshops on the Diaspora page.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

             <section id="contact" className="w-full py-12 md:py-24 bg-card">
                <div className="container max-w-4xl px-4 md:px-6">
                     <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-bold font-headline">Contact Us</CardTitle>
                            <CardDescription>Have a question or want to partner with us? Drop us a line.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField control={form.control} name="name" render={({ field }) => (
                                            <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                                        )}/>
                                        <FormField control={form.control} name="email" render={({ field }) => (
                                            <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                                        )}/>
                                     </div>
                                     <FormField control={form.control} name="subject" render={({ field }) => (
                                        <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="Question about a project" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="message" render={({ field }) => (
                                        <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Your message here..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
