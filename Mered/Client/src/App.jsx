
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import DesignersList from "./pages/DesignersList/DesignersList"
import DesignersPage from "./pages/DesignersPage/DesignersPage"
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/designers" element={<DesignersList />} />
         <Route path="/designer" element={<DesignersPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;