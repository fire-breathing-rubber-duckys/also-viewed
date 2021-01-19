import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from './ViewItem';

const PageWrapper = styled.div`
  display: flex;
`;

const ViewPage = ({ data, valid }) => (
  <>
    <PageWrapper>
      {data.map((item) => {
        if (valid.includes(item.productId)) {
          return <Item item={item} key={item.productId} />;
        }
        return undefined;
      })}
    </PageWrapper>
  </>
);

ViewPage.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  valid: PropTypes.instanceOf(Array).isRequired,
};

export default ViewPage;
