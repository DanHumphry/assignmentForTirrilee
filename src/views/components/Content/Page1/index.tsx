import React from 'react';
import Intro from 'views/customComponents/Intro';
import Box from 'views/customComponents/Box';
import Header from 'views/customComponents/Header';
import Button from 'views/customComponents/Button';
import css from 'App.module.scss';

function Step_1() {
  return (
    <>
      <Intro step={1} title="먼저 개발범위를 생각해보아요." description="개발범위로 기본금액을 정할 수 있어요!" />
      <div className={css.mainBackgroundDiv}>
        <Header
          title="상세기획이 되어 있나요?"
          sub={[
            '아직 상세 기획 없이 단순 아이디어만 있어도 걱정하지 마세요!',
            '티릴리와 함께 더 멋진 기획을 만들 수 있습니다!',
          ]}
        />
        <Box title="네! 상세 기획이 있어요." description="좋아요! 개발을 위한 기획을 함께 진행해요." price="+50만원" />
        <Box
          title="앗.. 아직 상세 기획이 없어요."
          description="괜찮아요 :) 티릴리와 함께 서비스를 기획해보아요."
          price="+100만원"
        />
      </div>
      <div className={css.flexDisplayButtonDiv}>
        <Button name="이전 단계" />
        <Button name="다음 단계" />
      </div>
    </>
  );
}
export default Step_1;
