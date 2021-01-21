import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import ViewPage from '../src/components/ViewPage';
import ViewItem from '../src/components/ViewItem';
import usersViewed from '../data/usersViewed';
const valid = [1, 2, 3, 4, 5, 6];

describe('View Page Rendering', () => {
  it('should render six ViewItems at a time', () => {
    const wrapper = shallow(<ViewPage data={usersViewed} valid={valid}/>);
    expectChai(wrapper.find(ViewItem)).to.be.lengthOf(6);
  });
});

it('Should render correctly', () => {
  const tree = renderer
    .create(<ViewPage data={usersViewed} valid={valid} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
