import React, { useState } from 'react';
import css from 'views/components/Estimate/Button/Box/Box.module.scss';
import CheckBoxSvg from 'assist/Checkbox.svg';

interface Props {
  title: string;
  description?: string;
  price: string;
  height?: string;
  display?: string;
}

const CheckBox: React.SFC<Props> = ({ title, description = '', price, height = '60px', display = 'flex' }) => {
  const [justifyContent] = useState(display === 'flex' ? 'space-between' : undefined);

  return (
    <article className={css.RectangleArticle} style={{ height, display, justifyContent }}>
      <section className={css.articleDescriptionSection}>
        <h3 className={css.title}>{title}</h3>
        {description !== '' ? <h4 className={css.description}>{description}</h4> : null}
      </section>
      <section className={css.articlePriceSection}>
        <h4 className={css.price}>{price}</h4>
        <img src={CheckBoxSvg} alt="CheckBox" />
      </section>
    </article>
  );
};
export default CheckBox;
