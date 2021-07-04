import React from 'react';
import HeaderLogo from 'assist/header_logo.svg';
import Hamburger from 'assist/hamburger_bar.svg';
import { useDispatch } from 'react-redux';
import { RESET_CONTENT_ACTION } from 'reducers/count';
import css from 'views/components/Navi/Navi.module.scss';

function Navi() {
  const dispatch = useDispatch();
  return (
    <section className={css.NaviHeader_bg}>
      <div className={css.naviMaxWidth}>
        <img src={HeaderLogo} alt="headerLogo" onClick={() => dispatch(RESET_CONTENT_ACTION())} />
        <img src={Hamburger} alt="hamburger" />
      </div>
    </section>
  );
}
export default Navi;
