import React from "react";
import css from "./Hero.module.css";
import { Header } from "../Header/Header";
export const Hero = () => {
  return (
    <div className={css.hero}>
      <Header  />
      <div className={css.wrap}>
        <h1 className={css.title}>Smart diet</h1>
      </div>
    </div>
  );
};
