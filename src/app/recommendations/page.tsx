import RecommendationForm from "./recommendation-form";
import { Wand2 } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-24">
      <div className="space-y-4 text-center">
        <Wand2 className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">AI Opportunity Matchmaker</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Not sure how to help? Describe your skills and an entrepreneur's needs, and our AI will suggest the perfect ways for you to contribute.
        </p>
      </div>
      
      <div className="my-12">
        <RecommendationForm />
      </div>
    </div>
  );
}
