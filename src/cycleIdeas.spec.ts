import {
  cycleRight,
  cycleRightModulus,
  cycleRightStartPoint,
} from "./cycleIdeas"

describe("cycleRight", () => {
  it("get next intem in the array, start at index 0", () => {
    const arrayCycle = cycleRight(["a", "b", "c", "d"])

    ;["b", "c", "d", "a", "b", "c", "d", "a"].forEach((letter) => {
      expect(arrayCycle.next()).toEqual(letter)
    })
  })
})

describe("cycleRightModulus", () => {
  it("get next item in the array, starting at index 0", () => {
    const arrayCycle = cycleRightModulus(["a", "b", "c", "d"])

    ;["b", "c", "d", "a", "b", "c", "d", "a"].forEach((letter) => {
      expect(arrayCycle.next()).toEqual(letter)
    })
  })
})

describe("cycleRightStartPoint", () => {
  it("get next item in the array, starting at the specified index", () => {
    const arrayCycle = cycleRightStartPoint(["a", "b", "c", "d"], 2)

    ;["d", "a", "b", "c", "d", "a", "b", "c"].forEach((letter) => {
      expect(arrayCycle.next()).toEqual(letter)
    })
  })
})
