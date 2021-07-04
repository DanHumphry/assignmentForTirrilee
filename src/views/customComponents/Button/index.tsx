import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { CHANGE_CONTENT_ACTION, RESET_CONTENT_ACTION } from 'reducers/count';
import css from 'views/customComponents/Button/Button.module.scss';

interface Props {
  name: string;
  width?: string;
  height?: string;
  fontSize?: string;
  color?: string;
}

const Button: React.SFC<Props> = ({ name, width = '167px', height = '48px', fontSize = '16px', color = '#000000' }) => {
  const dispatch = useDispatch();
  const { currentContent, selectedBox } = useSelector((store: RootState) => store.count);

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.name === '이전 단계') dispatch(CHANGE_CONTENT_ACTION(currentContent - 1));
    else if (e.currentTarget.name === '다시하기') dispatch(RESET_CONTENT_ACTION());
    else if (selectedBox[currentContent] !== undefined) dispatch(CHANGE_CONTENT_ACTION(currentContent + 1));
    else alert('하나 이상의 선택이 필요합니다.');
  };

  return (
    <button
      name={name}
      className={css.Button}
      style={{ width, height, fontSize, color }}
      type="button"
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};
export default Button;
