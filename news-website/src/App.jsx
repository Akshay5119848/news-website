import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/:id" element={<NewsDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
