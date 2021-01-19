import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ViewItem from '../src/components/ViewItem';

describe('View Item Rendering', () => {
  it('should render two (item-name, item-brand) divs', () => {
    const wrapper = shallow(<ViewItem item={item} />);
    expect(wrapper.find('.item-name')).to.be.lengthOf(1);
    expect(wrapper.find('.item-brand')).to.be.lengthOf(1);
  });
  it('should render one image', () => {
    const wrapper = shallow(<ViewItem item={item} />);
    expect(wrapper.find('img')).to.be.lengthOf(1);
  });
  it('should render two (item-rating, item-rating-count) labels', () => {
    const wrapper = shallow(<ViewItem item={item} />);
    expect(wrapper.find('.item-rating')).to.be.lengthOf(1);
    expect(wrapper.find('.item-rating-count')).to.be.lengthOf(1);
  });
  it('should render one item-price dev', () => {
    const wrapper = shallow(<ViewItem item={item} />);
    expect(wrapper.find('.item-price')).to.be.lengthOf(1);
  });
});

const item = {
  productId: 1,
  photoURL: 'https://www.rei.com/media/product/148949?size=280',
  brandName: 'Manduka',
  itemName: 'Lean Cork Block',
  itemRating: 5,
  itemPrice: '$16.00',
  ratingCount: 2,
};