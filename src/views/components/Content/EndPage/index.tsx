import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';
import Button from 'views/customComponents/Button';
import AppCss from 'App.module.scss';
import css from 'views/components/Content/EndPage/EndPage.module.scss';

const EndPage = () => {
  const { selectedBox, selectedPrice } = useSelector((store: RootState) => store.count);

  let sum = 0;
  selectedPrice.flat().forEach((value: number, i: number, arr: number[]) => {
    if (value > 2) sum += value;
    else if (value === 2) {
      const basicAmount = arr.slice(1, 4);
      sum += basicAmount.reduce((a: number, b: number) => a + b);
    }
  });

  return (
    <>
      <section className={css.EndPageResultSection}>
        <h3>수고하셨습니다.</h3>
        <h3>
          <mark style={{ color: '#226bef', background: 'none' }}>선택 프로젝트 : {selectedBox[1]}</mark>
        </h3>
        <h3>
          <mark style={{ color: '#226bef', background: 'none' }}>견적가격 : 대략 {sum}만원 </mark>입니다.
        </h3>
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
