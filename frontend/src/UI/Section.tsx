import ImageCard from "../Components/ImageCard";

interface SectionProps {
  cat: string;
  space?: number;
}

const News: React.FC<SectionProps> = ({ cat, space = 3 }) => {
  // Ensure space is within a valid range (1 to 12)
  const columnSpan = Math.min(Math.max(space, 1), 12);

  // Example data (Replace with dynamic data if needed)
  let articles = [
    {
      category: "Business",
      date: "March 21, 2021",
      title: "Climate changes in recent prospective",
    },
    {
      category: "Tech",
      date: "March 22, 2021",
      title: "AI's impact on global markets",
    },
    {
      category: "Health",
      date: "March 23, 2021",
      title: "Wellness trends for 2025",
    },
    {
      category: "Finance",
      date: "March 24, 2021",
      title: "Stock market predictions",
    },
    {
      category: "Sports",
      date: "March 25, 2021",
      title: "Upcoming Olympic games",
    },
  ];

  // If space is 4, limit articles to 4 items
  if (columnSpan === 4) {
    articles = articles.slice(0, 3);
  } else {
    articles = articles.slice(0, 4);
  }

  return (
    <div className="news_cover">
      <div className="t p-3 md:p-2 ">
        {/* Header */}
        <div className="news_head">
          <h1 className="fnt text-2xl text-light font-black">{cat}</h1>
          <div className="seperator md:w-full mt-2 opacity-50"></div>
        </div>

        {/* Body */}
        <div className="news_body mt-10">
          <div className="grid grid-cols-12 gap-3">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`md:col-span-${columnSpan} col-span-12`}
              >
                <ImageCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
