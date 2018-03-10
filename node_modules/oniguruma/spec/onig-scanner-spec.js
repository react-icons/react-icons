const {OnigScanner} = require('..')

describe('OnigScanner', () => {
  describe('::findNextMatchSync', () => {
    it('returns the index of the matching pattern', () => {
      let scanner = new OnigScanner(['a', 'b', 'c'])
      expect(scanner.findNextMatchSync('x', 0)).toBe(null)
      expect(scanner.findNextMatchSync('xxaxxbxxc', 0).index).toBe(0)
      expect(scanner.findNextMatchSync('xxaxxbxxc', 4).index).toBe(1)
      expect(scanner.findNextMatchSync('xxaxxbxxc', 7).index).toBe(2)
      expect(scanner.findNextMatchSync('xxaxxbxxc', 9)).toBe(null)
    })

    it('includes the scanner with the results', () => {
      let scanner = new OnigScanner(['a'])
      expect(scanner.findNextMatchSync('a', 0).scanner).toBe(scanner)
    })

    describe('when the string searched contains unicode characters', () =>
      it('returns the correct matching pattern', () => {
        let scanner = new OnigScanner(['1', '2'])
        let match = scanner.findNextMatchSync('ab…cde21', 5)
        expect(match.index).toBe(1)

        scanner = new OnigScanner(['\"'])
        match = scanner.findNextMatchSync('{"…": 1}', 1)
        expect(match.captureIndices).toEqual([{index: 0, start: 1, end: 2, length: 1}])
      }))

    describe('when the string searched contains surrogate pairs', () =>
      it('counts paired characters as 2 characters in both arguments and return values', () => {
        let scanner = new OnigScanner(['Y', 'X'])
        let match = scanner.findNextMatchSync('a💻bYX', 0)
        expect(match.captureIndices).toEqual([{index: 0, start: 4, end: 5, length: 1}])

        match = scanner.findNextMatchSync('a💻bYX', 1)
        expect(match.captureIndices).toEqual([{index: 0, start: 4, end: 5, length: 1}])

        match = scanner.findNextMatchSync('a💻bYX', 3)
        expect(match.captureIndices).toEqual([{index: 0, start: 4, end: 5, length: 1}])

        match = scanner.findNextMatchSync('a💻bYX', 4)
        expect(match.captureIndices).toEqual([{index: 0, start: 4, end: 5, length: 1}])

        match = scanner.findNextMatchSync('a💻bYX', 5)
        expect(match.index).toBe(1)
        expect(match.captureIndices).toEqual([{index: 0, start: 5, end: 6, length: 1}])
      }))

    it("returns false when the input string isn't a string", () => {
      let scanner = new OnigScanner(['1'])
      expect(scanner.findNextMatchSync()).toBe(null)
      expect(scanner.findNextMatchSync(null)).toBe(null)
      expect(scanner.findNextMatchSync(2)).toBe(null)
      expect(scanner.findNextMatchSync(false)).toBe(null)
    })

    it("uses 0 as the start position when the input start position isn't a valid number", () => {
      let scanner = new OnigScanner(['1'])
      expect(scanner.findNextMatchSync('a1', Infinity).index).toBe(0)
      expect(scanner.findNextMatchSync('a1', -1).index).toBe(0)
      expect(scanner.findNextMatchSync('a1', false).index).toBe(0)
      expect(scanner.findNextMatchSync('a1', 'food').index).toBe(0)
    })
  })

  describe('when the regular expression contains double byte characters', () =>
    it('returns the correct match length', () => {
      let scanner = new OnigScanner(['Возврат'])
      let match = scanner.findNextMatchSync('Возврат long_var_name;', 0)
      expect(match.captureIndices).toEqual([{index: 0, start: 0, end: 7, length: 7}])
    }))

  describe('when the input string contains invalid surrogate pairs', () =>
    it('interprets them as a code point', () => {
      let scanner = new OnigScanner(['X'])
      let match = scanner.findNextMatchSync(`X${String.fromCharCode(0xd83c)}X`, 0)
      expect(match.captureIndices).toEqual([{index: 0, start: 0, end: 1, length: 1}])

      match = scanner.findNextMatchSync(`X${String.fromCharCode(0xd83c)}X`, 1)
      expect(match.captureIndices).toEqual([{index: 0, start: 2, end: 3, length: 1}])

      match = scanner.findNextMatchSync(`X${String.fromCharCode(0xd83c)}X`, 2)
      expect(match.captureIndices).toEqual([{index: 0, start: 2, end: 3, length: 1}])

      match = scanner.findNextMatchSync(`X${String.fromCharCode(0xdfff)}X`, 0)
      expect(match.captureIndices).toEqual([{index: 0, start: 0, end: 1, length: 1}])

      match = scanner.findNextMatchSync(`X${String.fromCharCode(0xdfff)}X`, 1)
      expect(match.captureIndices).toEqual([{index: 0, start: 2, end: 3, length: 1}])

      match = scanner.findNextMatchSync(`X${String.fromCharCode(0xdfff)}X`, 2)
      expect(match.captureIndices).toEqual([{index: 0, start: 2, end: 3, length: 1}])

      // These are actually valid, just testing the min & max
      match = scanner.findNextMatchSync(`X${String.fromCharCode(0xd800)}${String.fromCharCode(0xdc00)}X`, 2)
      expect(match.captureIndices).toEqual([{index: 0, start: 3, end: 4, length: 1}])

      match = scanner.findNextMatchSync(`X${String.fromCharCode(0xdbff)}${String.fromCharCode(0xdfff)}X`, 2)
      expect(match.captureIndices).toEqual([{index: 0, start: 3, end: 4, length: 1}])
    }))

  describe('when the start offset is out of bounds', () =>
    it('it gets clamped', () => {
      let scanner = new OnigScanner(['X'])
      let match = scanner.findNextMatchSync('X💻X', -1000)
      expect(match.captureIndices).toEqual([{index: 0, start: 0, end: 1, length: 1}])

      match = scanner.findNextMatchSync('X💻X', 1000)
      expect(match).toEqual(null)
    })
  )

  describe('::findNextMatch', () => {
    let matchCallback

    beforeEach(() => matchCallback = jasmine.createSpy('matchCallback'))

    it('returns the index of the matching pattern', () => {
      let scanner = new OnigScanner(['a', 'b', 'c'])
      scanner.findNextMatch('x', 0, matchCallback)

      waitsFor(() => matchCallback.callCount === 1)

      runs(() => {
        expect(matchCallback.argsForCall[0][0]).toBeNull()
        expect(matchCallback.argsForCall[0][1]).toBeNull()
        scanner.findNextMatch('xxaxxbxxc', 0, matchCallback)
      })

      waitsFor(() => matchCallback.callCount === 2)

      runs(() => {
        expect(matchCallback.argsForCall[1][0]).toBeNull()
        expect(matchCallback.argsForCall[1][1].index).toBe(0)
        scanner.findNextMatch('xxaxxbxxc', 4, matchCallback)
      })

      waitsFor(() => matchCallback.callCount === 3)

      runs(() => {
        expect(matchCallback.argsForCall[2][0]).toBeNull()
        expect(matchCallback.argsForCall[2][1].index).toBe(1)
        scanner.findNextMatch('xxaxxbxxc', 7, matchCallback)
      })

      waitsFor(() => matchCallback.callCount === 4)

      runs(() => {
        expect(matchCallback.argsForCall[3][0]).toBeNull()
        expect(matchCallback.argsForCall[3][1].index).toBe(2)
        scanner.findNextMatch('xxaxxbxxc', 9, matchCallback)
      })

      waitsFor(() => matchCallback.callCount === 5)

      runs(() => {
        expect(matchCallback.argsForCall[4][0]).toBeNull()
        expect(matchCallback.argsForCall[4][1]).toBeNull()
      })
    })

    it('includes the scanner with the results', () => {
      let scanner = new OnigScanner(['a'])
      scanner.findNextMatch('a', 0, matchCallback)

      waitsFor(() => matchCallback.callCount === 1)

      runs(() => {
        expect(matchCallback.argsForCall[0][0]).toBeNull()
        expect(matchCallback.argsForCall[0][1].scanner).toBe(scanner)
      })
    })

    describe('when the string searched contains unicode characters', () =>
      it('returns the correct matching pattern', () => {
        let scanner = new OnigScanner(['1', '2'])
        scanner.findNextMatch('ab…cde21', 5, matchCallback)

        waitsFor(() => matchCallback.callCount === 1)

        runs(() => {
          expect(matchCallback.argsForCall[0][0]).toBeNull()
          expect(matchCallback.argsForCall[0][1].index).toBe(1)
        })
      })
    )
  })
})
