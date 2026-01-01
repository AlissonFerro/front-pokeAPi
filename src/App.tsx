import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index.jsx";
import FavoritsPage from "./Pages/Favorits.jsx";
import PokePage from "./Pages/Poke.jsx";
import MenuLayout from "./Layout/Menu.jsx";
import ComparePage from "./Pages/Compare.jsx";
import { PokesProvider } from "./Context/Pokes.jsx";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./Pages/NotFound";

function App() {
  return (
    <PokesProvider>
      <ToastContainer autoClose={3000} position="top-right" />
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route path="" element={<Index />} />
          <Route path="favoritos" element={<FavoritsPage />} />
          <Route path="search/:name" element={<PokePage />} />
          <Route path="compare/" element={<ComparePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </PokesProvider>
  );
}

export default App;