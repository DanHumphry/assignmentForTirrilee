import React from 'react';
import css from 'views/components/Estimate/Button/Header/Header.module.scss';

interface Props {
  title: string;
  sub: string | string[];
}

const Header = ({ title, sub }: Props) => {
  return (
    <article className={css.RectangleDescArticle}>
      <h3>{title}</h3>
      {typeof sub === 'string'
        ? sub
        : sub.map((v, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <h4 key={i}>{v}</h4>
          ))}
    </article>
  );
};

export default Header;
