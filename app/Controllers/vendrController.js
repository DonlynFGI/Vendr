import { ProxyState } from "../AppState.js"
import { vendrservice } from "../Services/vendrService.js";

function _draw() {
  // let vendr = ProxyState.vendr
  document.getElementById('dispcash').innerText = `Your Money: $${ProxyState.Money}`

}


export class vendrController {
  constructor() {
    ProxyState.on('Money', _draw);
    _draw()
  }

  addChange() {
    vendrservice._addChange()

  }

  addDollar() {
    vendrservice._addDollar()
  }


  pch1() {
    vendrservice.pch1()
  }


  pch2() {
    vendrservice.pch2()
  }

  pch3() {
    vendrservice.pch3()
  }

}