import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uses from "./pages/Uses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uses" element={<Uses />} />
      </Routes>
    </BrowserRouter>
  );
}
