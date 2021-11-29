import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WebFont from "webfontloader";
useEffect(() => {
  WebFont.load({
    google: {
      families: ["Roboto", "Droid Sans", "Chilanka"],
    },
  });
}, []);
function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
