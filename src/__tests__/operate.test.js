import operate from '../logic/operate';

describe('Operate two numbers', () => {
  it('Add 10 + 15 equal to 25', () => {
    expect(operate(10, 15, '+')).toBe('25');
  });
  it('Subtract 15 - 10 equal to 5', () => {
    expect(operate(15, 10, '-')).toBe('5');
  });
  it('Multiplication 15 x 10 equal to 150', () => {
    expect(operate(15, 10, 'x')).toBe('150');
  });
  it('Division 15 ÷ 10 equal to 1.5', () => {
    expect(operate(15, 10, '÷')).toBe('1.5');
  });
  it("Division 15 ÷ 0 throw error Can't divide by 0.", () => {
    expect(operate(15, 0, '÷')).toBe("Can't divide by 0.");
  });
  it('Percentage 90 % 15 equal to 0', () => {
    expect(operate(90, 15, '%')).toBe('0');
  });
  it("Percentage 15 % 0 equal to Can't find modulo as can't divide by 0.", () => {
    expect(operate(15, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
