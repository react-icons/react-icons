const {OnigRegExp} = require('..')

describe('OnigRegExp', () => {
  describe('::search(string, index, callback)', () => {
    it('returns an array of the match and all capture groups', () => {
      let regex = new OnigRegExp('\\w(\\d+)')
      let searchCallback = jasmine.createSpy('searchCallback')
      let result = regex.search('----a123----', searchCallback)

      waitsFor(() => searchCallback.callCount === 1)

      runs(() => {
        result = searchCallback.argsForCall[0][1]
        expect(result.length).toBe(2)
        expect(result[0].match).toBe('a123')
        expect(result[0].start).toBe(4)
        expect(result[0].end).toBe(8)
        expect(result[0].index).toBe(0)
        expect(result[0].length).toBe(4)
        expect(result[1].match).toBe('123')
        expect(result[1].start).toBe(5)
        expect(result[1].end).toBe(8)
        expect(result[1].index).toBe(1)
        expect(result[1].length).toBe(3)
      })
    })

    it('returns null if it does not match', () => {
      let regex = new OnigRegExp('\\w(\\d+)')
      let searchCallback = jasmine.createSpy('searchCallback')
      let result = regex.search('--------', searchCallback)

      waitsFor(() => searchCallback.callCount === 1)

      runs(() => {
        result = searchCallback.argsForCall[0][1]
        expect(result).toBeNull()
      })
    })

    describe('when the string being searched contains a unicode character', () =>
      it('returns correct indices and lengths', () => {
        let regex = new OnigRegExp('a')
        let searchCallback = jasmine.createSpy('searchCallback')
        regex.search('ç√Ωa', 0, searchCallback)

        waitsFor(() => searchCallback.callCount === 1)

        runs(() => {
          let firstMatch = searchCallback.argsForCall[0][1]
          expect(firstMatch[0].start).toBe(3)
          expect(firstMatch[0].match).toBe('a')
          regex.search('ç√Ωabcd≈ßåabcd', 5, searchCallback)
        })

        waitsFor(() => searchCallback.callCount === 2)

        runs(() => {
          let secondMatch = searchCallback.argsForCall[1][1]
          expect(secondMatch[0].start).toBe(10)
          expect(secondMatch[0].match).toBe('a')
        })
      })
    )

    describe('when the string being searched contains non-Basic Multilingual Plane characters', () =>
      it('returns correct indices and matches', () => {
        let regex = new OnigRegExp("'")
        let searchCallback = jasmine.createSpy('searchCallback')
        regex.search("'\uD835\uDF97'", 0, searchCallback)

        waitsFor(() => searchCallback.callCount === 1)

        runs(() => {
          let match = searchCallback.argsForCall[0][1]
          expect(match[0].start).toBe(0)
          expect(match[0].match).toBe("'")
          regex.search("'\uD835\uDF97'", 1, searchCallback)
        })

        waitsFor(() => searchCallback.callCount === 2)

        runs(() => {
          let match = searchCallback.argsForCall[1][1]
          expect(match[0].start).toBe(3)
          expect(match[0].match).toBe("'")
          regex.search("'\uD835\uDF97'", 2, searchCallback)
        })

        waitsFor(() => searchCallback.callCount === 3)

        runs(() => {
          let match = searchCallback.argsForCall[2][1]
          expect(match[0].start).toBe(3)
          expect(match[0].match).toBe("'")
        })
      })
    )
  })

  describe('::searchSync(string, index)', () => {
    it('returns an array of the match and all capture groups', () => {
      let regex = new OnigRegExp('\\w(\\d+)')
      let result = regex.searchSync('----a123----')
      expect(result.length).toBe(2)
      expect(result[0].match).toBe('a123')
      expect(result[0].start).toBe(4)
      expect(result[0].end).toBe(8)
      expect(result[0].index).toBe(0)
      expect(result[0].length).toBe(4)
      expect(result[1].match).toBe('123')
      expect(result[1].start).toBe(5)
      expect(result[1].end).toBe(8)
      expect(result[1].index).toBe(1)
      expect(result[1].length).toBe(3)
    })

    it('returns null if it does not match', () => {
      let regex = new OnigRegExp('\\w(\\d+)')
      let result = regex.searchSync('--------')
      expect(result).toBeNull()
    })

    describe('when the string being searched contains a unicode character', () =>
      it('returns correct indices and lengths', () => {
        let regex = new OnigRegExp('a')

        let firstMatch = regex.searchSync('ç√Ωa', 0)
        expect(firstMatch[0].start).toBe(3)
        expect(firstMatch[0].match).toBe('a')

        let secondMatch = regex.searchSync('ç√Ωabcd≈ßåabcd', 5)
        expect(secondMatch[0].start).toBe(10)
        expect(secondMatch[0].match).toBe('a')
      })
    )

    describe('when the string being searched contains non-Basic Multilingual Plane characters', () =>
      it('returns correct indices and matches', () => {
        let regex = new OnigRegExp("'")

        let match = regex.searchSync("'\uD835\uDF97'", 0)
        expect(match[0].start).toBe(0)
        expect(match[0].match).toBe("'")

        match = regex.searchSync("'\uD835\uDF97'", 1)
        expect(match[0].start).toBe(3)
        expect(match[0].match).toBe("'")

        match = regex.searchSync("'\uD835\uDF97'", 2)
        expect(match[0].start).toBe(3)
        expect(match[0].match).toBe("'")

        match = regex.searchSync("'\uD835\uDF97'", 3)
        expect(match[0].start).toBe(3)
        expect(match[0].match).toBe("'")
      })
    )
  })

  describe('::testSync(string)', () =>
    it('returns true if the string matches the pattern', () => {
      expect(new OnigRegExp('a[b-d]c').testSync('aec')).toBe(false)
      expect(new OnigRegExp('a[b-d]c').testSync('abc')).toBe(true)
      expect(new OnigRegExp(false).testSync(false)).toBe(true)
      expect(new OnigRegExp(false).testSync(true)).toBe(false)
    })
  )

  describe('::test(string, callback)', () =>
    it('calls back with true if the string matches the pattern', () => {
      let testCallback = jasmine.createSpy('testCallback')

      new OnigRegExp('a[b-d]c').test('aec', testCallback)

      waitsFor(() => testCallback.callCount === 1)

      runs(() => {
        expect(testCallback.argsForCall[0][0]).toBeNull()
        expect(testCallback.argsForCall[0][1]).toBe(false)
        new OnigRegExp('a[b-d]c').test('abc', testCallback)
      })

      waitsFor(() => testCallback.callCount === 2)

      runs(() => {
        expect(testCallback.argsForCall[1][0]).toBeNull()
        expect(testCallback.argsForCall[1][1]).toBe(true)
      })
    })
  )
})
