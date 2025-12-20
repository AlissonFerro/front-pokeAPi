import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import FavoritsPage from "./Pages/Favorits";
import PokePage from "./Pages/Poke";
import MenuLayout from "./Layout/Menu";
import ComparePage from "./Pages/Compare";
import { PokesProvider } from "./Context/Pokes";
import { ToastContainer } from "react-toastify";

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
        </Route>
      </Routes>
    </PokesProvider>
  );
}

export default App;