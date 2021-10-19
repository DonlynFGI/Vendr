import { ValuesController } from "./Controllers/ValuesController.js";
import { vendrController } from "./Controllers/vendrController.js"
import { vendrservice } from "./Services/vendrService.js"
class App {
  valuesController = new ValuesController();

  vendrController = new vendrController();
}

window["app"] = new App();
