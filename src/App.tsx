import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Home from "./pages/home";
import SpellDetail from "./pages/spell-detail";
import "./App.css";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div style={{ width: "90vw", margin: "auto", padding: "" }}>
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
