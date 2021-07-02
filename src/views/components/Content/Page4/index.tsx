import React from 'react';
import Intro from 'views/customComponents/Intro';
import CheckBox from 'views/customComponents/CheckBox';
import Header from 'views/customComponents/Header';
import Button from 'views/customComponents/Button';
import css from 'App.module.scss';

const Step_3 = () => {
  return (
    <>
      <Intro step={4} title={['기본 기능 외에 꼭 검증하고', '싶은 특별한 기능을 알려주세요.']} />
      <div className={css.mainBackgroundDiv}>
        <Header
          title="필요한 추가 기능을 선택해보세요!"
          sub={[
            '추가 기능을 통해 진행하시는 서비스가',
            '좀 더 다채로워 질 수 있어요!',
            '어떤 추가 기능 필요한지 고민해보시고 선택해주세요!',
            '(중복 선택 가능합니다.)',
          ]}
        />
        <CheckBox title="GPS (내 주변)" price="+200만원" />
        <CheckBox title="지도 (맵 커스텀)" price="+200만원" />
        <CheckBox title="카카오톡 푸쉬" price="+200만원" />
        <CheckBox title="커뮤니티" price="+200만원" />
        <CheckBox title="공유하기" price="+100만원" />
        <CheckBox title="유저타입확장" price="+200만원" />
        <CheckBox title="채팅(실시간)" price="+200만원" />
        <CheckBox title="필요없어요" price="+0원" />
      </div>
      <div className={css.flexDisplayButtonDiv}>
        <Button name="이전 단계" />
        <Button name="다음 단계" />
      </div>
    </>
  );
};
export default Step_3;
