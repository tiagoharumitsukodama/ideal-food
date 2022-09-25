import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RecipeForm from "./pages/RecipeForm";
import RecipeRanking from "./pages/RecipeRanking";
import IngredientForm from "./pages/IngredientForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipe-form" element={<RecipeForm />} />
          <Route path="recipe-ranking" element={<RecipeRanking />} />
          <Route path="ingredient-form" element={<IngredientForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);