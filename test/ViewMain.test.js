import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ViewMain from '../src/components/ViewMain';
import ViewPage from '../src/components/ViewPage';

describe('View Main Rendering', () => {
  it('should render ViewPage once', () => {
    const wrapper = shallow(<ViewMain />);
    expect(wrapper.find(ViewPage)).to.be.lengthOf(1);
  });
  it('should render one button at a time', () => {
    const wrapper = shallow(<ViewMain />);
    expect(wrapper.find('.btn')).to.be.lengthOf(1);
  })
});