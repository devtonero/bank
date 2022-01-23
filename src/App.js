import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import SigninPage from "./pages/signin/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
