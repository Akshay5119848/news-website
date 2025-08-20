import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg border transition transform hover:-translate-y-1 flex flex-col">
      <img src={news.image} alt="news" className="h-44 w-full object-cover" />
      <div className="p-3 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold mb-2 text-lg line-clamp-2">{news.info}</h3>
        <div className="flex flex-wrap gap-1 mb-4">
          {news.tags.map((tag, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-0.5 text-xs rounded">
              #{tag.replace("&amp;", "&")}
            </span>
          ))}
        </div>
        <Link
          to={`/news/${news.id}`}
          className="mt-auto bg-blue-800 text-white text-center py-1 rounded font-medium hover:bg-blue-900 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
