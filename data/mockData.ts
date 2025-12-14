import { SuccessStory, Plan, FAQ, Quote } from '../types';

export const QUOTES: Quote[] = [
  { id: 1, text: "Small daily steps lead to big results." },
  { id: 2, text: "Consistency over intensity — every day counts." },
  { id: 3, text: "Fuel your body, power your life." },
  { id: 4, text: "Progress, not perfection." },
  { id: 5, text: "Eat well. Move daily. Sleep well." },
  { id: 6, text: "Stronger than yesterday." },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: '1',
    name: "Rohan Verma",
    beforeWeight: 92,
    afterWeight: 78,
    durationWeeks: 12,
    quote: "Discipline became my new addiction.",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    description: "Rohan spent years trying fad diets with no results. The Gold plan's structured nutrition and strength training approach helped him shed fat while building a powerful physique. He is now training for his first marathon."
  },
  {
    id: '2',
    name: "Arjun Mehta",
    beforeWeight: 102,
    afterWeight: 84,
    durationWeeks: 16,
    quote: "Consistency is the only magic pill.",
    imageUrl: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80",
    description: "Arjun's sedentary lifestyle was taking a toll on his health markers. He joined the Platinum plan for the 1-on-1 coaching. Our trainers helped him integrate short, effective workouts into his busy schedule, helping him drop fat and improve his stamina significantly."
  },
  {
    id: '3',
    name: "Kavita Reddy",
    beforeWeight: 75,
    afterWeight: 62,
    durationWeeks: 10,
    quote: "I feel lighter, faster, and unstoppable.",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80",
    description: "Kavita wanted to tone up for her sister's wedding. The Silver plan gave her the structure she needed. By following the clean eating templates and home workout guides, she sculpted her physique and now inspires her whole family to stay fit."
  },
  {
    id: '4',
    name: "Meera Iyer",
    beforeWeight: 88,
    afterWeight: 70,
    durationWeeks: 18,
    quote: "Strong is the new beautiful.",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    description: "Post-pregnancy, Meera struggled to find time for herself. With the Platinum plan's flexible scheduling and home-based high-intensity intervals, she reclaimed her health and energy levels for her family."
  },
  {
    id: '5',
    name: "Kabir Das",
    beforeWeight: 85,
    afterWeight: 77,
    durationWeeks: 14,
    quote: "I built the body I always dreamed of.",
    imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    description: "Kabir was 'skinny fat' and lacked confidence. Our hypertrophy-focused Gold plan helped him recomposition his body. He gained significant lean muscle mass while dropping body fat percentage."
  },
  {
    id: '6',
    name: "Suresh Patel",
    beforeWeight: 95,
    afterWeight: 82,
    durationWeeks: 12,
    quote: "Fitness has no age limit.",
    imageUrl: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=800&q=80",
    description: "At 55, Suresh thought his best years were behind him. Our coaches designed a low-impact program that protected his joints while melting fat. He now has more energy than his sons and enjoys weekend hikes without shortness of breath."
  }
];

export const PLANS: Plan[] = [
  {
    id: 'silver',
    name: 'Silver',
    price: 499,
    features: [
      'Basic Diet Templates',
      'Weekly Workout Plan',
      'Community Access',
      'Email Support'
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 999,
    recommended: true,
    features: [
      'Personalized Macro Breakdown',
      'Advanced Diet Templates',
      'Bi-Weekly Coach Check-in',
      'Progress Tracking App',
      'Priority Email Support'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 1999,
    features: [
      'Fully Custom Meal Plans',
      '1-on-1 Weekly Coaching',
      'Daily Macro Adjustments',
      'Video Form Analysis',
      '24/7 WhatsApp Support'
    ]
  }
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: "How quickly will I see results?",
    answer: "Results vary — most users see improvements in 4–8 weeks with consistent habits. Sustainable weight loss is about 0.5-1kg per week."
  },
  {
    id: '2',
    question: "Are the diet plans customizable?",
    answer: "Yes, all plans allow allergy, vegetarian, and vegan customization options within the user dashboard."
  },
  {
    id: '3',
    question: "What do the subscription plans include?",
    answer: "Plans range from basic templates to full coaching. All include access to our community and basic tracking tools."
  },
  {
    id: '4',
    question: "Can I pause or cancel my subscription?",
    answer: "Yes, you can pause or cancel anytime via your user account settings with no hidden fees."
  },
  {
    id: '5',
    question: "Will I get a personalized macro breakdown?",
    answer: "Yes, personalized macro breakdowns are included in both the Gold and Platinum plans."
  }
];