import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import ViewMain from '../src/components/ViewMain';
import ViewPage from '../src/components/ViewPage';
import usersViewed from '../data/usersViewed';
const valid = [1, 2, 3, 4, 5, 6];

describe('View Main Rendering', () => {
  it('should render ViewPage once', () => {
    const wrapper = shallow(<ViewMain />);
    expectChai(wrapper.find(ViewPage)).to.be.lengthOf(1);
  });
});

it('Should only render the left button, when the right is click', () => {
  const wrapper = shallow(<ViewMain data={usersViewed} valid={valid}/>);
  wrapper.find('.btn-right').simulate('click');
  expectChai(wrapper.find('.btn-left')).to.be.lengthOf(1);
});

it('Should render correctly', () => {
  const tree = renderer
    .create(<ViewMain data={usersViewed} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
