import {
  cycleRight,
  cycleRightModulus,
  cycleRightStartPoint,
  cycle,
} from "./cycle"

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

/* 
  Write a function that takes in two parameters, startIndex and array. 
  It should expose two methods, prev and next. When the methods are invoked, they should
  return the previous or next item on the array. The first time either method runs, the start
  item is the startIndex. So cycle(['a', 'b', 'c'], 1).next() returns 'a', 
  cycle(['a', 'b', 'c', 'd'], 2).next() returns 'b'
 */

describe("cycle", () => {
  it("throws if the start index is out of bounds", () => {
    expect(() => cycle(["a", "b", "c"], 3)).toThrow(
      "Index '3' is out of bounds"
    )
  })

  it("walks an array forwards", () => {
    const arrayCycle = cycle(["a", "b", "c", "d", "e", "f"], 2)

    ;["d", "e", "f", "a", "b", "c", "d", "e", "f", "a", "b", "c", "d"].forEach((letter) =>
      expect(arrayCycle.next()).toEqual(letter)
    )
  })

  it("cycles array backwards", () => {
    const arrayCycle = cycle(["a", "b", "c", "d"], 2)

    ;["b", "a", "d", "c", "b", "a", "d", "c", "b"].forEach((letter) =>
      expect(arrayCycle.prev()).toEqual(letter)
    )
  })

  it("cycles array backwards and forwards", () => {
    const arrayCycle = cycle(["a", "b", "c", "d"], 2)

    expect(arrayCycle.next()).toEqual("d")
    expect(arrayCycle.next()).toEqual("a")
    expect(arrayCycle.next()).toEqual("b")
    expect(arrayCycle.next()).toEqual("c")
    expect(arrayCycle.prev()).toEqual("b")
    expect(arrayCycle.prev()).toEqual("a")
    expect(arrayCycle.prev()).toEqual("d")
    expect(arrayCycle.prev()).toEqual("c")
    expect(arrayCycle.prev()).toEqual("b")
    expect(arrayCycle.prev()).toEqual("a")
    expect(arrayCycle.next()).toEqual("b")
    expect(arrayCycle.next()).toEqual("c")
  })
})
