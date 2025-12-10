import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import FavoritsPage from "./Pages/Favorits";
import Menubar from "./Components/Menubar";
import PokePage from "./Pages/Poke";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/favoritos" element={<FavoritsPage />} />
        <Route path="/:name" element={<PokePage />} />
      </Routes>
    </>
  );
}

export default App;
