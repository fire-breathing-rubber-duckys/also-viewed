import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import ViewItem from './ViewItem';

const PageWrapper = styled.div`
  display: flex;
`;

const ViewPage = ({ data, valid }) => (
  <>
    <CSSTransitionGroup
      transitionName="carousel"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      component="div"
    >
      <PageWrapper>
        {data.map((item) => {
          if (valid.includes(item.productId)) {
            return <ViewItem item={item} key={item.productId} />;
          }
          return undefined;
        })}
      </PageWrapper>
    </CSSTransitionGroup>
  </>
);

ViewPage.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  valid: PropTypes.instanceOf(Array).isRequired,
};

export default ViewPage;
