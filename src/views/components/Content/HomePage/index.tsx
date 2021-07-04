import React from 'react';
import HomeImg from 'assist/Service_illust.svg';
import Button from 'views/customComponents/Button';
import css from 'views/components/Content/HomePage/HomePage.module.scss';
import AppCss from 'App.module.scss';

function Home() {
  return (
    <>
      <section className={css.HomeMain_bg}>
        <div className={css.homeTitle}>
          <h3 className={css.leftH3}>Tirrilee Estimate</h3>
          <h3 className={css.rightH3}>Program (Beta-Service)</h3>
        </div>
        <div className={css.homeImg}>
          <img src={HomeImg} alt="home_illust" />
        </div>
      </section>
      <section className={AppCss.blockDisplayButtonDiv}>
        <Button name="시작하기" width="350px" height="60px" fontSize="18px" color="#226bef" />
      </section>
    </>
  );
}
export default Home;
