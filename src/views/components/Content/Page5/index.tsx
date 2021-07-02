import React from 'react';
import Intro from 'views/customComponents/Intro';
import CheckBox from 'views/customComponents/CheckBox';
import Header from 'views/customComponents/Header';
import Button from 'views/customComponents/Button';
import css from 'App.module.scss';

const Step_4 = () => {
  return (
    <>
      <Intro step={5} title={['기본 기능 외에 꼭 검증하고', '싶은 특별한 기능을 알려주세요.']} />
      <div className={css.mainBackgroundDiv}>
        <Header
          title="관리자 페이지를 선택해주세요!"
          sub={[
            '관리자 페이지는 앱을 관리하기 위해 ',
            '유용하게 사용되는 페이지에요! 직접 DB를 관리하거나 관리가 ',
            '필요 없는게 아니라면 꼭 선택해야 하는 기능이에요!',
          ]}
        />
        <CheckBox title="서비스 내에서 관리" description="관리자권한 부여" price="+100만원" />
        <CheckBox title="기본 Admin" description="관리자 페이지 운영" price="+150만원" />
        <CheckBox title="확장 Admin" description="관리자 페이지+대쉬보드" price="+200만원" />
        <CheckBox title="필요없어요." description="해당기능이 필요없어요." price="+0원" />
      </div>
      <div className={css.flexDisplayButtonDiv}>
        <Button name="이전 단계" />
        <Button name="견적 산출" />
      </div>
    </>
  );
};
export default Step_4;
