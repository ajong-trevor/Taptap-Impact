"use server";

import { recommendOpportunities, RecommendOpportunitiesInput, RecommendOpportunitiesOutput } from "@/ai/flows/opportunity-recommendation";

export async function getRecommendations(input: RecommendOpportunitiesInput): Promise<RecommendOpportunitiesOutput | null> {
    try {
        const result = await recommendOpportunities(input);
        return result;
    } catch (error) {
        console.error("Error getting recommendations:", error);
        return null;
    }
}
