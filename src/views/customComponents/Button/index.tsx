import React from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_CONTENT_ACTION } from 'reducers/count';
import css from './Button.module.scss';

interface Props {
  name: string;
  width?: string;
  height?: string;
  fontSize?: string;
  color?: string;
}

const Button: React.SFC<Props> = ({ name, width = '167px', height = '48px', fontSize = '16px', color = '#000000' }) => {
  const dispatch = useDispatch();
  const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.name === '이전 단계') dispatch(CHANGE_CONTENT_ACTION(-1));
    else dispatch(CHANGE_CONTENT_ACTION(1));
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
