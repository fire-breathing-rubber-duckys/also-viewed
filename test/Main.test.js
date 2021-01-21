import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import Main from '../src/components/Main';
import ViewMain from '../src/components/ViewMain';

describe('Main Component Rendering', () => {
  it('Should render view-main and bought-main', () => {
    const wrapper = shallow(<Main />);
    expectChai(wrapper.find('.view-main')).to.have.lengthOf(1);
    expectChai(wrapper.find('.bought-main')).to.have.lengthOf(1);
  });
  it('Should render ViewMain twice', () => {
    const wrapper = shallow(<Main />);
    expectChai(wrapper.find(ViewMain)).to.have.lengthOf(2);
  });
  it('Should contain both headers', () => {
    const wrapper = shallow(<Main />);
    expectChai(wrapper.find('.title')).to.have.lengthOf(2);
  });
});

it('Should render correctly', () => {
  const tree = renderer
    .create(<Main />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});