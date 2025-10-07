// ============================================================================
// FILE: src/content/config.ts
// ACTION: PARTIAL UPDATE
// CHANGES: Made timeline, contributions, and links optional in schema
// 
// INSTRUCTIONS:
// Find the projects schema in your config.ts and UPDATE these three fields
// to include .optional() at the end:
// ============================================================================

import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['early-idea', 'active', 'paused', 'completed']),
    category: z.string().optional(), // NEW: For grouping projects (e.g., "Plants", "Soil", "Water")
    summary: z.string(),
    lastUpdated: z.string(),
    description: z.string(),
    
    // At a Glance section - NOW OPTIONAL (for future use)
    challenge: z.string().optional(),
    approach: z.string().optional(),
    currentStatus: z.string().optional(),
    
    // Research questions
    researchQuestions: z.array(z.string()),
    
    // What we're looking for
    expertise: z.array(z.string()),
    resources: z.array(z.string()),
    support: z.array(z.string()),
    
    // Timeline phases - NOW OPTIONAL
    timeline: z.array(z.object({
      date: z.string(),
      phase: z.string(),
      description: z.string(),
    })).optional(),
    
    // Contribution types - NOW OPTIONAL
    contributions: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    
    // Links and resources - NOW OPTIONAL
    links: z.array(z.object({
      title: z.string(),
      description: z.string(),
      url: z.string().optional(),
      icon: z.string(),
      status: z.enum(['available', 'coming-soon']).optional(),
    })).optional(),
  }),
});

export const collections = { projects };