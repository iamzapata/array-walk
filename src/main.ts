import "./reboot.css"
import "./app.css"
import { arrowKeyHandler } from "./arrowKeyHandler"
import { cycle, ArrayWithNextAndPrev } from "./cycle"

declare global {
  interface Window {
    AZ_WALKABLE_ARRAY_ITEMS: ArrayWithNextAndPrev<Element>
  }
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    
    <h1 class='text-center'>Array Walk</h1>

    <p class="text-center">
      Use the arrow keys or buttons to walk through the array.
    </p>

    <div class="array-container" id='array-container'>
      <div class="array-item current">A</div>
      <div class="array-item">B</div>
      <div class="array-item">C</div>
      <div class="array-item">D</div>
      <div class="array-item">E</div>
      <div class="array-item">F</div>
    </div>
  </div>
`

initWalkableArray()

function initWalkableArray() {
  const list = document.getElementById("array-container") as HTMLDivElement
  const children = Array.from(list.children)

  const AZ_WALKABLE_ARRAY_ITEMS = cycle<Element>(children, 2)
  arrowKeyHandler(AZ_WALKABLE_ARRAY_ITEMS)
}
