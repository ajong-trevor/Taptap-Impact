// Opportunity Recommendation Tool

'use server';
/**
 * @fileOverview An AI-powered tool that recommends suitable giving-back activities or opportunities for diaspora members to support Cameroonian entrepreneurs based on their needs.
 *
 * - recommendOpportunities - A function that handles the opportunity recommendation process.
 * - RecommendOpportunitiesInput - The input type for the recommendOpportunities function.
 * - RecommendOpportunitiesOutput - The return type for the recommendOpportunities function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendOpportunitiesInputSchema = z.object({
  entrepreneurNeeds: z
    .string()
    .describe('Description of the entrepreneur and their needs.'),
  diasporaMemberSkills: z
    .string()
    .describe('Description of the diaspora member skills and interests.'),
});
export type RecommendOpportunitiesInput = z.infer<
  typeof RecommendOpportunitiesInputSchema
>;

const RecommendOpportunitiesOutputSchema = z.object({
  opportunities: z
    .array(z.string())
    .describe('A list of recommended opportunities for the diaspora member to support the entrepreneur.'),
});
export type RecommendOpportunitiesOutput = z.infer<
  typeof RecommendOpportunitiesOutputSchema
>;

export async function recommendOpportunities(
  input: RecommendOpportunitiesInput
): Promise<RecommendOpportunitiesOutput> {
  return opportunityRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'opportunityRecommendationPrompt',
  input: {schema: RecommendOpportunitiesInputSchema},
  output: {schema: RecommendOpportunitiesOutputSchema},
  prompt: `You are an AI assistant that recommends giving-back activities and opportunities for diaspora members to support Cameroonian entrepreneurs.

Given the following information about an entrepreneur and their needs:

Entrepreneur Needs: {{{entrepreneurNeeds}}}

And the following information about a diaspora member and their skills/interests:

Diaspora Member Skills: {{{diasporaMemberSkills}}}

Recommend a list of opportunities for the diaspora member to support the entrepreneur. The opportunities should be specific and actionable.

Format your response as a JSON array of strings.`,
});

const opportunityRecommendationFlow = ai.defineFlow(
  {
    name: 'opportunityRecommendationFlow',
    inputSchema: RecommendOpportunitiesInputSchema,
    outputSchema: RecommendOpportunitiesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
