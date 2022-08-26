export interface ArrayWithNextAndPrev<T> extends Array<T> {
  next: () => T
  prev: () => T
}

// Ideation https://bit.ly/3dVKWmw
export function cycle<T>(
  array: T[],
  startIndex: number = 0
): ArrayWithNextAndPrev<T> {
  if (!array[startIndex]) throw Error(`Index '${startIndex}' is out of bounds`)

  function next(this: ArrayWithNextAndPrev<T>): T {
    return this[++startIndex % this.length]
  }

  function prev(this: ArrayWithNextAndPrev<T>): T {
    startIndex = (this.length + startIndex - 1) % this.length
    return this[startIndex]
  }

  const arrayWithNext = Object.assign([...array], {
    next,
    prev,
  })

  return arrayWithNext
}
