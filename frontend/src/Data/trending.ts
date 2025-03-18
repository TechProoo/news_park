export type NewsItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  views: number;
  date: string;
};

export const newsData: NewsItem[] = [
  // Travel (4 items)
  {
    id: 1,
    title: "New Visa Rules Announced for International Travelers",
    category: "Travel",
    description: "The government has introduced new visa regulations...",
    image: "/images/travel-news.jpg",
    views: 1205,
    date: "2025-03-18",
  },
  {
    id: 2,
    title: "Top 10 Must-Visit Destinations This Summer",
    category: "Travel",
    description:
      "Check out the best travel spots for an unforgettable vacation...",
    image: "/images/travel-destinations.jpg",
    views: 2300,
    date: "2025-03-14",
  },
  {
    id: 3,
    title: "Airlines Introduce New Budget-Friendly Flight Options",
    category: "Travel",
    description:
      "Budget airlines are making international travel more affordable...",
    image: "/images/airlines.jpg",
    views: 1650,
    date: "2025-03-10",
  },
  {
    id: 4,
    title: "Cruise Industry Sees Major Growth in 2025",
    category: "Travel",
    description:
      "Luxury cruises are becoming a popular choice for travelers...",
    image: "/images/cruise.jpg",
    views: 2800,
    date: "2025-03-06",
  },

  // Finance (4 items)
  {
    id: 5,
    title: "Stock Market Hits Record High Amid Global Growth",
    category: "Finance",
    description: "The stock market soared today, reaching new heights...",
    image: "/images/finance-news.jpg",
    views: 3050,
    date: "2025-03-17",
  },
  {
    id: 6,
    title: "Cryptocurrency Prices Surge After Major Investment",
    category: "Finance",
    description: "Bitcoin and Ethereum prices see a sharp increase...",
    image: "/images/crypto.jpg",
    views: 4890,
    date: "2025-03-12",
  },
  {
    id: 7,
    title: "Banks Announce New Interest Rates for 2025",
    category: "Finance",
    description: "Leading banks adjust interest rates amid economic shifts...",
    image: "/images/banking.jpg",
    views: 2150,
    date: "2025-03-08",
  },
  {
    id: 8,
    title: "Real Estate Market Boom: Is Now the Time to Invest?",
    category: "Finance",
    description: "Experts weigh in on the real estate opportunities in 2025...",
    image: "/images/real-estate.jpg",
    views: 3400,
    date: "2025-03-05",
  },

  // Health (4 items)
  {
    id: 9,
    title: "New Breakthrough in Cancer Treatment Research",
    category: "Health",
    description: "Scientists have discovered a promising new therapy...",
    image: "/images/health-news.jpg",
    views: 1890,
    date: "2025-03-16",
  },
  {
    id: 10,
    title: "Experts Warn of Rising Mental Health Challenges",
    category: "Health",
    description:
      "A new study highlights the growing concerns of mental health...",
    image: "/images/mental-health.jpg",
    views: 3120,
    date: "2025-03-11",
  },
  {
    id: 11,
    title: "New Superfoods Discovered for Better Heart Health",
    category: "Health",
    description:
      "Nutritionists reveal new superfoods that boost heart health...",
    image: "/images/superfoods.jpg",
    views: 3560,
    date: "2025-03-07",
  },
  {
    id: 12,
    title: "Wearable Health Tech: The Future of Monitoring Wellness",
    category: "Health",
    description: "Smart devices are changing the way we track our health...",
    image: "/images/wearable-tech.jpg",
    views: 2900,
    date: "2025-03-04",
  },

  // Sports (4 items)
  {
    id: 13,
    title: "Champions League Quarterfinals: Who Will Advance?",
    category: "Sports",
    description: "Football fans eagerly await the upcoming matches...",
    image: "/images/sports-news.jpg",
    views: 4570,
    date: "2025-03-15",
  },
  {
    id: 14,
    title: "Tennis Star Wins First Grand Slam Title",
    category: "Sports",
    description:
      "A rising tennis player stuns the world with their first big win...",
    image: "/images/tennis.jpg",
    views: 3210,
    date: "2025-03-10",
  },
  {
    id: 15,
    title: "NBA Playoffs: Key Matchups to Watch",
    category: "Sports",
    description:
      "Basketball fans are excited for the biggest games of the season...",
    image: "/images/nba.jpg",
    views: 3800,
    date: "2025-03-06",
  },
  {
    id: 16,
    title: "Formula 1: New Regulations Shake Up the 2025 Season",
    category: "Sports",
    description:
      "F1 teams adapt to major rule changes ahead of the new season...",
    image: "/images/f1.jpg",
    views: 4100,
    date: "2025-03-03",
  },
];

export default newsData;
