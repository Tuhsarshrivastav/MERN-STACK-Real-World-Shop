import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./components/home/Home";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
