import React, { useState } from 'react';
import css from './Box.module.scss';

interface Props {
  title: string;
  description?: string;
  price: string;
  height?: string;
  display?: string;
}

const Box: React.SFC<Props> = ({ title, description = '', price, height = '158px', display = 'grid' }) => {
  const [justifyContent] = useState(display === 'flex' ? 'space-between' : undefined);

  return (
    <article className={css.RectangleArticle} style={{ height, display, justifyContent }}>
      <section className={css.articleDescriptionSection}>
        <h3 className={css.title}>{title}</h3>
        {description !== '' ? <h4 className={css.description}>{description}</h4> : null}
      </section>
      <section className={css.articlePriceSection}>
        <h4 className={css.price}>{price}</h4>
      </section>
    </article>
  );
};
export default Box;
