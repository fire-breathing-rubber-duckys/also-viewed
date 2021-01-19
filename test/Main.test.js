import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Main from '../src/components/Main';
import ViewMain from '../src/components/ViewMain';

describe('Main Component Rendering', () => {
  it('Should render view-main and bought-main', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('.view-main')).to.have.lengthOf(1);
    expect(wrapper.find('.bought-main')).to.have.lengthOf(1);
  });
  it('Should render ViewMain twice', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(ViewMain)).to.have.lengthOf(2);
  });
});
