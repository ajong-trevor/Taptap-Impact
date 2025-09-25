'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const projectFormSchema = z.object({
  entrepreneurName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  projectName: z.string().min(5, "Project name must be at least 5 characters."),
  location: z.string().min(2, "Location is required."),
  sector: z.enum(['Tech', 'Agriculture', 'Art', 'Fashion', 'Food', 'Education', 'Other']),
  summary: z.string().min(50, "Project summary must be at least 50 characters.").max(500, "Summary cannot exceed 500 characters."),
  fundingGoal: z.coerce.number().min(100, "Funding goal must be at least $100."),
  proposal: z.any().refine((files) => files?.length === 1, "Proposal document is required."),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

const defaultValues: Partial<ProjectFormValues> = {
  // your default values here
};

export default function EntrepreneursPage() {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProjectFormValues) {
    toast({
      title: "Project Submitted!",
      description: "Your project proposal has been received and is now under review.",
    });
    console.log(data);
    form.reset();
  }

  return (
    <div className="container max-w-3xl py-12 md:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">Turn Your Vision into Reality</h1>
        <p className="text-muted-foreground md:text-xl">
          Submit your project proposal to connect with diaspora sponsors who are ready to invest in Cameroonian talent.
        </p>
      </div>

      <div className="my-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold font-headline border-b pb-2">About You</h2>
                <FormField
                    control={form.control}
                    name="entrepreneurName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., Jeanne Atangana" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold font-headline border-b pb-2">Your Project</h2>
                <FormField
                    control={form.control}
                    name="projectName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., Yaoundé Code Academy" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Douala" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="sector"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Sector</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a project sector" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Tech">Tech</SelectItem>
                                    <SelectItem value="Agriculture">Agriculture</SelectItem>
                                    <SelectItem value="Art">Art</SelectItem>
                                    <SelectItem value="Fashion">Fashion</SelectItem>
                                    <SelectItem value="Food">Food</SelectItem>
                                    <SelectItem value="Education">Education</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                 </div>
                 <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Project Summary</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="Briefly describe your project, its goals, and its potential impact (max 500 characters)."
                            className="resize-none"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fundingGoal"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Funding Goal (in USD)</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="$5000" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                  control={form.control}
                  name="proposal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Proposal Document</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type="file" className="pl-12" accept=".pdf,.doc,.docx,.txt" onChange={(e) => field.onChange(e.target.files)} />
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Upload className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </FormControl>
                       <FormDescription>
                        Upload your detailed business plan or project proposal (PDF, Word, or TXT).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

            </div>

            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Submit Project</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
