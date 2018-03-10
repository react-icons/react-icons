const {OnigString} = require('..')

describe('OnigString', () => {
  it('has a length property', () => {
    expect(new OnigString('abc').length).toBe(3)
  })

  it('can be converted back into a string', () => {
    expect(new OnigString('abc').toString()).toBe('abc')
  })

  it('can retrieve substrings (for conveniently inspecting captured text)', () => {
    const string = 'abcdef'
    const onigString = new OnigString(string)
    expect(onigString.substring(2, 3)).toBe(string.substring(2, 3))
    expect(onigString.substring(2)).toBe(string.substring(2))
    expect(onigString.substring()).toBe(string.substring())
    expect(onigString.substring(-1)).toBe(string.substring(-1))
    expect(onigString.substring(-1, -2)).toBe(string.substring(-1, -2))

    onigString.substring({})
    onigString.substring(null, undefined)
  })

  it('handles invalid arguments', () => {
    expect(() => new OnigString(undefined)).toThrow('Argument must be a string')
  })
})
