import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";

import { Spinner } from "react-bootstrap";
import AppRouter from "./components/AppRouter";
import Slider from "./components/Slider";
import NavBarS from "./components/NavBars";
import Footer from "./components/Footer";

import "./components/AppRouter.css";

const App = observer(() => {
  const { user } = useContext(Context);
  let location = useLocation;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <NavBarS></NavBarS>
      {/* <NavBar /> */}
      {/* {location.pathname === "/" && <Slider />} */}

      <AppRouter className="router" />
      <Footer></Footer>
    </BrowserRouter>
  );
});

export default App;
