import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';
import Button from 'views/customComponents/Button';
import Intro from 'views/customComponents/Intro';
import Box from 'views/customComponents/Box';
import css from 'App.module.scss';

function Page1() {
  const { currentContent } = useSelector((store: RootState) => store.count);

  return (
    <>
      <Intro step={currentContent} title="어떤 서비스를 만들고 싶으신가요 ?" />
      <Box title="App 개발" description="Android & iOS" price="300만원" />
      <Box title="Web 개발" description="반응형 웹" price="400만원" />
      <div className={css.flexDisplayButtonDiv}>
        <Button name="이전 단계" />
        <Button name="다음 단계" />
      </div>
    </>
  );
}
export default Page1;
