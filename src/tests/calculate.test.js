import calculate from '../logic/calculate';

describe('Current state of calculator object', () => {
  it('Press 5 key, object change to { total: 7, next: 5 operation: +, display: 5 }', () => {
    const obj = {
      total: '7',
      next: null,
      operation: '+',
      display: '7',
    };
    expect(calculate(obj, '5')).toEqual(
      {
        total: '7',
        next: '5',
        operation: '+',
        display: '5',
      },
    );
  });
  it('Press = key, object change to { total: 12, next: null operation: null, display: 12 }', () => {
    const obj = {
      total: '7',
      next: '5',
      operation: '+',
      display: '5',
    };
    expect(calculate(obj, '=')).toEqual(
      {
        total: '12',
        next: null,
        operation: null,
        display: '12',
      },
    );
  });
  it(`Press 3 key without operation to build 153 number, object change to
  { total: null, next: 153 operation: undefined, display: 153 }`, () => {
    const obj = {
      total: null,
      next: '15',
      operation: 'undefined',
      display: '15',
    };
    expect(calculate(obj, '3')).toEqual(
      {
        total: null,
        next: '153',
        operation: 'undefined',
        display: '153',
      },
    );
  });
});
