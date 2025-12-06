import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import FavoritsPage from "./Pages/Favorits";
import Menubar from "./Components/Menubar";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/favoritos" element={<FavoritsPage />} />
      </Routes>
    </>
  );
}

export default App;
