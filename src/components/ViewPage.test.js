import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ViewPage from './ViewPage';
import ViewItem from './ViewItem';

describe('View Page Rendering', () => {
  it('should render six ViewItems at a time', () => {
    const wrapper = shallow(<ViewPage data={data} valid={valid}/>);
    expect(wrapper.find(ViewItem)).to.be.lengthOf(6);
  });
});


const valid = [1, 2, 3, 4, 5, 6];
const data = [  {
  productId: 1,
  photoURL: 'https://www.rei.com/media/product/148949?size=280',
  brandName: 'Manduka',
  itemName: 'Lean Cork Block',
  itemRating: 5,
  itemPrice: '$16.00',
  ratingCount: 2,
},
{
  productId: 2,
  photoURL: 'https://www.rei.com/media/product/182895?size=280',
  brandName: 'Manduka',
  itemName: 'Rectangular Bolster',
  itemRating: 3,
  itemPrice: '$68.00',
  ratingCount: 2,
},
{
  productId: 3,
  photoURL: 'https://www.rei.com/media/product/173243?size=280',
  brandName: 'Manduka',
  itemName: 'unBLOK Recycled Foam Yoga Block',
  itemRating: 5,
  itemPrice: '$24.00',
  ratingCount: 3,
},
{
  productId: 4,
  photoURL: 'https://www.rei.com/media/product/101409?size=280',
  brandName: 'Jade',
  itemName: 'Cork Yoga Block',
  itemRating: 4.8,
  itemPrice: '$14.95-$19.95',
  ratingCount: 6,
},
{
  productId: 5,
  photoURL: 'https://www.rei.com/media/product/182894?size=280',
  brandName: 'Manduka',
  itemName: 'Lean Bolster',
  itemRating: 2,
  itemPrice: '$56.00',
  ratingCount: 1,
},
{
  productId: 6,
  photoURL: 'https://www.rei.com/media/product/843154?size=280',
  brandName: 'Manduka',
  itemName: 'Recycled Foam Yoga Block',
  itemRating: 5,
  itemPrice: '$16.00',
  ratingCount: 8,
},];