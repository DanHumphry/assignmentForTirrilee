import React from 'react';
import css from 'views/customComponents/Header/Header.module.scss';

interface Props {
  title: string;
  sub: string | string[] | [string[], number[]];
}

const Header = ({ title, sub }: Props) => {
  return (
    <article className={css.RectangleDescArticle}>
      <h3>{title}</h3>
      {typeof sub === 'string'
        ? sub
        : sub.map((value, index, arr: any) => {
            if (typeof value === 'object') {
              return value.map((val, idx) => {
                if (typeof val === 'string') {
                  if (arr[1].indexOf(idx) !== -1) {
                    return (
                      <h4 key={idx}>
                        <mark>{val}</mark>
                      </h4>
                    );
                  }
                  return <h4 key={idx}>{val}</h4>;
                }
                return null;
              });
            }
            return <h4 key={index}>{value}</h4>;
          })}
    </article>
  );
};

export default Header;
