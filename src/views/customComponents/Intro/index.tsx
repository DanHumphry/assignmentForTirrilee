import React from 'react';
import css from 'views/customComponents/Intro/Intro.module.scss';

interface Props {
  step: number;
  title: string | string[];
  description?: string | string[];
}

const Intro: React.SFC<Props> = ({ step, title, description = '' }) => {
  const splitDesc = () => {
    const res = description[0].split(`${description[1]}`);
    return (
      <h3>
        {res[0]}
        <mark>{description[1]}</mark>
        {res[1]}
      </h3>
    );
  };
  return (
    <article className={css.BoxArticle}>
      <div className={css.titleDiv}>
        <h2>
          {step}단계, {typeof title === 'string' ? title : title.map((v, i) => (i === 0 ? v : <div key={i}>{v}</div>))}
        </h2>
      </div>
      {description !== '' ? (
        <div className={css.descDiv}>{typeof description === 'string' ? <h3>{description}</h3> : splitDesc()}</div>
      ) : null}
    </article>
  );
};

export default Intro;
