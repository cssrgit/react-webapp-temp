import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeroComponent } from "../hero/hero";
import { Navbar } from "../navbar/navbar";
export const RoutesComponent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={HeroComponent} />
      </Routes>
    </>
  );
};
