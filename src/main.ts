import "./reboot.css"
import "./app.css"
import {
  arrowKeyHandler,
  buttonsHandler,
  handleCurrentItemClick,
} from "./eventHandler"
import { cycle, ArrayWithNextAndPrev } from "./cycle"

declare global {
  interface Window {
    AZ_WALKABLE_ARRAY_ITEMS: ArrayWithNextAndPrev<Element>
  }
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1 class='text-center'>Array Cycle</h1>

<p class="text-center">
  Use the arrow keys or buttons to cycle through the array.
</p>

<div class="array-container" id='array-container'>
  <div class="array-item current">A</div>
  <div class="array-item">B</div>
  <div class="array-item">C</div>
  <div class="array-item">D</div>
  <div class="array-item">E</div>
  <div class="array-item">F</div>
</div>

<div class='controls' id='controls'>
<button id='prev-item'>Prev</button>
<button id='next-item'>Next</button>
</div>
`

initWalkableArray(0)

export type InitWalkableArray = (startAt?: number) => void

function initWalkableArray(startAt: number = 0): void {
  const list = document.getElementById("array-container") as HTMLDivElement
  const children = Array.from(list.children)

  const AZ_WALKABLE_ARRAY_ITEMS = cycle<Element>(children, startAt)
  arrowKeyHandler(AZ_WALKABLE_ARRAY_ITEMS)
  buttonsHandler(AZ_WALKABLE_ARRAY_ITEMS)
  handleCurrentItemClick(initWalkableArray)
}
