import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { INSERT_CHECK_BOX_ACTION, PLUS_CURRENT_PRICE_ACTION } from 'reducers/count';
import css from 'views/customComponents/Box/Box.module.scss';
import CheckBoxSvg from 'assist/Checkbox.svg';
import selectedCheckBoxSvg from 'assist/selectedCheckbox.svg';

interface Props {
  title: string;
  description?: string;
  price: string;
  height?: string;
  display?: string;
}

const CheckBox: React.SFC<Props> = ({ title, description = '', price, height = '60px', display = 'flex' }) => {
  const dispatch = useDispatch();
  const [justifyContent] = useState(display === 'flex' ? 'space-between' : undefined);
  const [selected, setSelected] = useState(false);

  const { currentContent, selectedBox, selectedPrice } = useSelector((store: RootState) => store.count);

  useEffect(() => {
    if (selectedBox[currentContent] !== undefined && selectedBox[currentContent].indexOf(title) !== -1) {
      setSelected(true);
    } else setSelected(false);
  }, [selectedBox]);

  const onClickCheckBox = () => {
    const checkBoxArr = [...selectedBox];
    const currentBox = checkBoxArr[currentContent] || [];

    const priceArr = [...selectedPrice];
    const currentPrice = priceArr[currentContent] || [];
    const result = +price.replace(/[^0-9]/g, '');

    if (currentBox.indexOf(title) !== -1) {
      currentBox.splice(currentBox.indexOf(title), 1);
      currentPrice.splice(currentPrice.indexOf(result), 1);
    } else {
      if (title === '필요없어요') {
        currentPrice.splice(0);
        currentBox.splice(0);
      } else if (currentBox.indexOf('필요없어요') !== -1) currentBox.splice(currentBox.indexOf('필요없어요'), 1);
      currentBox.push(title);
      currentPrice.push(result);
    }
    checkBoxArr[currentContent] = currentBox;
    dispatch(INSERT_CHECK_BOX_ACTION(checkBoxArr));

    priceArr[currentContent] = currentPrice;
    dispatch(PLUS_CURRENT_PRICE_ACTION(priceArr));
  };

  return (
    <article
      className={selected ? css.SelectedRectangleArticle : css.RectangleArticle}
      style={{ height, display, justifyContent }}
      onClick={onClickCheckBox}
    >
      <section className={css.articleDescriptionSection}>
        <h3 className={css.title}>{title}</h3>
        {description !== '' ? <h4 className={css.description}>{description}</h4> : null}
      </section>
      <section className={css.articlePriceSection}>
        <h4 className={css.price}>{price}</h4>
        <img src={selected ? selectedCheckBoxSvg : CheckBoxSvg} alt="CheckBox" />
      </section>
    </article>
  );
};
export default CheckBox;
