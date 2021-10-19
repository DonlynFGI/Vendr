import { ProxyState } from "../AppState.js"

class VendrService {
  _addChange() {
    ProxyState.Money += 0.25

  }


  pch1() {
    if (ProxyState.Money >= 2.0) {
      ProxyState.Money -= 2.0
    }
    console.log("You Bought Some Coffee")
  }

  pch2() {
    if (ProxyState.Money >= 4.0) {
      ProxyState.Money -= 4.0
    }
    console.log("You Bought Some Cheetos")
  }

  pch3() {
    if (ProxyState.Money >= 6.0) {
      ProxyState.Money -= 6.0
    }
    console.log("You Bought Some Chicken")
  }
}
export const vendrservice = new VendrService()