import { randomBetween } from './randomBetween';

const randomSpy = jest.spyOn(Math, 'random');

describe('randomBetween', () => {
  describe('when Math.random() returns 0', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
    })

    it('called with min=3 and max=5 returns 3', () => {
      expect(randomBetween(3, 5)).toBe(3);
      expect(Math.random).toHaveBeenCalledTimes(1)
    })
  })
})