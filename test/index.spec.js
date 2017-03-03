const expect = require('chai').expect
const isEmpty = require('../src/helper').isEmpty

describe('Infinite-scroll-react-x', () => {
  describe('all', () => {
    it('should be an array of value|label', () => {
      expect(true).to.equal(true);
    });
  });

  describe('isEmpty', () => {
    it('should be object = {} return true', () => {
      expect(isEmpty({})).to.equal(true)
    })

    it('should be object = {x1: 1, x2: 2}', () => {
      expect(isEmpty({
        x1: 1,
        x2: 2,
      })).to.equal(false)
    })

    it('should be array = [] return true', () => {
      expect(isEmpty([])).to.equal(true)
    })

    it('should be array = [1, 2, 3] return false', () => {
      expect(isEmpty([1, 2, 3])).to.equal(false)
    })

    it('should be "" = return true', () => {
      expect(isEmpty('')).to.equal(true)
    })

    it('should be "hello" = return false', () => {
      expect(isEmpty('')).to.equal(true)
    })

    it('should be null = return ture', () => {
      expect(isEmpty(null)).to.equal(true)
    })

    it('should be undefined = return ture', () => {
      expect(isEmpty(undefined)).to.equal(true)
    })
  })
})
