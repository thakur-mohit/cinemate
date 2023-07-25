import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";
import PageNotFound from "./components/PageNotFound";
import Search from "./components/Search";
function App() {
  return (
    <>
      <Header />

      <div className="dark:bg-slate-800">
        <Routes>
          <Route
            path=""
            element={<MovieList apiPath={"movie/now_playing"} />}
          ></Route>
          <Route path="movie/:id" element={<MovieDetail />}></Route>
          <Route
            path="movies/popular"
            element={<MovieList apiPath={"movie/popular"} />}
          ></Route>
          <Route
            path="movies/top"
            element={<MovieList apiPath={"movie/top_rated"} />}
          ></Route>
          <Route
            path="movies/upcoming"
            element={<MovieList apiPath={"movie/upcoming"} />}
          ></Route>

          <Route
            path="search"
            element={<Search apiPath={"search/movie"} />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
