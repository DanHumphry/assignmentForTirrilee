import React from 'react';
import HeaderLogo from 'assist/header_logo.svg';
import Hamburger from 'assist/hamburger_bar.svg';
import css from './Navi.module.scss';

function Navi() {
  return (
    <section className={css.NaviHeader_bg}>
      <div className={css.naviMaxWidth}>
        <img src={HeaderLogo} alt="headerLogo" />
        <img src={Hamburger} alt="hamburger" />
      </div>
    </section>
  );
}
export default Navi;
