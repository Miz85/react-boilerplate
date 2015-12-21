// We have to create our mocked DOM before we import react
require('./testdom')('<html><body></body></html>');

import {expect} from 'chai';
import React from 'react';
import MyComponent from '../src/components/MyComponent';
import TestUtils from 'react-addons-test-utils';



describe('Sample test', () => {
  it('works', () => {
    expect(1).to.equal(1);
  });
});

describe('Component test', () => {
  it('renders in test mode', () => {
    let componentToTest = TestUtils.renderIntoDocument(<MyComponent />);

    let div = TestUtils.findRenderedDOMComponentWithTag(
       componentToTest, 'div'
    );

    expect(div.textContent).to.equal("Sub Route !");
  });
});
