import type { Project, ImpactStory, Opportunity } from './types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Yaoundé Code Academy',
    entrepreneurName: 'Jeanne Atangana',
    location: 'Yaoundé',
    sector: 'Tech',
    summary: 'A coding bootcamp to train the next generation of software developers in Cameroon.',
    fundingGoal: '$10,000',
    fundingRaised: '$4,500',
    imageId: 'project-tech',
    proposalUrl: '#',
  },
  {
    id: '2',
    name: 'Green Farms Initiative',
    entrepreneurName: 'Paul Biya Jr.',
    location: 'Buea',
    sector: 'Agriculture',
    summary: 'Sustainable and organic farming project to improve local food supply and create jobs.',
    fundingGoal: '$7,500',
    fundingRaised: '$7,500',
    imageId: 'project-agriculture',
    proposalUrl: '#',
  },
  {
    id: '3',
    name: 'Douala Art Collective',
    entrepreneurName: 'Aisha Njoya',
    location: 'Douala',
    sector: 'Art',
    summary: 'A creative space for local artists to collaborate, exhibit, and sell their work.',
    fundingGoal: '$5,000',
    fundingRaised: '$1,200',
    imageId: 'project-art',
    proposalUrl: '#',
  },
  {
    id: '4',
    name: 'Kribi Fashion House',
    entrepreneurName: 'Samuel Eto',
    location: 'Kribi',
    sector: 'Fashion',
    summary: 'A fashion brand promoting traditional Cameroonian textiles with modern designs.',
    fundingGoal: '$12,000',
    fundingRaised: '$8,000',
    imageId: 'project-fashion',
    proposalUrl: '#',
  },
    {
    id: '5',
    name: 'Limbe Street Food Hub',
    entrepreneurName: 'Fela Kuti',
    location: 'Limbe',
    sector: 'Food',
    summary: 'A central hub for gourmet street food vendors, promoting culinary tourism.',
    fundingGoal: '$6,000',
    fundingRaised: '$2,500',
    imageId: 'project-food',
    proposalUrl: '#',
  },
  {
    id: '6',
    name: 'Literacy for Bamenda',
    entrepreneurName: 'Manu Dibango',
    location: 'Bamenda',
    sector: 'Education',
    summary: 'An initiative to provide books and mobile learning tools to rural schools.',
    fundingGoal: '$8,500',
    fundingRaised: '$8,100',
    imageId: 'project-education',
    proposalUrl: '#',
  }
];

export const impactStories: ImpactStory[] = [
    {
      id: '1',
      projectId: '2',
      projectName: 'Green Farms Initiative',
      title: 'First Harvest a Major Success!',
      report: 'Thanks to the funding received, we were able to purchase high-quality seeds and modern irrigation equipment. Our first harvest exceeded expectations, and we have now secured contracts with two local supermarkets.',
      testimonial: '"This platform didn\'t just give us money; it gave us hope and a connection to our brothers and sisters abroad. We are so grateful." - Paul Biya Jr.',
      imageId: 'impact-story-3',
      date: 'June 15, 2024',
    },
    {
      id: '2',
      projectId: '1',
      projectName: 'Yaoundé Code Academy',
      title: 'Our First Cohort Graduates',
      report: 'We are proud to announce that our first cohort of 20 students has successfully graduated! 15 of them have already secured internships at local tech companies. The new laptops funded by sponsors were critical to их success.',
      testimonial: '"Seeing our students get jobs and start their careers is the greatest reward. Thank you to every sponsor who believed in our vision." - Jeanne Atangana',
      imageId: 'impact-story-2',
      date: 'July 22, 2024',
    },
    {
        id: '3',
        projectId: '4',
        projectName: 'Kribi Fashion House',
        title: 'Showcased at Douala Fashion Week',
        report: 'We successfully designed and produced a full collection which was showcased at the prestigious Douala Fashion Week. The exposure has been incredible, leading to several international orders.',
        testimonial: '"The mentorship on brand building from a sponsor in Paris was just as valuable as the funding. It changed how we see our business." - Samuel Eto',
        imageId: 'impact-story-1',
        date: 'August 01, 2024',
      }
  ];
  
export const opportunities: Opportunity[] = [
    {
        id: '1',
        type: 'Mentorship',
        title: 'Marketing Strategy for Tech Startups',
        description: 'Seeking a mentor with experience in digital marketing to help guide a promising tech startup in Yaoundé. Commitment of 2 hours per month for 6 months.',
        providerName: 'Chinedu Okoro',
        contact: 'chinedu.okoro@example.com'
    },
    {
        id: '2',
        type: 'Job',
        title: 'Remote Full-Stack Developer',
        description: 'Our US-based company is hiring a remote full-stack developer. We encourage talented Cameroonian developers to apply. Experience with React and Node.js required.',
        providerName: 'AfroConnect Inc.',
        contact: 'careers@afroconnect.com'
    },
    {
        id: '3',
        type: 'Training',
        title: 'Free Workshop: Financial Management for Small Businesses',
        description: 'A 3-part online workshop covering budgeting, bookkeeping, and applying for loans. Open to all Cameroonian entrepreneurs on this platform.',
        providerName: 'Diaspora Finance Experts',
        contact: 'workshops@diasporafinance.org'
    }
]
