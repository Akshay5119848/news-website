import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Carousel({ news }) {
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => setIdx((prev) => (prev + 1) % news.length), 10000);
    return () => clearInterval(interval);
  }, [news]);

  if (!news.length)
    return (
      <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
        Loading...
      </div>
    );

  const slide = news[idx];

  return (
    <div className="relative w-full h-86 md:h-92 cursor-pointer">
      <img
        className=" object-fill w-full h-full"
        src={slide.image}
        alt={slide.info}
        onClick={() => navigate(`/news/${slide.id}`)}
      />
      <div className="absolute bottom-0 bg-black bg-opacity-40 text-white p-2 text-lg font-semibold">
        {slide.info}
      </div>
      <div className="absolute right-4 bottom-4 flex gap-2">
        {news.map((_, i) => (
          <span
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full ${i === idx ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
