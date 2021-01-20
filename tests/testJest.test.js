

describe('Testing Jest', () => {
  it('should work', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
  it('should not work', () => {
    const foo = true;
    expect(foo).toBe(false);
  })
})