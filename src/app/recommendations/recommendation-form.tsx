"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

import { getRecommendations } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader, Lightbulb } from "lucide-react";

const recommendationSchema = z.object({
  diasporaMemberSkills: z.string().min(20, "Please describe your skills in at least 20 characters."),
  entrepreneurNeeds: z.string().min(20, "Please describe the entrepreneur's needs in at least 20 characters."),
});

type RecommendationFormValues = z.infer<typeof recommendationSchema>;

export default function RecommendationForm() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationSchema),
  });

  const onSubmit: SubmitHandler<RecommendationFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const result = await getRecommendations(data);
      if (result && result.opportunities) {
        setRecommendations(result.opportunities);
      } else {
        setError("Failed to get recommendations. The AI might be busy. Please try again later.");
      }
    } catch (e) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="diasporaMemberSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your Skills & Interests</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'I am a software engineer with 10 years of experience in product marketing and fundraising for startups. I'm passionate about EdTech.'"
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="entrepreneurNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Entrepreneur's Needs</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'A young entrepreneur in Douala has built an app for local farmers but is struggling to get users. They need help with marketing strategy and are seeking $2000 for server costs.'"
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Generating Ideas...
                  </>
                ) : (
                  "Get Recommendations"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <AnimatePresence>
        {(isLoading || error || recommendations.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Suggested Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex items-center justify-center p-8 text-muted-foreground">
                    <Loader className="mr-2 h-5 w-5 animate-spin" />
                    Thinking...
                  </div>
                )}
                {error && <p className="text-destructive">{error}</p>}
                {recommendations.length > 0 && (
                  <ul className="space-y-4">
                    {recommendations.map((rec, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-background"
                      >
                        <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <p>{rec}</p>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
