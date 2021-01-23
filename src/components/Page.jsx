import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from './Item';

const Flex = styled.div`
  display: flex;
`;

const Page = ({ data, page, setPage }) => (
  <>
    <Flex>
      {data.map((item) => {
        let valid;
        if (page === 0) {
          valid = [1, 2, 3, 4, 5, 6];
        } else {
          valid = [6, 7, 8, 9, 10, 11];
        }
        if (valid.includes(item.productId) && item.productId !== 6) {
          return <Item item={item} />;
        }
        if (item.productId === 6) {
          return <Item setPage={setPage} item={item} />;
        }
      })}
    </Flex>
  </>
);

Page.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  page: PropTypes.number.isRequired,
};

export default Page;
