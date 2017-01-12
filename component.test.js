const React = require('react');
const {shallow} = require('enzyme');
const MyComponent = require('./component');

describe('Component', () => {
  it('first', () => {
    const root = shallow(React.createElement(MyComponent));

    expect(root).toMatchSnapshot();
  });

  it('second', () => {
    const root = shallow(React.createElement(MyComponent));

    expect(root).toMatchSnapshot();
  });
});
