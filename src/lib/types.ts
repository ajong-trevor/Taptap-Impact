export interface Project {
    id: string;
    name: string;
    entrepreneurName: string;
    location: string;
    sector: 'Tech' | 'Agriculture' | 'Art' | 'Fashion' | 'Food' | 'Education';
    summary: string;
    fundingGoal: string;
    fundingRaised: string;
    imageId: string;
    proposalUrl: string;
  }
  
  export interface ImpactStory {
    id: string;
    projectId: string;
    projectName: string;
    title: string;
    report: string;
    testimonial: string;
    imageId: string;
    date: string;
  }
  
  export interface Opportunity {
    id: string;
    type: 'Mentorship' | 'Job' | 'Training' | 'Other';
    title: string;
    description: string;
    providerName: string;
    contact: string;
  }
  