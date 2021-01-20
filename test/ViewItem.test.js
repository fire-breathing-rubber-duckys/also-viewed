import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import ViewItem from '../src/components/ViewItem';
import StarRating from '../src/components/StarRating';

const item = {
  productId: 1,
  photoURL: 'https://www.rei.com/media/product/148949?size=280',
  brandName: 'Manduka',
  itemName: 'Lean Cork Block',
  itemRating: 5,
  itemPrice: '$16.00',
  ratingCount: 2,
};

describe('View Item Rendering', () => {
  it('should render two (item-name, item-brand) divs', () => {
    const wrapper = shallow(<ViewItem item={item} />);
    expectChai(wrapper.find('.item-name')).to.be.lengthOf(1);
    expectChai(wrapper.find('.item-brand')).to.be.lengthOf(1);
  });
  it('should render one image', () => {
    const wrapper = shallow(<ViewItem item={item} />);
    expectChai(wrapper.find('img')).to.be.lengthOf(1);
  });
  it('should render StarRating once', ()=> {
    const wrapper = shallow(<ViewItem item={item} />);
    expectChai(wrapper.find(StarRating)).to.be.lengthOf(1);
  });
  it('should render one item-price dev', () => {
    const wrapper = shallow(<ViewItem item={item} />);
    expectChai(wrapper.find('.item-price')).to.be.lengthOf(1);
  });
});

it('Should render correctly', () => {
  const tree = renderer
    .create(<ViewItem item={item} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});