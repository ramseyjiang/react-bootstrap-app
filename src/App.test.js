import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import AuthContextProvider from "./contexts/AuthContext";

test("See HooksHut", () => {
  const { getByText } = render(
    <BrowserRouter>
      <AuthContextProvider>
        <Layout />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const linkElement = getByText(/HooksHut/i);
  expect(linkElement).toBeInTheDocument();
});
