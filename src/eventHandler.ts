import { ArrayWithNextAndPrev } from "./cycle"

function removeCurrentClass() {
  let allElements = Array.from(document.querySelectorAll(".current"))
  for (let element of allElements) {
    element.classList.remove("current")
  }
}

export function arrowKeyHandler(listItems: ArrayWithNextAndPrev<Element>) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      console.log("ArrowLeft")
      const previous = listItems.prev()
      removeCurrentClass()
      previous.classList.add("current")
    }

    if (e.key === "ArrowRight") {
      console.log("ArrowRight")
      const next = listItems.next()
      removeCurrentClass()
      next.classList.add("current")
    }
  })

  return () => null
}

export function buttonsHandler(listItems: ArrayWithNextAndPrev<Element>) {
  const prevButton = document.getElementById("prev-item") as HTMLButtonElement
  const nextButton = document.getElementById("next-item") as HTMLButtonElement

  prevButton.addEventListener("click", () => {
    const previous = listItems.prev()
    removeCurrentClass()
    previous.classList.add("current")
  })

  nextButton.addEventListener("click", () => {
    const next = listItems.next()
    removeCurrentClass()
    next.classList.add("current")
  })
}

import { InitWalkableArray } from "./main"

export function handleCurrentItemClick(initWalkableArray: InitWalkableArray) {
  const arrayContainer = document.getElementById(
    "array-container"
  ) as HTMLDivElement

  const children = Array.from(arrayContainer.children)

  arrayContainer.addEventListener("click", (e) => {
    const { target } = e
    if (target === arrayContainer) return

    const selectedIndex = children.indexOf(<Element>target)
    removeCurrentClass()
    ;(target as HTMLDivElement).classList.add("current")
    initWalkableArray(selectedIndex)
  })
}
