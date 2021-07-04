import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { INSERT_BOX_ACTION, PLUS_CURRENT_PRICE_ACTION } from 'reducers/count';
import css from './Box.module.scss';

interface Props {
  title: string;
  description?: string;
  price: string;
  height?: string;
  display?: string;
}

const Box: React.SFC<Props> = ({ title, description = '', price, height = '158px', display = 'grid' }) => {
  const dispatch = useDispatch();
  const [justifyContent] = useState(display === 'flex' ? 'space-between' : undefined);
  const [selected, setSelected] = useState(false);

  const { selectedBox, currentContent, selectedPrice } = useSelector((store: RootState) => store.count);

  useEffect(() => {
    if (selectedBox[currentContent] === title) setSelected(true);
    else setSelected(false);
  }, [selectedBox]);

  const onClickBox = () => {
    const box = [...selectedBox];
    box[currentContent] = title;
    dispatch(INSERT_BOX_ACTION(box));
    const result = +price.replace(/[^0-9]/g, '');
    const priceArr = [...selectedPrice];
    priceArr[currentContent] = result;
    dispatch(PLUS_CURRENT_PRICE_ACTION(priceArr));
  };

  return (
    <article
      className={selected ? css.SelectedRectangleArticle : css.RectangleArticle}
      style={{ height, display, justifyContent }}
      onClick={onClickBox}
    >
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
