import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import AuthContextProvider from "./contexts/AuthContext";

const App = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  </BrowserRouter>
);

export default App;
