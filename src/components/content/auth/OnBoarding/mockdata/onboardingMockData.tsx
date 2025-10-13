"use client";

type Role = {
  id: number;
  name: string;
};
type Industry = {
  id: number;
  name: string;
};
type Channel = {
  id: number;
  name: string;
};
type Case = {
  id: number;
  name: string;
};

export const initialRoles: Role[] = [
  { id: 1, name: "Founder/CEO" },
  { id: 2, name: "Customer Experience Lead" },
  { id: 3, name: "Product Manager" },
  { id: 4, name: "Data Analyst" },
  { id: 5, name: "Marketing Lead" },
  { id: 6, name: "Other" },
];

export const initialIndustries: Industry[] = [
  { id: 1, name: "E-Commerce" },
  { id: 2, name: "Hospitality" },
  { id: 3, name: "Healthcare" },
  { id: 4, name: "Finance" },
  { id: 5, name: "SaaS" },
  { id: 6, name: "Other" },
];

export const initialChannels: Channel[] = [
  { id: 1, name: "Google Reviews" },
  { id: 2, name: "Facebook" },
  { id: 3, name: "Trustpilot" },
  { id: 4, name: "TripAdvisor" },
  { id: 5, name: "Custom Website Forms" },
  { id: 6, name: "Other" },
];
export const initialCases: Case[] = [
  { id: 1, name: "Monitor Customer Sentiment" },
  { id: 2, name: "Competitor Benchmarking" },
  { id: 3, name: "Market Trend Analysis" },
  { id: 4, name: "Internal Customer Support Feedback" },
  { id: 5, name: "Custom Website Forms" },
  { id: 6, name: "Business Performance Reporting" },
];
