import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import SearchResult from "./Pages/SearchResult";
import NewsContent from "./Pages/NewsContent";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/search/:result" element={<SearchResult />} />
        <Route path="/news/:content" element={<NewsContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
