# Jest snapshot re-ordering reproduction

  1. `npm install`
  2. `jest` - see tests pass
  3. Edit `component.test.js` and re-order the two tests
  4. `jest` - see tests fail on `_debugID` changes.

