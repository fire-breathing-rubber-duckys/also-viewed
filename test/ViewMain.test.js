import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import ViewMain from '../src/components/ViewMain';
import ViewPage from '../src/components/ViewPage';
import usersViewed from '../data/usersViewed';

describe('View Main Rendering', () => {
  it('should render ViewPage once', () => {
    const wrapper = shallow(<ViewMain />);
    expectChai(wrapper.find(ViewPage)).to.be.lengthOf(1);
  });
  it('should render one button at a time', () => {
    const wrapper = shallow(<ViewMain />);
    expectChai(wrapper.find('.btn')).to.be.lengthOf(1);
  });
});

it('Should render correctly', () => {
  const tree = renderer
    .create(<ViewMain data={usersViewed} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


