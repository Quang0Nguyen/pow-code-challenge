import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import SpellDetail from "./pages/spell-detail";
import Home from "./pages/home";
import "./App.css";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div style={{ width: "90vw", margin: "auto", padding: "", maxWidth: "1000px" }}>
          <nav>
          </nav>

          <Routes>
            <Route path="/spells/:spell" element={<SpellDetail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
