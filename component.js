const React = require('react');

class MyComponent extends React.Component {
  render() {
    return React.createElement('div', null, null, 'Hi there');
  }
}

module.exports = MyComponent;
