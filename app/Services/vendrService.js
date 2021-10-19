import { ProxyState } from "../AppState.js"

class VendrService {
  _addChange() {
    ProxyState.Money += 0.25

  }

  _addDollar() {
    ProxyState.Money += 1.00
  }


  pch1() {
    if (ProxyState.Money >= 2.0) {
      ProxyState.Money -= 2.0
    }
    alert("You Bought Some Coffee")
    console.log("You Bought Some Coffee")
  }

  pch2() {
    if (ProxyState.Money >= 4.0) {
      ProxyState.Money -= 4.0
    }
    alert('You Bought Some Cheetos')
    console.log("You Bought Some Cheetos")
  }

  pch3() {
    if (ProxyState.Money >= 6.0) {
      ProxyState.Money -= 6.0
    }
    alert("You Bought Some Chicken (Gross, don't eat that!)")
    console.log("You Bought Some Chicken")
  }
}
export const vendrservice = new VendrService()