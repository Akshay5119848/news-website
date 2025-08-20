import NewsCard from "../components/NewsCard";
import Carousel from "../components/Carousel";
import { useNews } from "../context/NewsContext";

export default function Home() {
  const { news, loading } = useNews();

  if (loading)
    return <div className="p-10 text-center text-xl">Loading news...</div>;

  return (
    <div>
      <Carousel news={news} />
      <div className="grid md:grid-cols-3 gap-4 p-4">
        {news.map((n) => (
          <NewsCard key={n.id} news={n} />
        ))}
      </div>
    </div>
  );
}
