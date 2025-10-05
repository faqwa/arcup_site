import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['early-idea', 'active', 'paused', 'completed']),
    summary: z.string(),
    lastUpdated: z.string(),
    description: z.string(),
    
    // At a Glance section
    challenge: z.string(),
    approach: z.string(),
    currentStatus: z.string(),
    
    // Research questions
    researchQuestions: z.array(z.string()),
    
    // What we're looking for
    expertise: z.array(z.string()),
    resources: z.array(z.string()),
    support: z.array(z.string()),
    
    // Timeline phases
    timeline: z.array(z.object({
      date: z.string(),
      phase: z.string(),
      description: z.string(),
    })),
    
    // Contribution types
    contributions: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
});

export const collections = { projects };