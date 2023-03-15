import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import Auth from "./pages/Auth";
import CreateRecipePage from "./pages/CreateRecipePage";
import SavedRecipesPage from "./pages/SavedRecipesPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/createRecipe"
            element={<CreateRecipePage />}
          />
          <Route
            path="/savedRecipes"
            element={<SavedRecipesPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
