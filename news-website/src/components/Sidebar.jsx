import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ close }) {
  const [tags, setTags] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("/dummy_news.json")
      .then(res => res.json())
      .then(data => {
        setTags([...new Set(data.flatMap(n => n.tags.map(t => t.replace("&amp;", "&"))))]);
        setPopular(data.slice(0, 3));
      });
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
      <div className="w-72 bg-white p-6 flex flex-col min-h-full animate-slideInLeft overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <span className="font-black text-xl text-blue-900">Web Daily</span>
          <button
            onClick={close}
            className="text-2xl px-2 hover:text-red-500"
            aria-label="Close Sidebar"
          >
            ×
          </button>
        </div>
        <h3 className="font-semibold text-blue-700 mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span
              key={tag}
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-blue-700 mb-2">Popular</h3>
        <div className="flex flex-col gap-2 mb-8">
          {popular.map(news => (
            <Link key={news.id} to={`/news/${news.id}`} className="text-blue-700 hover:underline" onClick={close}>
              {news.info}
            </Link>
          ))}
        </div>
      </div>
      {/* Click outside closes sidebar */}
      <div className="flex-1" onClick={close}></div>
    </div>
  );
}
