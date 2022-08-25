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
      console.warn(previous.innerHTML)
      removeCurrentClass()
      previous.classList.add("current")
    }
    if (e.key === "ArrowRight") {
      console.log("ArrowRight")
      const next = listItems.next()
      console.warn(next.innerHTML)
      removeCurrentClass()
      next.classList.add("current")
    }
  })

  return () => null
}
