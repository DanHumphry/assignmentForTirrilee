import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';
import Intro from 'views/customComponents/Intro';
import Box from 'views/customComponents/Box';
import Header from 'views/customComponents/Header';
import Button from 'views/customComponents/Button';
import css from 'App.module.scss';

function Page3() {
  const { currentContent } = useSelector((store: RootState) => store.count);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Intro
        step={currentContent}
        title="먼저 개발범위를 생각해보아요."
        description={['개발범위로 기본금액을 정할 수 있어요!', '기본금액']}
      />
      <div className={css.mainBackgroundDiv}>
        <Header
          title="디자인이 되어 있나요?"
          sub={[
            '아직 구체적인 디자인이 진행되어 있지 않아도 돼요!',
            '티릴리의 디자이너들과 함께 멋진 디자인을 만들어봐요!',
          ]}
        />
        <Box
          title="네! 디자인이 되어 있어요."
          description="멋져요! 개발을 할 수 있도록 디자인을 함께 보완해요."
          price="+50만원"
        />
        <Box
          title="앗.. 디자인은 없어요."
          description="괜찮아요 :) 티릴리와 함께 디자인을 진행해봐요!"
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
export default Page3;
