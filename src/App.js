import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import FavoritsPage from "./Pages/Favorits";
import PokePage from "./Pages/Poke";
import MenuLayout from "./Layout/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/favoritos" element={<FavoritsPage />} />
          <Route path="/search/:name" element={<PokePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;