import React from 'react';
import css from 'views/components/Estimate/Button/Intro/Intro.module.scss';

interface Props {
  step: number;
  title: string | string[];
  description?: string;
}

const Intro: React.SFC<Props> = ({ step, title, description = '' }) => {
  return (
    <article className={css.BoxArticle}>
      <div className={css.titleDiv}>
        <h2>
          {/* eslint-disable-next-line react/no-array-index-key */}
          {step}단계, {typeof title === 'string' ? title : title.map((v, i) => (i === 0 ? v : <div key={i}>{v}</div>))}
        </h2>
      </div>
      {description !== '' ? (
        <div className={css.descDiv}>
          <h3>{description}</h3>
        </div>
      ) : null}
    </article>
  );
};

export default Intro;
