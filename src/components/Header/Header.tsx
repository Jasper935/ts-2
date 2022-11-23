import React from "react";
import css from "./Header.module.css";
import svg from '../../images/symbol-defs.svg'

export const Header = () => {

    // console.log(yOffset);
    
  return (
    <div className={css.header}>
      <div className={css.wrap}>
        <h3 className={css.logo}>Smart diet</h3>
        <ul className={css.list}>

        </ul>
      </div>
    </div>
  );
};
