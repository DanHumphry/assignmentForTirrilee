import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';
import EndPage from 'views/components/Content/EndPage';
import HomePage from 'views/components/Content/HomePage';
import Page1 from 'views/components/Content/Page1';
import Page2 from 'views/components/Content/Page2';
import Page3 from 'views/components/Content/Page3';
import Page4 from 'views/components/Content/Page4';
import Page5 from 'views/components/Content/Page5';
import Page6 from 'views/components/Content/page6';
import Navi from 'views/components/Navi';
import css from './Estimate.module.scss';

function Estimate() {
  const { currentContent } = useSelector((store: RootState) => store.count);

  // eslint-disable-next-line react/jsx-key
  const content = [<HomePage />, <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />, <EndPage />];

  return (
    <div className={css.EstimateBody}>
      <Navi />
      {content[currentContent]}
    </div>
  );
}
export default Estimate;
