import React from 'react';
import Intro from 'views/customComponents/Intro';
import Box from 'views/customComponents/Box';
import Header from 'views/customComponents/Header';
import Button from 'views/customComponents/Button';
import css from 'App.module.scss';

const Step_2 = () => {
  return (
    <>
      <Intro
        step={3}
        title="작업 페이지를 선정해봅시다."
        description="이전단계에서 설명한 기본금액에 페이지 수를 곱합니다."
      />
      <div className={css.mainBackgroundDiv}>
        <Header
          title="작업하려는 페이지의 양은 어떻게 되나요?"
          sub={[
            '혹시 몇 페이지가 나올지에 대해 감이 안잡히시나요?',
            '간단한 정보구조도(I.A)를 설계해보시면 ',
            '선택에 많은 도움이 될꺼에요!',
          ]}
        />
        <Box title="~20p" price="기본 금액 x1" height="60px" display="flex" />
        <Box title="21p ~ 30p" price="기본 금액 x2" height="60px" display="flex" />
      </div>
      <div className={css.flexDisplayButtonDiv}>
        <Button name="이전 단계" />
        <Button name="다음 단계" />
      </div>
    </>
  );
};
export default Step_2;
