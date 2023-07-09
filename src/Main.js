import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Navbar from "./shared_components/navbar/Navbar";
import CardList from "./components/pages/cardlist/CardList";

const Main = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/top-lists" element={<CardList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Main;