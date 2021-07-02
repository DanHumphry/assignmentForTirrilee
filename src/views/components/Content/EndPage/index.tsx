import React from 'react';
import Button from 'views/customComponents/Button';
import AppCss from 'App.module.scss';
import css from './EndPage.module.scss';

const EndPage = () => {
  return (
    <>
      <section className={css.EndPageResultSection}>
        <h3>수고하셨습니다.</h3>
        <h3>선택 프로젝트 : Web</h3>
        <h3>견적가격 : 대략 800만원 입니다.</h3>
      </section>
      <section className={css.EndPageDesc}>
        <h5>하지만 정확한 견적은 아니에요 :) </h5>
        <h5>티릴리와 함께 같이 진단해보고 멋진 서비스를 만들어보아요.</h5>
      </section>
      <section className={AppCss.blockDisplayButtonDiv}>
        <Button name="다시하기" width="350px" height="48px" fontSize="14px" color="#115de7" />
      </section>
    </>
  );
};
export default EndPage;
