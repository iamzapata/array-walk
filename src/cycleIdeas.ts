interface ArrayWithNext extends Array<string> {
  next: () => string
}

export function cycleRight(array: string[]): ArrayWithNext {
  let currentIndex = 0

  function next() {
    currentIndex = currentIndex + 1

    if (currentIndex === array.length) {
      currentIndex = 0
    }

    const currentItem = array[currentIndex]

    return currentItem
  }

  const arrayWithNext: ArrayWithNext = Object.assign([...array], { next })

  return arrayWithNext
}

export function cycleRightModulus(array: string[]): ArrayWithNext {
  let count = 0

  function next() {
    return array[++count % array.length]
  }

  const arrayWithNext: ArrayWithNext = Object.assign([...array], { next })

  return arrayWithNext
}

export function cycleRightStartPoint(
  array: string[],
  start: number
): ArrayWithNext {
  if (!array[start]) throw Error(`Index ${start} is out of bounds`)

  function next() {
    return array[++start % array.length]
  }

  const arrayWithNext: ArrayWithNext = Object.assign([...array], { next })

  return arrayWithNext
}

export function backwardsCycleSequence(N: number) {
  for (let i = 0; i < 20; i++) {
    const aN = N - (i % N) - 1
    console.log(i)
    console.log(`${i} % ${N}:`, i % N)
    console.log("aN", aN)
  }
}
