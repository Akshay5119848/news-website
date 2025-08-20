import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import WriteToUs from "../components/WriteToUs";
import { useNews } from "../context/NewsContext";

export default function NewsDetails() {
  const { id } = useParams();
  const { news, loading } = useNews();
  const [currentNews, setCurrentNews] = useState(null);

  useEffect(() => {
    if (!loading) {
      const item = news.find((n) => n.id === +id);
      setCurrentNews(item);
    }
  }, [id, loading, news]);

  if (loading || !currentNews)
    return <div className="p-10 text-center text-xl">Loading...</div>;

  const otherNews = news.filter((n) => n.id !== currentNews.id);

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 py-8">
      <aside className="hidden md:block w-1/4">
        <div className="font-bold text-blue-900 mb-4 text-lg">Other News</div>
        <div className="flex flex-col gap-4">
          {otherNews.map((o) => (
            <Link
              key={o.id}
              to={`/news/${o.id}`}
              className="border rounded shadow hover:bg-blue-50 transition p-2"
            >
              <div className="font-semibold text-sm mb-1 line-clamp-2">
                {o.info}
              </div>
              <img
                src={o.image}
                alt=""
                className="h-44 w-full object-fill  rounded"
              />
            </Link>
          ))}
        </div>
      </aside>
      <main className="flex-1">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-bold text-2xl text-blue-900 mb-3">{currentNews.info}</h2>
          <img
            src={currentNews.image}
            alt="news"
            className="w-full max-h-72 object-fill rounded mb-6"
          />
          <p className="leading-relaxed text-lg whitespace-pre-line">
            {currentNews.content}
          </p>
        </div>
        <WriteToUs />
      </main>
      {/* Mobile other news below content */}
      <div className="md:hidden mt-10 px-6">
        <div className="font-bold text-blue-900 mb-2 text-lg">Other News</div>
        <div className="flex flex-col gap-4">
          {otherNews.map((o) => (
            <Link
              key={o.id}
              to={`/news/${o.id}`}
              className="border rounded shadow hover:bg-blue-50 transition p-2"
            >
              <div className="font-semibold text-sm mb-1 line-clamp-2">
                {o.info}
              </div>
              <img
                src={o.image}
                alt=""
                className="h-24 w-full object-cover rounded"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
