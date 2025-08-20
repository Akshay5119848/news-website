import { createContext, useState, useEffect, useContext } from "react";

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/dummy_news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <NewsContext.Provider value={{ news, loading }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  return useContext(NewsContext);
}
